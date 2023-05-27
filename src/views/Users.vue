<template>
     <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th><input type="checkbox" v-model="select__all" @click="delMultiUser()"></th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">Options</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for=" ( item , index) in list" v-bind:key="item.id">
        <td>{{index+1}}</td>
        <td><input type="checkbox" :value="item.id" v-model="selected"></td>
        <td>{{item.name}}</td>
        <td>{{item.username}}</td>
        <td>{{item.email}}</td>
        <td>{{item.address.suite}}, {{item.address.street}}, {{item.address.city}}</td>
          <a type="button" class="btn btn-primary" id="btn" data-toggle="btn" @click="getUserDetails(item.id)" data-target="#exampleModalCenter">
            Details
          </a>
         <a type="button" class="btn btn-success">
         <router-link class="nav-link" :to="`/users/edit/${item.id}`">Edit</router-link></a>
        <a type="submit" @click.prevent="deleteUser(item.id,index)" class="btn btn-danger">Delete</a>
      </tr>
    </tbody>
  </table>
  <button type="button" class="btn btn-secondary"><router-link class="nav-link" to="/users/add">Add new User</router-link></button>
  <button type="button" class="btn btn-danger" @click="delMultiUsers()" v-if="remove_btn" >Remove</button>


<!-- Modal -->
<div class="modal fade" id="goalmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content modal_mod">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">User Details</h5>
      </div>
      <div class="modal-body">
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
        <td>{{this.users.phone}}</td>
        <td>{{this.users.website}}</td>
        <td>{{this.userCompany.name}}</td>
        <a type="button" class="btn btn-primary">
        <router-link class="nav-link" :to="`/users/to-do/${this.users.id}`">To-Do</router-link></a>
      </tr>
    </tbody>
  </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  import swal from 'sweetalert'
export default {
    data() {
        return {
            list: [],
            userCompany:[],
            select__all: false,
            remove_btn: false,
            selected:[],
            baseUrl: "https://jsonplaceholder.typicode.com",
            users: {
                id: '',
                name: null,
                username: null,
                email: null,
                phone: null,
                website: null,
                company: null,
                
            }
        };
    },
    methods: {
      getUsers() {
        let _this = this;
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((resp) => {
          console.log(resp);
          _this.list = resp.data;
          console.log(resp.data);
        });
      },
      getUserDetails(id) {
        let _this = this;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => {
          console.log(resp);
          _this.users = resp.data;
          _this.userCompany = resp.data.company
          console.log(resp.data);
          $('#goalmodal').modal('show')
        });
      },
        deleteUser(id,index) {
          // alert(id + " :: " + index);
          let _this = this;
          axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(resp => {
            console.log(resp);
            _this.list.splice(index,1);
            });
        },
        delMultiUser(){
          this.selected = []
          if(!this.select__all){
            
            for(let i in this.list){
              this.selected.push(this.list[i].id)
              this.remove_btn = true
            }
          }
        },
        delMultiUsers(){
          swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete && this.delMultiUser) {
            this.list.splice(0, 10)
            this.remove_btn = false
                  swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Your imaginary file is safe!");
                  this.remove_btn = false
                }
              });
        }
        },
    mounted() {
        this.getUsers();
    },
}

</script>

<style scoped>
a{
  margin-left: 0.3rem;
  margin-top: 0.1rem;
}
button{
  margin-left: 1rem;
}
.modal_mod{
  background-color: black;
  width: 80rem;
  border: 1px solid white;
  border-radius: 10px;
}
</style>