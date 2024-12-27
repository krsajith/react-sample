import React, { useState } from "react";
import styles from './login.module.css';
import keycloak from '../../lib/keycloak';
import { useEffect } from 'react';
import { router } from '../../router';

const Login = () => {
  const [formData, setFormData] = useState({ username: "sajith", password: "password" });
  const [error, setError] = useState("");


    useEffect(() => {
    const initKeycloak = async () => {
      try {
        await keycloak.init({})
        console.log(`authenticated ${keycloak.authenticated}`);

        if (keycloak.authenticated) {
          console.log('to home');
          router.navigate({ to: '/home' })
        }
      } catch (error) {
        console.error('Keycloak init error:', error);
      }
    };

    initKeycloak();
  }, []);

    const login = async () => {



    if (!keycloak.authenticated) {
      const result = await keycloak.login({
        scope: 'openid',
        redirectUri: 'http://localhost:5173'
      })
      console.log(result);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    setError("");
    console.log("Form submitted:", formData);


    const url = "http://localhost:8080/realms/taomishkk/protocol/openid-connect/token";


    const response = await fetch(url, {
      method: "POST",
      body: `client_id=login-app&password=${formData.password}&username=${formData.username}&grant_type=password`,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    });
    if(response){
      const s = await response.text();
      console.log(s);
      if(response.status===200){
        router.navigate({ to: '/home' })
      }
   
    }


    // Perform login logic here (e.g., API call)
    // Example:
    // loginUser(formData.username, formData.password);
  };

  return (
    <div className={`${styles['login-page']} ${styles['gradient']}`}>

   
    <div className={`${styles['container']} ${styles['gradient']}`}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: ".5rem" }}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            style={{ width: "100%", padding: ".5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: ".5rem" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            style={{ width: "100%", padding: ".5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div className={`${styles['buttons']}`}>


        <button type="submit" style={{ padding: ".5rem 1rem", borderRadius: "4px", border: "none", background: "#007BFF", color: "white", cursor: "pointer" }}>
          Login
        </button>
        <button onClick={login} type="button" style={{ padding: ".5rem 1rem", borderRadius: "4px", border: "none", background: "#007BFF", color: "white", cursor: "pointer" }}>
          Login SSO
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;






// import styles from './login.module.css';
// import keycloak from '../../lib/keycloak';
// import { useEffect } from 'react';
// import { router } from '../../router';
// export function Login() {
//   const login = async () => {



//     if (!keycloak.authenticated) {
//       const result = await keycloak.login({
//         scope: 'openid',
//         redirectUri: 'http://localhost:5173'
//       })
//       console.log(result);
//     }
//   }




//   return (
//     <div className={styles['container']}>
//       <button
//         onClick={login}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Login with sso
//       </button>

//       <button
//         onClick={login}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Login user pwd
//       </button>
//     </div>
//   );
// }

// export default Login;



