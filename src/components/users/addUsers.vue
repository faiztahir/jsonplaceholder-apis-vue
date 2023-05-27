<template>
    <form class="form mt-5 container">
        <h1>Add User</h1>
  <div class="mb-3">
    <input class="form-control" type="text" name="name" placeholder="Your Name" v-model="this.addUser.name">
  </div>
  <div class="mb-3">
    <input class="form-control" type="text" name="username" placeholder="Your Username" v-model="this.addUser.username">  
  </div>
  <div class="mb-3">
  <input class="form-control" type="email" name="email" placeholder="Your Email" v-model="this.addUser.email"> 
  </div>
  <div class="mb-3">
  <input class="form-control" type="text" name="address" placeholder="Your Address" v-model="this.addUser.address">  
  </div>
  <button type="submit" class="btn btn-dark" @click.prevent="addUsers()" >Add</button>
</form>
</template>


<script>
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      addUser:{
        id:'',
        name:null,
        username:null,
        email:null,
        address:null,
      }
    }
  },
  methods: {
    addUsers(){
      axios.post(`https://jsonplaceholder.typicode.com/users`, this.addUser).then((resp) => {
        console.log(resp);
        console.log(resp.data);
        router.replace({ path: '/users'})
      })
    }
  },
}
</script>