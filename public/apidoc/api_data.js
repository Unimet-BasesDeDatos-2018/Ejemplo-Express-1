define({ "api": [
  {
    "type": "post",
    "url": "/apuestas",
    "title": "2. Crea Apuesta",
    "name": "CreateApuesta",
    "group": "Apuestas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "apostadorId",
            "description": "<p>Id de la persona Apostador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "objetivoId",
            "description": "<p>Id de la persona Objetivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "resultado",
            "description": "<p>Valor esperado.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "apuesta",
            "description": "<p>Cantidad apostada.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo:",
          "content": "{\n  \"apostadorId\":1,\n  \"objetivoId\":2,\n  \"resultado\":10,\n  \"apuesta\":100\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://deadpool-ejemplo.herokuapp.com/apuestas"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "apostadorId",
            "description": "<p>Id de la persona Apostador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "objetivoId",
            "description": "<p>Id de la persona Objetivo.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resultado",
            "description": "<p>Valor esperado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "apuesta",
            "description": "<p>Cantidad apostada.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Actualización.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Creación.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apuestas.js",
    "groupTitle": "Apuestas"
  },
  {
    "type": "delete",
    "url": "/apuestas/:id",
    "title": "3. Borra Apuesta dado ID",
    "name": "DeleteApuesta",
    "group": "Apuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Numbre",
            "optional": false,
            "field": "Number",
            "description": "<p>Cantidad de casillas borradas.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apuestas.js",
    "groupTitle": "Apuestas",
    "sampleRequest": [
      {
        "url": "https://deadpool-ejemplo.herokuapp.com/apuestas/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/apuestas",
    "title": "1. Get todas las Apuestas",
    "name": "GetApuestas",
    "group": "Apuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "apostador.Nombre",
            "description": "<p>Nombre del Apostador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "objetivo.Nombre",
            "description": "<p>Nombre del Objetivo.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resultado",
            "description": "<p>Resultado esperado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "monto",
            "description": "<p>Cantidad apostada.</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Ejemplo:",
          "content": "[{\n  \"monto\":100,\n  \"resultado\":10,\n  \"apostador\":{\n    \"nombre\":\"bernardo\"\n  },\n  \"objetivo\":{\n    \"nombre\":\"hola\"\n  }\n }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/apuestas.js",
    "groupTitle": "Apuestas",
    "sampleRequest": [
      {
        "url": "https://deadpool-ejemplo.herokuapp.com/apuestas"
      }
    ]
  },
  {
    "type": "post",
    "url": "/personas",
    "title": "2. Crea Persona",
    "name": "CreatePersona",
    "group": "Personas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cedula",
            "description": "<p>Cédula de la Persona.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la Persona.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido de la Persona.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n  \"id\": 1,\n  \"apellido\": \"garcia\",\n  \"nombre\": \"bernardo\",\n  \"cedula\": 1,\n  \"createdAt\": \"2016-12-04T02:30:57.000Z\",\n  \"updatedAt\": \"2016-12-04T02:30:57.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cedula",
            "description": "<p>cedula de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la Persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido de la Persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Actualización.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Creación.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personas.js",
    "groupTitle": "Personas",
    "sampleRequest": [
      {
        "url": "https://deadpool-ejemplo.herokuapp.com/personas"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/personas/:id",
    "title": "3. Borra Persona dado ID",
    "name": "DeletePersonas",
    "group": "Personas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Numbre",
            "optional": false,
            "field": "Number",
            "description": "<p>Cantidad de casillas borradas.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personas.js",
    "groupTitle": "Personas",
    "sampleRequest": [
      {
        "url": "https://deadpool-ejemplo.herokuapp.com/personas/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/personas",
    "title": "1. Get all Personas",
    "name": "GetPersonas",
    "group": "Personas",
    "parameter": {
      "examples": [
        {
          "title": "Ejemplo:",
          "content": "[{\n  \"id\": 1,\n  \"apellido\": \"garcia\",\n  \"nombre\": \"bernardo\",\n  \"cedula\": 1,\n  \"createdAt\": \"2016-12-04T02:30:57.000Z\",\n  \"updatedAt\": \"2016-12-04T02:30:57.000Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cedula",
            "description": "<p>cedula de la persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de la Persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>Apellido de la Persona.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Actualización.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Creación.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personas.js",
    "groupTitle": "Personas",
    "sampleRequest": [
      {
        "url": "https://deadpool-ejemplo.herokuapp.com/personas"
      }
    ]
  }
] });
