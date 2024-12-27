

import styles from './login.module.css';
import { redirect } from '@tanstack/react-router';
// import keycloak  from 'keycloak-js';
// import { useEffect } from 'react';
import Keycloak from 'keycloak-js';
import { router } from '../../router';
export function Login() {
  const login = async () => {
    // if (keycloakInstance) {
    //   keycloakInstance.login()
    //     .catch(error => {
    //       console.error('Login error:', error);
    //     });
    // }

    const keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'taomish',
      clientId: 'login-app'
    });

    await keycloak.init({})
    console.log(`authenticated ${keycloak.authenticated}`);

    if(keycloak.authenticated){
      console.log('to home');
      router.navigate({ to: '/home' })
    }

    if(!keycloak.authenticated){
      const result = await keycloak.login({
        scope: 'openid',
        redirectUri: 'http://localhost:5173'
      })
        console.log(result);
    }
  }

  // useEffect(() => {
  //   const initKeycloak = async () => {
  //     try {
  //       const authenticated = await keycloakInstance.init({
  //         onLoad: 'check-sso',
  //         silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
  //         pkceMethod: 'S256'
  //       });
        
  //       if (authenticated) {
  //         console.log('authenticated');
  //       } else {
  //         console.log('not authenticated');
  //       }
  //     } catch (error) {
  //       console.error('Keycloak init error:', error);
  //     }
  //   };
  
  //   initKeycloak();
  // }, []);

  

  return (
    <div className={styles['container']}>
              <button 
          onClick={login}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
    </div>
  );
}

export default Login;



