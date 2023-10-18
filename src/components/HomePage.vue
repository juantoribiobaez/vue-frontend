<!-- src/views/Home.vue -->

<template>
  <div class="home">
    <h1>Welcome to Phantom App</h1>
    
    <!-- Authentication buttons -->
    <div class="auth-buttons">
      <button @click="login">Iniciar Sesión</button>
      <button @click="register">Registrarse</button>
    </div>

    <!-- Social login buttons -->
    <div class="social-logins">
      <button @click="loginWithGoogle">Iniciar con Google</button>
      <button @click="loginWithMicrosoft">Iniciar con Microsoft</button>
    </div>
  </div>
</template>

<script>
import router from '../router/index'

export default {
  name: 'HomePage',
  setup() {
    //const router = useRouter();  // Utiliza el hook para obtener la instancia del router

    // Redefine los métodos utilizando la API de Composición
    const login = () => {
      router.push('/login');  // Redirige a la página de login
    }

    const register = () => {
      console.log('Registrarse');
    }

    const loginWithGoogle = () => {
      console.log('Iniciar con Google');
    }

    const loginWithMicrosoft = () => {
      console.log('Iniciar con Microsoft');
    }

    return {
      login,
      register,
      loginWithGoogle,
      loginWithMicrosoft
    }
  }
}
</script>

<style scoped>
.home {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f4f7fc; /* Fondo claro */
}

h1 {
font-size: 2.5em;
color: #333;
margin-bottom: 30px;
font-weight: 600; /* Más bold para el título */
}

.auth-buttons, .social-logins {
display: flex;
gap: 15px; 
margin-bottom: 20px;
}

button {
padding: 12px 20px;
border: none;
cursor: pointer;
border-radius: 5px;
background-color: #007BFF;
color: white;
font-weight: 500; /* Semi-bold para el texto del botón */
transition: background-color 0.3s, transform 0.3s;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

button:hover {
background-color: #0056b3;
transform: translateY(-3px); /* Efecto de "elevación" al pasar el mouse */
}

button:active {
transform: translateY(0); /* Retorno a posición original al hacer clic */
}

/* Estilos específicos para botones de inicio de sesión con redes sociales */
.social-logins button {
background-color: #fff;
color: #007BFF;
border: 1px solid #007BFF;
}

.social-logins button:hover {
background-color: #007BFF;
color: #fff;
}

/* New styles based on the trends */
.home {
background-size: cover;
background-repeat: no-repeat;
}

button {
/* Add microinteractions */
&:hover {
  animation: buttonHover 0.3s forwards;
}
}

@keyframes buttonHover {
to {
  transform: scale(1.05);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
}
}
</style>