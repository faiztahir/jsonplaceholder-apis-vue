<template>
    <div>
        <table class="table">
    <thead>
      <tr>
        <th scope="col">Task</th>
        <th scope="col">Status</th>
       </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todoList" v-bind:key="todo.userId">
        <td>{{todo.title}}</td>
        <td>{{todo.completed}}</td>
      </tr>
    </tbody>
  </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            todoList:[],
            todos:{
                userId:'',
                id:'',
                title:null,
                completed:null,
            }
        }
    },
    methods: {
        getTodo(){
            this.todoList.userId = this.$route.params.id
            axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${this.todoList.userId}`).then(resp => {
                console.log(resp.data);
                this.todoList = resp.data
            })
        }
    },
    mounted(){
        this.getTodo()
    }
}
</script>