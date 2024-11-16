<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        message: '',
      };
    },
    methods: {
      async fetchMessage() {
        try {
          const response = await axios.get('/api/hello');
          this.message = response.data;
        } catch (error) {
          console.error('Error fetching message:', error);
        }
      },
    },
    mounted() {
      this.fetchMessage();
    },
  };
  </script>
  