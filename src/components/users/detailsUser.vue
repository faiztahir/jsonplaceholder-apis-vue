<template>
     <table class="table">
    <thead>
      <tr>
        <th scope="col">Phone</th>
        <th scope="col">Website</th>
        <th scope="col">Company</th>
        <th scope="col">Option</th>
       </tr>
    </thead>
    <tbody>
      <tr >
        <td>{{list.phone}}</td>
        <td>{{list.website}}</td>
        <td>{{userCompany.name}}</td>
        <a type="button" class="btn btn-primary">
        <router-link class="nav-link" :to="`/users/details/to-do/${list.id}`">To-Do</router-link></a>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import axios from 'axios'
export default {
  data() { 
    return {
      list:[],
      userCompany : [],
      baseUrl:'https://jsonplaceholder.typicode.com',
      users:{
        id:null,
        phone:null,
        website:null,
        company:null,
      }
    }
  },
  methods: {
    getUsers(){
      let _this = this
      _this.users.id = _this.$route.params.id
      console.log(_this.users.id);
      axios.get(`https://jsonplaceholder.typicode.com/users/${_this.users.id}`).then((resp) => {
        _this.list=resp.data;
        _this.userCompany=resp.data.company;
        // _this.list = resp.data[_this.users.id]
        console.log(resp);     
      })
    },
  },
  mounted(){
    this.getUsers()
  }
}
</script>

<style>
a{
  color: white;
}
</style>