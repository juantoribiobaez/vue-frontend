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
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    border: none;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
    color: #333333;
    font-weight: bold;
  }
  
  h2 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #555555;
  }
  
  .form-group {
    margin: 15px 0;
  }
  
  label {
    font-size: 16px;
    color: #666666;
    display: block;
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #007BFF;
  }
  
  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background: #007BFF;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background: #0056b3;
  }
  </style>
  