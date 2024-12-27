import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://20.244.80.76:9443',
  realm: 'develop',
  clientId: 'login-app'
});

export default keycloak;