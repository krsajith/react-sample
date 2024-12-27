import Keycloak from 'keycloak-js';

export const keycloakConfig = {
  url: 'http://localhost:8080',
  realm: 'taomish',
  clientId: 'login-app'
};

export const keycloak = new Keycloak(keycloakConfig);