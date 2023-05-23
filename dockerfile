FROM cypress/browsers:node14.17.0-chrome91-ff89

WORKDIR /my-cypress-project .

COPY ./package.json .
COPY . .

RUN npm install

CMD ["npx","cypress","run", "--config-file", "cypress.config.js"]

   
