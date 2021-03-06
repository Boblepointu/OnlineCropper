# OnlineCropper
A tool to quickly crop image files.

## Compatibility

OnlineCropper server should be platform independent. Currently it has been tested on :
-  `Linux Workstation 3.16.0-4-amd64 #1 SMP Debian 3.16.36-1+deb8u2 (2016-10-19) x86_64 GNU/Linux`
  - With `NPM v4.2.0` and `Node v7.10.0`

## Dependencies

OnlineCropper is designed to work with minimum dependency hassle. Here an how to :

```bash
# Move into personnal dir
cd ~
# Clone this repository
git clone https://github.com/Boblepointu/OnlineCropper.git && cd OnlineCropper
# Installing dependencies (npm, n, project dependencies)
sudo apt-get install -qy npm && npm i -g n && n latest && npm i
```

## Configuration

You can edit the `./config.json` file to change the web server port.

## Running

One dependencies are resolved, you can launch one of the few project `npm commands` :
- `npm run start-dev` => Will launch webpack in watch mode, and run `main.js`.
- `npm run start` => Will run `main.js`
- `npm run build` => Will launch webpack build and exit

Once started, you'll be able to open up `http://127.0.0.1:5000`.

## Todo

- Build 'harder' type structures for events data;
- Add React class more documentation;
- Add a log engine;
- Manage errors on file upload;
- Hardening of server (file uploads might be at risk);
- [...]
