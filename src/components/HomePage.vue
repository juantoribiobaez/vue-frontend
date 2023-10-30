<template>
	<div class="home">
		<h1>Welcome to Phantom App</h1>

		<div class="login-container">
			<h2>{{ registering ? 'Registrarse' : 'Iniciar Sesión' }}</h2>
			<form @submit.prevent="handleSubmit">
				<div class="form-group">
					<label for="username">Nombre de Usuario:</label>
					<input type="text" id="username" v-model="formData.username" required>
				</div>
				<div class="form-group">
					<label for="password">Contraseña:</label>
					<input type="password" id="password" v-model="formData.password" required>
				</div>
				<div class="form-group" v-if="registering">
					<label for="confirmPassword">Confirmar Contraseña:</label>
					<input type="password" id="confirmPassword" v-model="formData.confirmPassword" required>
				</div>
				<div class="form-group">
					<button type="submit">{{ registering ? 'Registrarse' : 'Entrar' }}</button>
				</div>
			</form>

			<button @click="toggleRegistering" class="toggle-button">
				{{ registering ? '¿Ya tienes una cuenta? Inicia sesión' : '¿No tienes una cuenta? Regístrate' }}
			</button>

			<div v-if="loginError" class="error-message">
				{{ loginError }}
			</div>
		</div>
	</div>
</template>
  
<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
	name: 'HomePage',
	setup() {
		const formData = ref({
			username: '',
			password: '',
			confirmPassword: ''
		});
		const loginError = ref(null);
		const registering = ref(false);

		const handleLogin = async () => {
			try {
				const response = await axios.post('http://localhost:8001/api/login',
					{
						username: formData.value.username,
						password: formData.value.password,
					}, {
					headers: {
						'Content-Type': 'application/json',
					},
				});
				if (response.data.token) {
					// La solicitud fue exitosa, y response.data.token contiene el token de autenticación
					// Almacena el token en localStorage o donde prefieras
					localStorage.setItem('token', response.data.token);

					// Resto de tu lógica después del inicio de sesión exitoso
				} else {
					loginError.value = "Usuario o contraseña incorrectos";
				}
			} catch (error) {
				console.error('Error:', error);
				loginError.value = "Ocurrió un error al intentar iniciar sesión";
			}
		};


		const handleRegister = async () => {
			// Tu lógica para crear un usuario
		};

		const handleSubmit = () => {
			if (registering.value) {
				handleRegister();
			} else {
				handleLogin();
			}
		};

		const toggleRegistering = () => {
			registering.value = !registering.value;
			loginError.value = null;
		};

		return {
			formData,
			loginError,
			registering,
			handleSubmit,
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
	height: 85vh;
	background: linear-gradient(to right, #74b9ff, #0984e3);
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	padding: 20px;
	text-align: center;
}

h1 {
	font-size: 2.5em;
	margin-bottom: 20px;
	font-weight: 700;
	color: #ffffff;
}

.login-container {
	background: #fff;
	border-radius: 15px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	padding: 25px;
	max-width: 400px;
	width: 100%;
	text-align: left;
	color: #333;
}

.form-group {
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
}

label {
	margin-bottom: 10px;
	font-size: 1.1em;
	color: #555;
}

input {
	width: 100%;
	padding: 12px;
	box-sizing: border-box;
	border: 1px solid #ddd;
	border-radius: 8px;
	transition: border-color 0.3s;
	font-size: 1em;
}

input:focus {
	outline: none;
	border-color: #777;
}

button {
	padding: 12px 20px;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	font-weight: 500;
	transition: background-color 0.3s, transform 0.3s;
	background-color: #3498db;
	color: #ffffff;
	font-size: 1em;
}

button:hover {
	transform: translateY(-2px);
	background-color: #2980b9;
}

button:focus {
	outline: none;
}

.error-message {
	margin-top: 20px;
	padding: 10px;
	border: 1px solid #d9534f;
	color: #d9534f;
	border-radius: 8px;
	text-align: center;
	font-size: 1em;
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
	color: #000000;
	border: none;
	cursor: pointer;
	transition: text-decoration 0.3s;
	font-size: 1em;
}

.toggle-button:hover {
	text-decoration: underline;
	color: #ffffff
}
</style>
