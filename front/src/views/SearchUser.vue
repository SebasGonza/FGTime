<template>
  <div class="search-user-view">
    <navbar />
    <h2 class="title">Consultar colaboradores</h2>
  <div class="table-responsive">
    <table class="table" id="tabla">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Cargo</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Documento</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,i) in users" :key="i">
          <th scope="row"> {{i+1}} </th>
          <td> {{user.nombre}} </td>
          <td> {{user.apellido}} </td>
          <td> {{user.cargo}} </td>
          <td> {{user.especialidad}} </td>
          <td> {{user.documento_identificacion}} </td>
          <td> <button type="button" class="btn btn-danger" @click="deleteUser(user.id)" >Eliminar</button></td>
        </tr>
        
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from 'axios';
const url = 'http://localhost:3000/users';
export default {
  components: { Navbar },
  name: "SearchUser",
  data() {
    return{
      users: []
    }
    
  },
  created(){
    this.showUsers();
  },
  methods:{
    showUsers(){
      axios.get(url).then(res => {
        this.users=res.data;
      });
    },
    deleteUser(id){
      let data={
        "id": id
      }
      axios.delete(url,{
        data: data
      }).then(res => {
        alert('El usuario se ha borrado con exito!');
      });
      this.showUsers();
    }
  }
};
</script>

<style>
</style>