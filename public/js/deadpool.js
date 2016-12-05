/*global $ location */
var buttons = (id) => {
    var botones = '<div class="btn-group" role="group" aria-label="..."> <button type="button"';
    botones = botones + 'id="' + id + '" class="btn btn-primary" onclick="apostador(this.id)">Apostador</button><button type="button"';
    botones = botones + 'id="' + id + '" class="btn btn-warning" onclick="objetivo(this.id)">Objetivo</button><button type="button"';
    botones = botones + 'id="' + id + '" class="btn btn-danger" onclick="eliminar(this.id)">Eliminar</button></div>';
    return botones;
};
/*
* on Document ready
* Obtiene todas las persoans utilizando ajax de jquery con método GET
*/
$( document ).ready(() => {
    $.get("/personas", (data, status) =>{
        var out = "";
        for(var i=0; i < data.length; i++) {
            out = out + "<tr>";
            out = out + "<th>" + data[i].nombre+ "</th>";
            out = out + "<th>" + data[i].apellido+ "</th>";
            out = out + "<th>" + data[i].cedula+ "</th>";
            out = out + "<th>" + buttons(data[i].id)+ "</th>";
            out + "</tr>";
        }
        $( "#personas" ).append( out );
    });
});
/*
* Params {Number} id id de persona
* Llena el campo Apostador con el id
*/
var apostador = ( id ) => {
    $("#Apostador").val(id);
};
/*
* Params {Number} id id de persona
* Llena el campo Objetivo con el id
*/
var objetivo = ( id ) => {
    $("#Objetivo").val(id);
};
/*
* Params {Number} id id de persona
* Elimina la persona utilizando ajax de jquery  con método DELETE
*/
var eliminar = ( id ) => {
    $.ajax({
    url: '/personas/'+id,
    type: 'DELETE',
    success: (result) => (location.reload())
    });
};
/*
* Params {Number} id id de persona
* Elimina la apuesta utilizando ajax de jquery con método DELETE
*/
var eliminarApuesta = ( id ) => {
    $.ajax({
    url: '/apuestas/'+id,
    type: 'DELETE',
    success: function(result) {
        console.log(result);
        location.reload();
        }
    });
};
/*
* Params {Object} event
* Agrega una Persona utilizando ajax de jquery con método POST
*/
$( "#addPersona" ).submit(( event ) => {
    if($("#Nombre").val() && $("#Apellido").val() && $("#Cedula").val()) {
        var req = {
            nombre: $("#Nombre").val(),
            apellido: $("#Apellido").val(),
            cedula: $("#Cedula").val()
        };
        $.post("/personas",req,function(res) {
            location.reload();
        });
    }
    event.preventDefault();
});

$( "#addApuesta" ).submit(( event ) => {
    if($("#Objetivo").val() && $("#Apostador").val() && $("#Monto").val()) {
        if($("#Objetivo").val() !== $("#Apostador").val()){
            var req = {
                objetivoId: $("#Objetivo").val(),
                apostadorId: $("#Apostador").val(),
                monto: $("#Monto").val(),
                resultado: $("#Resultado").val()
            };
            $.post("/apuestas",req,(res)=>(location.reload()));
            console.log(req);
        }
    }
    event.preventDefault();
});
