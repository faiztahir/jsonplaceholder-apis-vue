<template>
    <div class="post_btn">
        <h1 class="post_title">Posts</h1>
        <button type="button" class="btn btn-secondary mt-2"><router-link class="nav-link" to="/posts/add">Add new Post</router-link></button>
    </div>
    <div class="container">
    </div>
    <div class="card posts">
        <div class="card-body post" v-for="(item , index) in lists" v-bind:key="item.id">
          <h5 class="card-title post__title">{{item.title}}</h5>
          <p class="card-text">{{item.body}}</p>
          <a href="#" class="btn btn-primary">
        <router-link class="nav-link" :to="`/posts/${item.id}/details`">View</router-link></a>
          <a href="#" class="btn btn-success">
        <router-link class="nav-link" :to="`/posts/edit/${item.id}`">Edit</router-link></a>
          <a href="#" @click.prevent="deletePost(item.id, index)" class="btn btn-danger">Delete</a>
        </div>
    </div>
</template>

 <script>
import axios from 'axios';
export default{
  data(){
        return{
            lists:[],
            posts:{
                id:null,
                title:null,
                body:null,
            }
        }
    },
    methods: {
     getPosts(){
       let _this = this
        axios.get('https://jsonplaceholder.typicode.com/posts').then((resp) => {
            console.log(resp);
            _this.lists = resp.data
            console.log(resp.data);
        })
     },
     deletePost(id, index) {
      let _this = this

     axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(resp => {
         console.log(resp);
         _this.lists.splice(index, 1)
     });
 },
    },
    mounted(){
        this.getPosts()
    }
}
</script>

<style scoped>

.post_btn{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.post_title{
    margin-right: 75rem;
}

h1{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}
.posts{
    background-color: rgb(36, 36, 36);
    display: grid;
    grid-template-columns: 6fr 6fr;
    margin: 0 4rem;
    border: 1px solid black;
    border-radius: 15px;
}
.post{
    background-color: whitesmoke;
    margin: 2rem;
    padding: 2rem;
    border: 1px solid black;
    border-radius: 10px;
}
a{
    margin: 0 0.1rem;
}

.post__title{
color: black;
}

h5, p {
    color: black;
}
</style>