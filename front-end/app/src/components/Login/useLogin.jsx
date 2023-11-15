import axios from "axios";

const loginAPI = axios.create({
  baseURL: 'http://127.0.0.1:8000/app/api/auth/login/'
});

// Función que realiza una solicitud POST al endpoint de login
export async function loginUser(username, password) {
  try {
    const response = await loginAPI.post('', {
      username: username,
      password: password,
    });

    // Puedes manejar la respuesta aquí, por ejemplo, guardando el token
    console.log(response.data);

    return response.data; // Puedes devolver los datos que desees
  } catch (error) {
    // Puedes manejar los errores aquí
    console.error(error);
    throw error; // Puedes relanzar el error o manejarlo de otra manera
  }
}
