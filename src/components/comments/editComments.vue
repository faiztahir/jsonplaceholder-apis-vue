<template>
    <form class="form mt-5 container">
        <h1>Edit Comment</h1>
  <div class="mb-3">
    <input class="form-control" type="text" name="name" placeholder="Your Name" v-model="this.commentInfo.name">
  </div>
  <div class="mb-3">
  <input class="form-control" type="email" name="email" placeholder="Your Email" v-model="this.commentInfo.email"> 
  </div>
  <div class="mb-3">
  <input class="form-control" type="text" name="comment" placeholder="Your Comment" v-model="this.commentInfo.body">  
  </div>
  <button type="submit" class="btn btn-dark">Done</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      commentInfo:{
        id:'',
        name:null,
        email:null,
        body:null,
      }
    }
  },
  methods: {
    editComment(){
      let _this = this
      _this.commentInfo.id = _this.$route.params.id
      axios.get(`https://jsonplaceholder.typicode.com/comments/${_this.commentInfo.id}`).then(resp =>{
        console.log(resp);
        _this.commentInfo.name = resp.data.name
        _this.commentInfo.email = resp.data.email
        _this.commentInfo.body = resp.data.body
      })
    }
  },
  mounted(){
    this.editComment()
  }
}
</script>