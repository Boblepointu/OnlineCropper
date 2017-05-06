FROM debian:latest

RUN apt-get update
RUN apt-get install -qy npm git
RUN npm i -g n
RUN n latest
RUN mkdir /app
WORKDIR /app
RUN git clone https://github.com/Boblepointu/OnlineCropper.git .
RUN npm i
CMD node main.js
