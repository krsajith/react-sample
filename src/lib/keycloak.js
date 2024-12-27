import Keycloak from 'keycloak-js';

// // Make sure to create the instance with 'new'
// const keycloakInstance = new Keycloak({
//   url: 'http://localhost:8080',
//   realm: 'taomish',
//   clientId: 'login-app'
// });


// export default keycloakInstance;

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'taomish',
    clientId: 'login-app'
  });

  export default keycloak;