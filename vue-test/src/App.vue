<template>
  <div id="app">
    <h1>{{ message }}</h1>
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
        // Spring Boot의 API에서 데이터를 가져옵니다.
        const response = await axios.get('/api/hello');
        this.message = response.data;
      } catch (error) {
        console.error('Error fetching message:', error);
        this.message = 'Error fetching data';
      }
    },
  },
  mounted() {
    // 컴포넌트가 로드되면 API 호출
    this.fetchMessage();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
