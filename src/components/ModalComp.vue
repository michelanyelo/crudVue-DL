<script setup>
import { ref } from 'vue'

const newCustomer = ref({
    nombre: '',
    correo: ''
})

const closeModal = () => {
    emit('close')
}

const emit = defineEmits(['close', 'submit'])

const submitForm = () => {
    // Emitir los datos del nuevo cliente al componente padre
    emit('submit', { ...newCustomer.value })

    // Limpiar el formulario
    newCustomer.value = { nombre: '', correo: '' }

    closeModal()
}


defineProps(['show'])
</script>

<template>
    <div v-if="show" id="NuevoClienteModal" class="modal fade show d-block" tabindex="-1"
        style="background-color: rgba(0, 0, 0, 0.5);" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Agregar Nuevo Cliente</h5>
                    <button type="button" class="btn-close" @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="customerName" class="form-label">Nombre</label>
                            <input type="text" v-model="newCustomer.nombre" class="form-control" id="customerName"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="customerEmail" class="form-label">Correo Electrónico</label>
                            <input type="email" v-model="newCustomer.correo" class="form-control" id="customerEmail"
                                required>
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-backdrop.show {
    display: none;
}
</style>
