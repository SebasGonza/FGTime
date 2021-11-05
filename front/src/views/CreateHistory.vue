<template>
  <div class="create-history-view">
    <navbar />
    <h2 class="title">Crear historia clinica</h2>
    <!-- formulario usuario -->
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
      <div class="col-md-2">
        <label for="inputState" class="form-label">Tipo de documento</label>
        <select v-model="tipoDocumento" id="inputState" class="form-select">
          <option selected>C.C</option>
          <option>T.I</option>
        </select>
      </div>
      <div class="col-5">
        <label for="inputAddress" class="form-label">Número de documento</label>
        <input
          v-model="numeroDocumento"
          type="number"
          class="form-control"
          id="inputAddress"
          placeholder="Ej: 102020202"
        />
      </div>
      <div class="col-md-5">
        <label for="inputState" class="form-label">Sexo</label>
        <select v-model.number="sexoUsuario" id="inputState" class="form-select">
          <option selected>Choose...</option>
          <option>1 Femenimo</option>
          <option>2 Masculino</option>
          <option>3 Otro</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Estado</label
        >
        <textarea
          v-model="estado"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div class="col-md-2">
        <label for="inputState" class="form-label">Número de mascotas</label>
        <select
          v-model.number="numMascotas"
          id="inputState"
          class="form-select"
        >
          <option selected v-for="num in numeros" :key="num">{{ num }}</option>
        </select>
      </div>
      <!-- formulario mascotas -->
      <div v-for="veces in numMascotas" :key="veces" class="row g-3">
        <h3>Mascota {{veces}} </h3>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Nombre</label>
            <input v-model="nombreMascota" type="text" class="form-control" id="inputEmail4" placeholder="Ej: Mateo"/>
          </div>

          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Raza</label>
            <input v-model="razaMascota" type="text" class="form-control" id="inputEmail4" placeholder="Ej: Labrador"/>
          </div>
          <div class="col-md-5">
            <label for="inputState" class="form-label">Sexo</label>
            <select v-model="sexoMascota" id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Femenimo</option>
              <option>Masculino</option>
            </select>
          </div>
      </div>

      <div class="col-10">
        <button type="submit" class="btn btn-primary">Crear</button>
      </div>
    </form>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "CreateHistory",
  data() {
    return {
      numeros: [1, 2, 3, 4, 5],
      numMascotas: 1,
      nombre: null,
      apellido: null,
      tipoDocumento: null,
      numeroDocumento: null,
      sexoUsuario: null,
      estado: null,
      sexoMascota: null,
      nombreMascota: null,
      razaMascota: null
    };
  },
  methods:{
  }
};
</script>

<style>
#formulario {
  margin: 50px;
}
</style>