FROM debian:latest

RUN apt-get update
RUN apt-get install -qy npm git curl wget
RUN npm i -g n
RUN n latest
RUN mkdir /app
WORKDIR /app
RUN git clone https://github.com/Boblepointu/OnlineCropper.git .
RUN npm i
EXPOSE 5000
CMD node main.js
