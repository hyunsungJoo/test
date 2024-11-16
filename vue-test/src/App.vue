<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <router-link to="/login">Go to Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      message: 'Loading...',
    };
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await axios.get('http://localhost:8081/api/hello');
        this.message = response.data;
      } catch (error) {
        console.error('Error fetching message:', error);
        this.message = 'Error fetching data';
      }
    },
  },
  mounted() {
    this.fetchMessage();
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
