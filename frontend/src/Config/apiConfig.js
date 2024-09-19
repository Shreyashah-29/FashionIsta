// Import axios
import axios from "axios";


// Create an instance of axios
const api = axios.create({
  baseURL: "http://192.168.2.61:8080/", // Our API base URL
});

// Add a request interceptor to attach the access token to each request
api.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(localStorage.getItem("signIn")).accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refreshment and authentication
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 419) {
      try {
        const refreshToken = JSON.parse(localStorage.getItem("signIn")).refreshToken;
        const setRefreshToken = await axios.post(
          "http://192.168.2.61:8080/api/users/refreshToken",
          {},
          {
            headers: {
              "refresh-token": refreshToken,
            },
          }
        );
        const newAccessToken = setRefreshToken.data.accessToken;

        // Update the access token in localStorage
        const loginData = JSON.parse(localStorage.getItem("signIn"));
        loginData.accessToken = newAccessToken;
        localStorage.setItem("signIn", JSON.stringify(loginData));
      

        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (error) {
        window.location.href = '/signIn';
      }
    }

    return Promise.reject(error);
  }
);

// Export the axios instance
export default api;