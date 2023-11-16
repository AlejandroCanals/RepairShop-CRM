import {loginAPI} from "../../api/login.api"
// Función que realiza una solicitud POST al endpoint de login
export async function loginUser(username, password) {
  try {
    const response = await loginAPI.post('', {
      username: username,
      password: password,
    });

    // Puedes manejar la respuesta aquí, por ejemplo, guardando el token
    console.log(response.data);
 

    return response.data; 
  } catch (error) {
    //
    if (error.response) {
        // El servidor respondió con un código de error 
        console.error('Error de respuesta del servidor:', error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor');
      } else {
        // Algo más causó un error
        console.error('Error durante la solicitud:', error.message);
      }
  
  
    }
  }
  
  