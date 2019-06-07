// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  dialogflow: {
    // angularBot: 'ddb971da18bb493596fb4043ecd72117'
    angularBot: '7695989c4f994b45863901dabdf3589f'
  },

  firebaseConfig: {
    apiKey: 'AIzaSyCLRQ-_CFzSJb_7ueYy8ocRHHev9kBc_Ho',
    authDomain: 'ionicchatbot-9f96c.firebaseapp.com',
    databaseURL: 'https://ionicchatbot-9f96c.firebaseio.com',
    projectId: 'ionicchatbot-9f96c',
    storageBucket: 'ionicchatbot-9f96c.appspot.com',
    messagingSenderId: '827237888550',
    appId: '1:827237888550:web:f7d03484638fd199'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
