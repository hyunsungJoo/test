<template>
    <div id="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserLogin', // 이름을 'UserLogin'으로 변경
    data() {
      return {
        username: '',
        password: '',
        message: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:8081/api/auth/login', {
            username: this.username,
            password: this.password,
          });
          this.message = response.data.message;
        } catch (error) {
          this.message = 'Invalid username or password';
          console.error(error);
        }
      },
    },
  };
  </script>
  