var personas;
var buttons = (id) => {
    var botones = '<div class="btn-group" role="group" aria-label="..."> <button type="button"';
    botones = botones + 'id="' + id + '" class="btn btn-primary" onclick="apostador(this.id)">Apostador</button><button type="button"';
    botones = botones + 'id="' + id + '" class="btn btn-warning" onclick="objetivo(this.id)">Objetivo</button><button type="button"';
    botones = botones + 'id="' + id + '" class="btn btn-danger" onclick="eliminar(this.id)">Eliminar</button></div>';
    return botones;
};

$( document ).ready(() => {
    $.get("/personas", (data, status) =>{
        personas = data;
        var out = "";
        for(var i=0; i < data.length; i++) {
            out = out + "<tr>";
            out = out + "<th>" + data[i].nombre+ "</th>";
            out = out + "<th>" + data[i].apellido+ "</th>";
            out = out + "<th>" + data[i].cedula+ "</th>";
            out = out + "<th>" + buttons(data[i].id)+ "</th>";
            out + "</tr>"
        }
        $( "#usuarios" ).append( out );
    });
});

var apostador = ( id ) => {
    $("#Apostador").val(id);
};

var objetivo = ( id ) => {
    $("#Objetivo").val(id);
};

var eliminar = ( id ) => {
    $.ajax({
    url: '/personas/'+id,
    type: 'DELETE',
    success: function(result) {
        console.log(result);
        location.reload();
        }
    });
};

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

$( "#addUsuario" ).submit(( event ) => {
    if($("#Nombre").val() && $("#Apellido").val() && $("#Cedula").val()) {
        var req = {
            nombre: $("#Nombre").val(),
            apellido: $("#Apellido").val(),
            cedula: $("#Cedula").val()
        }
        $.post("/personas",req,(res)=>(location.reload()));
        console.log(req);
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
            }
            $.post("/apuestas",req,(res)=>(location.reload()));
            console.log(req);
        }
    }
    event.preventDefault();
});
