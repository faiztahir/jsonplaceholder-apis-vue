<template>
  <div class="cards">
    <div
      class="card"
      style="width: 18rem"
      v-for="photo in photosList"
      v-bind:key="photo.albumId"
    >
      <img
        class="card-img-top"
        :src="photo.thumbnailUrl"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="card-text">{{ photo.title }}</p>
    </div>
    <img class="card-img-top" :src="photo.url" alt="Card image cap" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      photosList: [],
      photos: {
        albumId: "",
        id: "",
        title: null,
        url: null,
        thumbnailUrl: null,
      },
    };
  },
  methods: {
    getPhotos() {
      let _this = this;
      _this.photos.albumId = _this.$route.params.id;
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${_this.photos.albumId}`
        )
        .then((resp) => {
          console.log(resp);
          console.log(resp.data);
          _this.photosList = resp.data;
        });
    },
  },
  mounted() {
    this.getPhotos();
  },
};
</script>

<style scoped>
.cards {
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
  margin-left: 10rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  flex-wrap: wrap;
}
.card {
    margin-left: 1rem;
  background-color: black;
  color: white;
  margin-bottom: 5rem;
  border: 1px solid whitesmoke;
}
</style>
