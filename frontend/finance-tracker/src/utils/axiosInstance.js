// import axios from "axios";
// import { BASE_URL } from "./apiPaths";

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// // Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//          // const accessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2E3YWNmYjI4MzJiMTYxMjFlMzljNiIsImlhdCI6MTc0ODY2MzA5MywiZXhwIjoxNzQ5MjY3ODkzfQ.u6VZaO8jJkmVYu8dEqXh1BPjONQcfyy7nhPiLMuItK8";
//    //const accessToken =   
   
//      // const accessToken = localStorage.getItem("token");
//       const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2Q4YzM1NjNjNjMyMTdiMjBmNjM1OSIsImlhdCI6MTc0ODg2NDIzMywiZXhwIjoxNzQ5NDY5MDMzfQ.NgrN3htr2yad-Kt9I9uDBhpG1aCRZUeTPoGasfUmSmo"
//     console.log("Access Token:", localStorage.getItem("token"));

//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
    
// console.log("Request Config:", config);

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );  
// axios.get('/expense/get')
//   .then(res => console.log("Data:", res.data))
//   .catch(err => {
//     console.error("AXIOS ERROR:", err); // 👈 add this
//   });

//     return response;
//   },
//   (error) => {
//     // Handle common errors globally
//     if (error.response) {
//       if (error.response.status === 401) {
//         // Redirect to login page
//         window.location.href = "/login";
//       } else if (error.response.status === 500) {
//         console.error("Server error. Please try again later.");
//       }
//     } else if (error.code === "ECONNABORTED") {
//       console.error("Request timeout. Please try again.");
//     }
//     return Promise.reject(error);
//   }
// );
// export default axiosInstance;

import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can use this hardcoded token for now (but switch to localStorage in real apps)
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2Q4YzM1NjNjNjMyMTdiMjBmNjM1OSIsImlhdCI6MTc0ODg2NDIzMywiZXhwIjoxNzQ5NDY5MDMzfQ.NgrN3htr2yad-Kt9I9uDBhpG1aCRZUeTPoGasfUmSmo"
    
    console.log("Access Token:", accessToken); // optional
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    console.log("Request Config:", config); // optional debug log
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle global errors
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

