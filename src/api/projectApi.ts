import axios from "axios";

// Crea una instancia de Axios con una URL base obtenida de las variables de entorno.
// Todas las peticiones realizadas con projectApi usarán automáticamente esta URL.
const projectApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor de Axios que se ejecuta antes de cada petición HTTP
projectApi.interceptors.request.use((config) => {
    // Obtiene el token almacenado en el navegador
    const token = localStorage.getItem("token");

    // Si existe un token, se agrega al header Authorization
    if (token) {
        //  formato = Authorization: Bearer <token>
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Devuelve la configuración modificada para que Axios envie la peticion
    return config;
});

export { projectApi };
