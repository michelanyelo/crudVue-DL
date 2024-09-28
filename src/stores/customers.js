import { defineStore } from "pinia";
import { ref } from "vue";
import { $db } from "@/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

export const useCustomersStore = defineStore("customers", () => {
    const customers = ref([])

    // Listar Clientes desde Firebase
    async function fetchCustomers() {
        try {
            const customerRef = collection($db, "customers")

            onSnapshot(customerRef, (snapshot) => {
                customers.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            })
        } catch (error) {
            console.error(error)
        }
    }

    // Agreagar Cliente hacia Firebase
    async function addCustomer(nombre, correo) {
        try {
            const customerRef = collection($db, "customers")
            await addDoc(customerRef, { nombre: nombre, correo: correo })
        } catch (error) {
            console.error("Error al agregar cliente:", error)
        }
    }

    // Eliminar Cliente desde Firebase
    async function deleteCustomer(id) {
        try {
            const customerRef = doc($db, "customers", id)

            await deleteDoc(customerRef)
        } catch (error) {
            console.error(error)
        }
    }


    return {
        customers,
        fetchCustomers,
        addCustomer,
        deleteCustomer
    }
})