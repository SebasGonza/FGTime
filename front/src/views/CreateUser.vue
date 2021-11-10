<template>
  <div class="create-user-view">
    <navbar />
    <h2 class="title">Crear Usuario</h2>
    <form id="formulario" class="row g-3" @submit.prevent="agregarRegistro">
      
      <!--Nombres-->
      <div class="col-md-4">
        <label for="inputNombre" class="form-label">Nombres</label>
        <input
          v-model="nombre"
          type="text"
          class="form-control"
          id="inputNombre"
          placeholder="Ej: Juan Esteban"
        />
      </div>

      <!--Apellidos-->
      <div class="col-md-4">
        <label for="inputApellido" class="form-label">Apellidos</label>
        <input
          v-model="apellido"
          type="text"
          class="form-control"
          id="inputApellido"
          placeholder="Ej: Franco Estacio"
        />
      </div>

      <!--Tipo De Documento-->
      <div class="col-md-4">
        <label for="inputTipoDocumento" class="form-label">Tipo de documento</label>
        <select v-model="tipoDocumento" id="inputTipoDocumento" class="form-select">
          <option selected="true" disabled="disabled">Selecciona tipo de documento</option>
          <option>C.C</option>
          <option>T.I</option>
        </select>
      </div>

      <!--# de Documento-->
      <div class="col-4">
        <label for="inputNumeroDocumento" class="form-label">Número de documento</label>
        <input
          v-model="numeroDocumento"
          type="number"
          class="form-control"
          id="inputNumeroDocumento"
          placeholder="Ej: 102020202"
        />
      </div>

      <!--Fecha nacimiento-->
      <div class="col-4">
        <label for="inputFechaNacimiento" class="form-label">Fecha de Nacimiento</label>
        <input
          v-model="fechaNacimiento"
          type="date"
          class="form-control"
          id="inputFechaNacimiento"
        />
      </div>

      <!--Telefono-->
      <div class="col-4">
        <label for="inputTelefono" class="form-label">Telefono</label>
        <input
          v-model="telefono"
          type="tel"
          class="form-control"
          id="inputTelefono"
          placeholder="Ej: 9900281"
        />
      </div>

      <!--Email-->
      <div class="col-5">
        <label for="inputEmail" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="Ej: juanito@gmail.com"
        />
      </div>

      <!--Cargo-->
      <div class="col-3">
        <label for="inputCargo" class="form-label">Cargo</label>
        <select class="form-select" id="inputCargo" v-model="cargo">
          <option selected="true" disabled="disabled">Selecciona un cargo</option>
          <option value="1">Administrador</option>
          <option value="2">Operario</option>
      </select>
      </div>


      <!--Direccion-->
      <div class="col-4">
        <label for="inputDireccion" class="form-label">Direccion</label>
        <input
          v-model="direccion"
          type="text"
          class="form-control"
          id="inputDireccion"
          placeholder="Ej: cll13 #03-33"
        />
      </div>


      <!--Nombre de Usuario-->
      <div class="col-md-2">
        <label for="inputUsername" class="form-label">Nombre De Usuario</label>
        <input
          v-model="nombreUsuario"
          type="text"
          class="form-control"
          id="inputUsername"
          placeholder="Ej: JuanAk420"
        />
      </div>

      <!--Contraseña-->
      <div class="col-md-5">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="*************"
        />
      </div>

      <!--Confirmar contraseña-->
      <div class="col-md-5">
        <label for="inputPassword2" class="form-label">Confirmar contraseña</label>
        <input
          v-model="confirmarPassword"
          type="password"
          class="form-control"
          id="inputPassword2"
          placeholder="***********"
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
const url = "http://localhost:3000/";
export default {
  components: { Navbar },
  name: "CreateUser",
  data() {
    return {
      nombreUsuario: null,
      password: null,
      confirmarPassword: null,
      nombre: null,
      apellido: null,
      cargo: null,
      email: null,
      tipoDocumento: null,
      numeroDocumento: null,
      direccion: null,
      telefono: null,
      fechaNacimiento: null,
      cargo_id: null
    };
  },
  methods: {
    verificaCampos(){
      let resultado = false;

      if(!(this.nombre==null||this.apellido==null||this.tipoDocumento==null||this.numeroDocumento==null||this.fechaNacimiento==null||this.telefono==null||this.email==null||this.email==null||this.cargo==null||this.direccion==null||this.nombreUsuario==null||this.password==null||this.confirmarPassword==null)){
        resultado=true;
      }

      return resultado;
    },

    verificaPassword(){
      let resultado = false;

      if(this.password==this.confirmarPassword){
        resultado = true;
      }

      return resultado;
    },

    compruebaRol(){
      if(this.cargo=="Administrador"){
        this.cargo_id=1;
      }else{
        this.cargo_id=2;
      }
    },

    agregarRegistro() {
      if(this.verificaCampos()){
        console.log(this.verificaCampos());
        if(this.verificaPassword()){
          this.compruebaRol();
          let data = {
            nombre_usuario: this.nombreUsuario,
            password_usuario: this.password,
            nombre: this.nombre,
            apellido: this.apellido,
            tipo_documento: this.tipoDocumento,
            numero_documento: this.numeroDocumento,
            telefono: this.telefono,
            email: this.email,
            fecha_nacimiento: this.fechaNacimiento,
            direccion: this.direccion,
            id_rol: this.cargo,
          };
          axios.post(url,data).then((res) => {
            alert('Se ha creado el usuario con exito!');
          });
        }else{
          alert('No coincide la contraseña');
        }
      }else{
        alert('Campos vacios!');
      }
      
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