import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'taomishkk',
  clientId: 'login-app'
});

export default keycloak;