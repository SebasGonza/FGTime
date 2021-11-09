<template>
  <div class="create-user-view">
    <navbar />
    <h2 class="title">Crear Usuarios</h2>
    <form id="formulario" class="row g-3" @submit.prevent="agregarRegistro">
      
      <!--Nombre de Usuario-->
      <div class="col-md-4">
        <label for="inputEmail4" class="form-label">Nombre De Usuario</label>
        <input
          v-model="nombreUsuario"
          type="text"
          class="form-control"
          id="inputUsername"
          placeholder="JuanAk420"
        />
      </div>

      <!--Contraseña-->
      <div class="col-md-4">
        <label for="inputEmail4" class="form-label">Contraseña</label>
        <input
          v-model="contraseña"
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="*************"
        />
      </div>

      <!--Confirmar contraseña-->
      <div class="col-md-4">
        <label for="inputEmail4" class="form-label">Confirmar contraseña</label>
        <input
          v-model="confirmarContraseña"
          type="password"
          class="form-control"
          id="inputPassword2"
          placeholder="***********"
        />
      </div>

      <!--Nombres-->
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Nombres</label>
        <input
          v-model="nombres"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Juan Esteban"
        />
      </div>

      <!--Apellidos-->
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Apellidos</label>
        <input
          v-model="apellido"
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Franco Estacio"
        />
      </div>

      <!--Cargo-->
      <div class="col-6">
        <label for="inputAddress" class="form-label">Cargo</label>
        <select class="form-select" aria-label="Default select example" v-model="cargo">
          <option selected>Selecciona un cargo</option>
          <option value="1">Administrador</option>
          <option value="2">Operario</option>
      </select>
      </div>

      <!--Email-->
      <div class="col-6">
        <label for="inputAddress" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputAddress"
          placeholder="juanito@gmail.com"
        />
      </div>

      <!--Direccion-->
      <div class="col-6">
        <label for="inputAddress" class="form-label">Direccion</label>
        <input
          v-model="direccion"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="cll13 #03-33"
        />
      </div>

      <!--Telefono-->
      <div class="col-6">
        <label for="inputAddress" class="form-label">Telefono</label>
        <input
          v-model="telefono"
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="9900281"
        />
      </div>

      <!--Tipo De Documento-->
      <div class="col-md-6">
        <label for="inputState" class="form-label">Tipo de documento</label>
        <select v-model="tipoDocumento" id="inputState" class="form-select">
          <option selected>C.C</option>
          <option>T.I</option>
        </select>
      </div>

      <!--# de Documento-->
      <div class="col-6">
        <label for="inputAddress" class="form-label">Número de documento</label>
        <input
          v-model="numeroDocumento"
          type="number"
          class="form-control"
          id="inputAddress"
          placeholder="Ej: 102020202"
        />
      </div>
      
      <!--Botón-->
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
      nombreUsuario: null,
      contraseña: null,
      confirmarContraseña: null,
      nombre: null,
      apellido: null,
      cargo: null,
      email: null,
      tipoDocumento: null,
      numeroDocumento: null,
      direccion: null,
      telefono: null,
      showMessage:false
    };
  },
  methods: {
    agregarRegistro() {
      let data = {
        nombreUsuario: this.nombreUsuario,
        contraseña: this.contraseña,
        confirmarContraseña: this.confirmarContraseña,
        nombre: this.nombre,
        apellido: this.apellido,
        cargo: this.cargo,
        email: this.email,
        direccion: this.direccion,
        telefono: this.barrio,
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
#formulario{
  margin: 50px;
  margin-top: 0%;
}
</style>