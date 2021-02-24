A serverless Apollo GraphGL API, set up to run on LAMBDA

# Set-up

### Prerequisites

- AWS CLI is set-up and configured

  ***

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
   - `npm run deploy-dev` to deploy to a dev environment
   - `npm run deploy-prod` to deploy to a prod environment
