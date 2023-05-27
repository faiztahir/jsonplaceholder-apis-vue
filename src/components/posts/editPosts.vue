<template>
    <form class="form mt-5 container">
        <h1>Edit Post</h1>
  <div class="mb-3">
    <input class="form-control" type="text" name="title" placeholder="Title" v-model="this.postsInfo.title">
  </div>
  <div class="mb-3">
    <input class="form-control" type="text" name="post" placeholder="Type something here..." v-model="this.postsInfo.body" >  
  </div>
  <button type="submit" class="btn btn-dark">Post</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postsInfo:{
        id:'',
        title:null,
        body:null,
      }
    }
  },
  methods: {
    editPost(){
    let _this = this
    _this.postsInfo.id = _this.$route.params.id
    axios.get(`https://jsonplaceholder.typicode.com/posts/${_this.postsInfo.id}`).then(resp => {
      console.log(resp);
      _this.postsInfo.title = resp.data.title
      _this.postsInfo.body = resp.data.body
    })
    }
  },
  mounted(){
    this.editPost()
  }
}
</script>