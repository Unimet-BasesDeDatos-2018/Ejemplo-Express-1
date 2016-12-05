# Ejemplo Deadpool

Proyecto creado con NodeJS, Express, Sequelize, y Handlebars. Que pueden utilizar como plantilla para sus proyectos.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Iniciar App

```
npm install
npm start
```

Una vez instalada las dependencias, e iniciado el servidor
Solo abra [http://localhost:3000](http://localhost:3000).
(si tiene configurado el ambiente de node con un puerto específico, tendrá que utilizar el puerto asignado para acceder).

## Pruebas 
### Pendiente
Pruebas utilizando [Mocha](https://mochajs.org). Ejecute usando `npm test-mocha`
### Pendiente
Pruebas utilizando [Jasmine](https://jasmine.github.io/2.5/introduction). Ejecute usando `npm test-jasmine`

## Configuración

#### Express Setup

Crear un aplicación base con `express-generator` [Express Generator](https://expressjs.com/en/starter/generator.html)
```bash
# install express generator globally
npm install -g express-generator

# create the sample app
mkdir express-example
cd express-example
express -f

# install all node modules
npm install
```

#### Configuración de Sequelize

```bash
# install ORM , CLI and SQLite dialect
npm install --save sequelize sqlite3
npm install -g sequelize-cli

# generate models
node_modules/.bin/sequelize init
sequelize model:create --name Apuesta --attributes resultado:number,monto:number
sequelize model:create --name Persona --attributes apellido:string,nombre:string,cedula:number
```

Utilizando los modelos creados agregar relaciones

```js
// apuesta.js
// ...
classMethods: {
  associate: function(models) {
    Apuesta.belongsTo(models.Persona, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as: 'apostador',
      foreignKey: {
        allowNull: false
      }
    });
    Apuesta.belongsTo(models.Persona, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as: 'objetivo',
      foreignKey: {
        allowNull: false
      }
    });
  }
}
// ...
```

```js
// user.js
// ...
classMethods: {
  associate: function(models) {
    User.hasMany(models.Task)
  }
}
// ...
```

If you want to use the automatic table creation that sequelize provides,
you have to adjust the `bin/www` file to this:

```js
#!/usr/bin/env node

var app = require('../app');
var debug = require('debug')('init:server');
var http = require('http');
var models = require("../models");

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

// sync() will create all table if they doesn't exist in database
models.sequelize.sync().then(function () {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
});

function normalizePort(val) { /* ... */ }
function onError(error) { /* ... */ }
function onListening() { /* ... */ }
```

And finally you have to adjust the `config/config.json` to fit your environment.
Once thats done, your database configuration is ready!
