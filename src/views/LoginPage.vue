<template>
    <div class="login-container">
      <h1 class="title">Bienvenido a Phantom</h1>
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Nombre de Usuario:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const data = {
            username: this.username,
            password: this.password,
          };
          const response = await axios.post('http://localhost:8001/api/login', data);
          console.log('Respuesta del servidor:', response.data);
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 20px;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    font-size: 16px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>