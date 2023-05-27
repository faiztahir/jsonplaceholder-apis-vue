<template>
    <form class="form mt-5 container">
        <h1>Add Post</h1>
  <div class="mb-3">
    <input class="form-control" type="text" name="title" placeholder="Title" v-model="this.addPost.title" >
  </div>
  <div class="mb-3">
    <input class="form-control" type="text" name="post" placeholder="Type something here..." v-model="this.addPost.body" >  
  </div>
  <button type="submit" class="btn btn-dark" @click.prevent="addPosts()">Post</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      addPost:{
        id:'',
        title:null,
        body:null,
      }
    }
  },
  methods: {
    addPosts(){
      axios.post(`https://jsonplaceholder.typicode.com/posts`, this.addPost).then((resp) => {
        console.log(resp);
        console.log(resp.data);
      })
    }
  },
}
</script>