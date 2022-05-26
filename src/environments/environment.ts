// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ACCOUNT_NAME: "ngangular",
  SAS: "https://ngangular.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-05-30T20:34:19Z&st=2022-05-16T12:34:19Z&spr=https,http&sig=mYHESJQDH36jgTpJA0zGJdM3bZhjX5wT7aqPdwrAa6s%3D",
  // URL: "https://api-rpademo-navitas.azurewebsites.net",
  URL: "http://localhost:5000/api"
};

/*//https://ngangular.blob.core.windows.net/?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-05-16T11:44:51Z&st=2022-05-16T03:44:51Z&spr=https,http&sig=VW%2F0tXG2fwky6ioHMgpd%2BFz51Zs0asw0jIIRNJGyDhE%3D
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
