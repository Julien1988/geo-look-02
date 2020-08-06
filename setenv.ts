const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
    production: ${isProduction},
    API_KEY: '${process.env.API_KEY}',
    AUTH_DOMAIN: "${process.env.AUTH_DOMAIN}",
    DATABASE_URL: "${process.env.DATABASE_URL}",
    PROJECT_ID: "${process.env.PROJECT_ID}",
    STORAGE_BUCKET: "${process.env.STORAGE_BUCKET}",
    MESSAGEIN_SENDER_ID: "${process.env.MESSAGEIN_SENDER_ID}",
    APP_ID: "${process.env.APP_ID}",
    MEASUREMENT_ID: "${process.env.MEASUREMENT_ID}",
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
