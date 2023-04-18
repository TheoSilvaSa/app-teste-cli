export const environment = {
  production: false,
  apiUrl: 'https://thronesapi.com/api/v2/',
  authorizationUrl: 'https://34.199.130.246:9443/api/identity/entitlement/decision',
  appName: 'App Ionic - Game of Thrones',
  sso: {
    clientId: 'Xa13KuaJomm6j7jrJ1LBYvce9tEa',
    serverUrl: 'https://34.199.130.246:9443',
    issuer: '/oauth2/oidcdiscovery',
    redirectUri: window.location.origin,
    scope: 'openid email profile',
    showDebugInformation: true,
    responseType: 'code',
  }
};


