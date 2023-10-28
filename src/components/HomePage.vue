
<!-- src/views/Home.vue -->

<!-- src/views/Home.vue -->

<template>
  <div class="home">
    <h1>Welcome to Phantom App</h1>
    
    <div v-if="!loggedIn">
      <h2 v-if="!registering">Iniciar Sesión</h2>
      <h2 v-else>Registrarse</h2>
      <form @submit.prevent="registering ? register : login">
        <div class="form-group">
          <label for="username">Nombre de Usuario:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div class="form-group" v-if="registering">
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required>
        </div>
        <div class="form-group">
          <button type="submit">{{ registering ? 'Registrarse' : 'Entrar' }}</button>
        </div>
      </form>
      
      <!-- Botón de cambio entre registro e inicio de sesión -->
      <button @click="toggleRegistering" class="toggle-button">
        {{ registering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate' }}
      </button>

      <!-- Mensaje de error -->
      <div v-if="loginError" class="error-message">
        {{ loginError }}
      </div>
    </div>

    <div v-else>
      <h2>¡Bienvenido, {{ username }}!</h2>
      <button @click="logout">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'HomePage',
  setup() {
    const username = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const loggedIn = ref(false);
    const loginError = ref(null);
    const registering = ref(false);

    const login = async () => {
      try {
        const data = {
          username: username.value,
          password: password.value,
        };
        const response = await axios.post('http://localhost:8001/api/login', data);
        console.log('Respuesta del servidor:', response.data);
        if (response.data.success) {
          loggedIn.value = true;
          loginError.value = null;
        } else {
          loginError.value = "Usuario o contraseña incorrectos";
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        loginError.value = "Ocurrió un error al intentar iniciar sesión";
      }
    };

    const register = async () => {
      if (password.value !== confirmPassword.value) {
        loginError.value = "Las contraseñas no coinciden";
        return;
      }
      try {
        const data = {
          username: username.value,
          password: password.value,
        };
        const response = await axios.post('http://localhost:8001/api/register', data);
        console.log('Respuesta del servidor:', response.data);
        if (response.data.success) {
          loginError.value = null;
          registering.value = false;
        } else {
          loginError.value = response.data.message || "Ocurrió un error al intentar registrar el usuario";
        }
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        loginError.value = "Ocurrió un error al intentar registrar el usuario";
      }
    };

    const logout = () => {
      username.value = '';
      password.value = '';
      confirmPassword.value = '';
      loggedIn.value = false;
      registering.value = false;
    };

    const toggleRegistering = () => {
      registering.value = !registering.value;
      loginError.value = null;
    };

    return {
      username,
      password,
      confirmPassword,
      loggedIn,
      login,
      register,
      logout,
      loginError,
      registering,
      toggleRegistering
    };
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #6dd5fa, #2980b9);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
}

h1 {
  font-size: 3em;
  margin-bottom: 30px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #007BFF;
}

button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s, transform 0.3s;
  background-color: #ffffff;
  color: #007BFF;
  border: 1px solid #007BFF;
}

button:hover {
  transform: translateY(-3px);
  background-color: #007BFF;
  color: #ffffff;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}
.error-message {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  border-radius: 5px;
  text-align: center;
}

@media (max-width: 600px) {
  .home {
    padding: 20px;
  }

  h1 {
    font-size: 2em;
  }
}

.toggle-button {
  margin-top: 15px;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: text-decoration 0.3s;
}

.toggle-button:hover {
  text-decoration: underline;
}
</style>