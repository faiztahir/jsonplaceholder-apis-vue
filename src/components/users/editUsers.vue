<template>
<form class="form mt-5 container">
        <h1>Edit User</h1>
  <div class="mb-3" >
    <input class="form-control" type="text" name="name" placeholder="Your Name" v-model="users.name">
  </div>
  <div class="mb-3">
    <input class="form-control" type="text" name="username" placeholder="Your Username" v-model="users.username">  
  </div>
  <div class="mb-3">
  <input class="form-control" type="email" name="email" placeholder="Your Email" v-model="users.email"> 
  </div>
  <div class="mb-3">
  <input class="form-control" type="text" name="address" placeholder="Your Address" v-model="users.address">  
  </div>
  <button type="submit" class="btn btn-dark" @click.prevent="updateUser()" > Edit </button>
</form>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  data(){
    return {
      users:{
        id:'',
        phone:null,
        website:null,
        company:null,
      }
    }
  },
  methods: {
    editUser(){
      let _this = this
      _this.users.id = _this.$route.params.id
      axios.get(`https://jsonplaceholder.typicode.com/users/${_this.users.id}`).then((resp) => {
        console.log(resp);
        // return false
        _this.users.id = resp.data.id
        _this.users.name = resp.data.name
        _this.users.username = resp.data.username
        _this.users.email = resp.data.email
        _this.users.address = resp.data.address.city
      })
      },
      updateUser(){
      let _this = this
        _this.users.id = _this.$route.params.id
        axios.patch(`https://jsonplaceholder.typicode.com/users/${_this.users.id}`).then(resp => {
          console.log(resp);
          console.log(resp.data);
          router.replace({ path: '/users'})
        })
      }
  },
  mounted(){
    this.editUser()
  }
}
</script>

<style scoped>
button{
  margin-right: 1rem;
}
</style>