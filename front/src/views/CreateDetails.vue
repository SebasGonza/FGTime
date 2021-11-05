<template>
  <div class="create-details-view">
    <navbar/>
    <h2 class="title">Crear detalle de historia clinica</h2>

    <form id="formulario" class="row g-3" @submit.prevent="agregarRegistro">
      <div class="col-md-2">
        <label for="inputEmail4" class="form-label">Temperatura</label>
        <input
          v-model="temperatura"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: 24 °C"
        />
      </div>
      <div class="col-md-2">
        <label for="inputEmail4" class="form-label">Peso</label>
        <input
          v-model="peso"
          type="number"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: 15 kg"
        />
      </div>
      
      <div class="col-md-4">
        <label for="inputEmail4" class="form-label">Frecuencia cardiaca</label>
        <input
          v-model="frecCardiaca"
          type="number"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: 15 /s"
        />
      </div>
      <div class="col-md-4">
        <label for="inputEmail4" class="form-label">Frecuencia respiratoria</label>
        <input
          v-model="frecRespiratoria"
          type="number"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: 15 /s"
        />
      </div>
      <div class="col-md-4">
        <label for="inputEmail4" class="form-label">Fecha y hora</label>
        <input
          v-model="fechaHora"
          type="datetime-local"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: 7:15 10-09-2021"
        />
      </div>
      <div class="col-md-8">
        <label for="inputEmail4" class="form-label">Alimentación</label>
        <input
          v-model="alimentacion"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: Saludable"
        />
      </div>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Habitad</label>
        <input
          v-model="habitad"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: Sedentarismo"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Observación</label
        >
        <textarea
          v-model="observacion"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div class="col-10">
        <button type="submit" class="btn btn-primary">Crear</button>
      </div>
    </form>
    
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
    name: 'CreateDetails',
    data(){
      return{
        temperatura: null,
        peso: null,
        frecCardiaca: null,
        frecRespiratoria: null,
        fechaHora: null,
        alimentacion: null,
        habitad: null,
        observacion: null
      }
    }
}
</script>

<style>

</style>