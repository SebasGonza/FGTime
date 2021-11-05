<template>
  <div class="create-user-view">
    <navbar />
    <h2 class="title">Crear colaboradores</h2>
    <form id="formulario" class="row g-3" @submit.prevent="agregarRegistro">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Nombres</label>
        <input
          v-model="nombre"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: Juan Esteban"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Apellidos</label>
        <input
          v-model="apellido"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Ej: Franco Estacio"
        />
      </div>
      <div class="col-5">
        <label for="inputAddress" class="form-label">Cargo</label>
        <input
          v-model="cargo"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Ej: Admin"
        />
      </div>
      <div class="col-7">
        <label for="inputAddress" class="form-label">Especialidad</label>
        <input
          v-model="especialidad"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Ej: Sistemas"
        />
      </div>
      <div class="col-md-2">
        <label for="inputState" class="form-label">Tipo de documento</label>
        <select v-model="tipoDocumento" id="inputState" class="form-select">
          <option selected>C.C</option>
          <option>T.I</option>
        </select>
      </div>
      <div class="col-10">
        <label for="inputAddress" class="form-label">Número de documento</label>
        <input
          v-model="numeroDocumento"
          type="number"
          class="form-control"
          id="inputAddress"
          placeholder="Ej: 102020202"
        />
      </div>
      <div class="col-10">
        <button type="submit" class="btn btn-primary">Crear</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
const url = "http://localhost:3000/users";
export default {
  components: { Navbar },
  name: "CreateUser",
  data() {
    return {
      nombre: null,
      apellido: null,
      cargo: null,
      especialidad: null,
      tipoDocumento: null,
      numeroDocumento: null,
      showMessage:false
    };
  },
  methods: {
    agregarRegistro() {
      let data = {
        nombre: this.nombre,
        apellido: this.apellido,
        cargo: this.cargo,
        especialidad: this.especialidad,
        tipo_documento: this.tipoDocumento,
        documento_identificacion: this.numeroDocumento,
      };
      axios.post(url,data).then((res) => {
        alert('Se ha creado el usuario con exito!');
      });
    },
  },
};
</script>

<style>
</style>