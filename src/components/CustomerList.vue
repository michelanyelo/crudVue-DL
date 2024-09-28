<script setup>
import { ref, onMounted } from 'vue'
import { useCustomersStore } from "@/stores/customers"
import ModalComp from "./ModalComp.vue"

const customersStore = useCustomersStore()

onMounted(() => {
    customersStore.fetchCustomers()
})

// Estado para controlar la visibilidad del modal
const showModal = ref(false)
const openModal = () => {
    showModal.value = true
}

// Función para agregar cliente a Firebase
const handleAddCustomer = async (customer) => {
    const { nombre, correo } = customer

    customersStore.addCustomer(nombre, correo)

    showModal.value = false
}

// Funcion para elimianr cliente de Firebase
const deleteCustomer = (id) => {
    customersStore.deleteCustomer(id)
}
</script>

<template>
    <div class="container">
        <nav class="border border-1 rounded rounded-1 shadow ps-3 d-flex align-items-center py-1 bg-white"
            style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
            aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Inicio</a></li>
                <li class="breadcrumb-item active" aria-current="page">Crud Clientes</li>
            </ol>
        </nav>
    </div>

    <div class="container">
        <!-- Botón para agregar un nuevo cliente -->
        <div class="d-flex justify-content-start mt-5">
            <button type="button" class="btn btn-primary" @click="openModal">
                Agregar Cliente
            </button>
        </div>

        <!-- Tabla de clientes -->
        <table class="table table-hover shadow mt-3">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo Electrónico</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customersStore.customers" :key="customer.id">
                    <td>{{ customer.nombre }}</td>
                    <td>{{ customer.correo }}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" @click="deleteCustomer(customer.id)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Componente Modal para agregar cliente -->
    <ModalComp :show="showModal" @close="showModal = false" @submit="handleAddCustomer" />
</template>

<style scoped>
.btn-primary {
    background-color: #526DFE;
    border-color: #526DFE;
}

.btn-primary:hover {
    background-color: #4561ff;
    border-color: #4561ff;
}

.btn-danger {
    background-color: #D54E69;
    border-color: #D54E69;
}

.btn-danger:hover {
    background-color: #be3354;
    border-color: #be3354;
}
</style>
