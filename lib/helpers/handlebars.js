
var tabla = (items, options) => {
    var item = JSON.parse(items);
    console.log(items.length);
    var out = "<tr>";
    for(var i=0, l=item.length; i<l; i++) {
        for(var larry in item[i]){
            console.log('asd: ', larry, item[i][larry]);
            out = out + "<th>" + item[i][larry] + "</th>";
            console.log(out);
        }
    }
    
    return out + "</tr>";
};

var apostadores = (items, options) => {
    var item = JSON.parse(items);
    console.log(item.length);
    var out = "";
    for(var i=0, l=item.length; i<l; i++) {
        out = out + "<tr>";
        out = out + "<th>" + item[i].apostador.nombre + "</th>";
        out = out + "<th>" + item[i].objetivo.nombre + "</th>";
        out = out + "<th>" + item[i].monto + "</th>";
        out = out + "<th>" + item[i].resultado + "</th>";
        out = out + '<th><button id="'+  item[i].id +'" class="btn btn-danger" onclick="eliminarApuesta(this.id)">Eliminar</button>';
        out = out + "</tr>";
    }
    console.log(out)
    return out;
};
module.exports = {tabla: tabla, apostadores: apostadores};
