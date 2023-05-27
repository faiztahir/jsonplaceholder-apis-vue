<template>
<div class="comment_btn">
    <h1 class="comment__heading comm__head">Comments</h1>
    <button type="button" class="btn btn-secondary mt-2 comm_btn"><router-link class="nav-link" to="/posts/comments/add">Add more</router-link></button>
    </div>
<div class="row d-flex justify-content-center">
  <div class="col-md-8 col-lg-6 ">
    <div class="card shadow-0 border caard_body" >
      <div class="card-body p-4">

       

        <div class="card">
          <!-- <div class="card-body"> -->
            <div class="card-bbody" v-for="(item , index) in commentsList" v-bind:key="item.postId">
            <p>{{item.body}}</p>

            <div class="d-flex justify-content-between">
              <div class="d-flex flex-row align-items-center">
                <h1 class="small mb-0 ms-2">{{item.name}}</h1>
            </div>
            <a href="#" class="btn btn-success">
                <router-link class="nav-link" :to="`/posts/comments/edit/${item.id}`">Edit</router-link></a>
                <a href="#" @click.prevent="deleteComment(item.id, index)" class="btn btn-danger">Delete</a>
                <a href="#" class="btn btn-primary">
                <router-link class="nav-link" :to="`/posts/comments/details/${item.id}`">User Details</router-link></a>
              <div class="d-flex flex-row align-items-center">
                <p class="small text-muted mb-0">{{item.email}}</p>
                <i class="far fa-thumbs-up ms-2 fa-xs text-black" style="margin-top: -0.16rem;"></i>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            commentsList:[],
            comments:{
                postId: '',
                id:'',
                name:null,
                email:null,
                body:null,
            },
            commentTitleLists:[],
            commentTitle:{
                id:'',
                title:null,
            },
        }
    },
    methods:{
        getComments(){
            let _this = this
            _this.comments.postId = _this.$route.params.id;
            axios.get(`https://jsonplaceholder.typicode.com/posts/${_this.comments.postId}/comments`).then(resp => {
                _this.commentsList = resp.data
                console.log(resp);
            })
        },
        deleteComment(id, index){
            let _this = this

     axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`).then(resp => {
         console.log(resp);
         _this.commentsList.splice(index, 1)
     });
        }
    },
    mounted() {
        this.getComments()
    },
}
</script>

<style>

.comment_btn{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.comm__head{
    margin-right: 75rem;
}

.card{
    color: white;
    background-color: black;
}


.card-bbody{
    margin-bottom: 3rem;
    border: 5px solid rgba(16, 46, 46, 1);
    /* border: 5px solid white; */
    border-radius: 10px;
    padding: 0.5rem;
}

/* .comm_btn{
    width: 100px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
} */

.comment__heading{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
}

body{
    background-color: black;
}

.cont{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.comment{
    margin: 5rem 5rem;
    border: 1px solid rgba(16, 46, 46, 1);
    background-color: rgba(16, 46, 46, 0.973);
    float: left;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px;
    border-radius: 20px;
}

.comm__email{
    margin-left: 1rem;
}

.comm__para{
    margin-top: 1rem;
}

.button{
    margin-bottom: 1rem;
}

.button a{
    margin-left: 0.5rem;
    margin-top: 0.1rem;
}

.comment h4,.comment span,.darker h4,.darker span{
    display: inline;
}

.comment p,.comment span,.darker p,.darker span{
    color: rgb(184, 183, 183);
}

h1,h2, h3, h4, h5, tr{
    color: white;
    font-weight: bold;
}
</style>