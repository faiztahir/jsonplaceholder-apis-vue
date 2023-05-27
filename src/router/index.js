import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Users from '../views/Users.vue'
import detailsUser from '../components/users/detailsUser.vue'
import todo from '../components/users/todo.vue'
import addUsers from '../components/users/addUsers.vue'
import editUsers from '../components/users/editUsers.vue'
import PostView from '../views/PostView.vue'
import editPost from '../components/posts/editPosts.vue'
import addPost from '../components/posts/addPosts.vue'
import Comments from '../components/comments/comments.vue'
import editComment from '../components/comments/editComments.vue'
import addComment from '../components/comments/addComments.vue'
import photos from '../components/photos/photos.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/users/details/:id",
    name: "detailsusers",
    component: detailsUser,
  },
  {
    path: "/users/to-do/:id",
    name: "todo",
    component: todo,
  },
  {
    path: "/users/add",
    name: "AddUsers",
    component: addUsers,
  },
  {
    path: "/users/edit/:id",
    name: "EditUsers",
    component: editUsers,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostView,
  },
  {
    path: "/posts/edit/:id",
    name: "EditPost",
    component: editPost,
  },
  {
    path: "/posts/add",
    name: "AddPost",
    component: addPost,
  },
  {
    path: "/posts/:id/details",
    name: "comments",
    component: Comments,
  },
  {
    path: "/posts/comments/edit/:id",
    name: "EditComment",
    component: editComment,
  },
  {
    path: "/posts/comments/add",
    name: "AddComment",
    component: addComment,
  },
  {
    path: "/posts/comments/details/:id",
    name: "Photos",
    component: photos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
