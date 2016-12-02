define({ "api": [
  {
    "type": "post",
    "url": "/apuestas",
    "title": "Crea Apuesta",
    "name": "CreateApuesta",
    "group": "Apuestas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "apostador_id",
            "description": "<p>Id de la persona Apostador.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "objetivo_id",
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
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Body",
            "description": ""
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
    "url": "/:id",
    "title": "Borra Apuesta dado ID",
    "name": "DeleteApuesta",
    "group": "Apuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adios.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apuestas.js",
    "groupTitle": "Apuestas"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get todas las Apuestas",
    "name": "GetApuestas",
    "group": "Apuestas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Nombre del Apostador.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Monto",
            "description": "<p>Mondo apostado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Apuesta",
            "description": "<p>Cantidad apostada.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/apuestas.js",
    "groupTitle": "Apuestas"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Crea Persona",
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
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>id de la persona.</p>"
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
            "description": "<p>nombre.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "apellido",
            "description": "<p>apellido.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personas.js",
    "groupTitle": "Personas"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "Borra Persona dado ID",
    "name": "DeletePersonas",
    "group": "Personas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "adios",
            "description": "<p>.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personas.js",
    "groupTitle": "Personas"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get all Personas",
    "name": "GetPersonas",
    "group": "Personas",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nombre",
            "description": "<p>Apellido de la persona.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/personas.js",
    "groupTitle": "Personas"
  }
] });
