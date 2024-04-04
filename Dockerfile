FROM node:17.0.0

WORKDIR .
COPY . ./

RUN npm install -g serve
RUN npm install
RUN npm run react-build

EXPOSE 4000
CMD ["serve", "-s", "build", "-l", "4000"]
