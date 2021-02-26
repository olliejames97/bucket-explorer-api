A serverless Apollo GraphGL API, set up to run on LAMBDA

Live here: https://kk1rtpcsn9.execute-api.eu-west-1.amazonaws.com/prod/graphql

Note: The GraphQL playground has the wrong URL by default (see https://github.com/apollographql/apollo-server/issues/2136), It can be used by updating URL with the correct one (Including the "/dev/" or "/prod/" part)

# Set-up

### Prerequisites

- In order to deploty AWS CLI will need to be set up and configured

  ***

### Running locally

1. `npm install`
2. Create relevant .env files, these will store info about the API's default bucket

   - `.env.local` for local development (with serverless offline)
   - `.env.dev` for deployment to dev
   - `.env.prod` for deployment to prod
     eg:

   ```
   BUCKET_NAME="my-bucket"
   BUCKET_REGION="eu-west-1"
   BUCKET_ACCESS_ID="MY_ACCESS_KEY"
   BUCKET_ACCESS_SECRET="MY_SECRET_ACCESS_KEY"
   ```

3. - `npm run emulate` to run locally
   - `npm run deploy-dev` to deploy to AWS lambda dev environment
   - `npm run deploy-prod` to deploy to AWS lambda prod environment
