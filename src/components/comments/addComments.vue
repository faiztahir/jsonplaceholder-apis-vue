<template>
    <form class="form mt-5 container">
        <h1>Add Comment</h1>
  <div class="mb-3">
    <input class="form-control" type="text" name="name" placeholder="Your Name" v-model="this.addComment.name" >
  </div>
  <div class="mb-3">
  <input class="form-control" type="email" name="email" placeholder="Your Email" v-model="this.addComment.email" > 
  </div>
  <div class="mb-3">
  <input class="form-control" type="text" name="comment" placeholder="Your Comment" v-model="this.addComment.body" >  
  </div>
  <button type="submit" class="btn btn-dark" @click.prevent="addComments()" >Done</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      addComment:{
        id:'',
        name:null,
        email:null,
        body:null,
      }
    }
  },
  methods: {
    addComments(){
      axios.post(`https://jsonplaceholder.typicode.com/comments`, this.addComment).then((resp) => {
        console.log(resp);
        console.log(resp.data);
      })
    }
  },
}
</script>