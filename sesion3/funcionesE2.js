function MarcarTodos(){
    let obTbl = document.getElementById("tbl");
    let valorObcheck = obTbl.rows[0].cells[3].childNodes[0].checked;
    let lstFilas = obTbl.rows;
    for (i=1;i<lstFilas.length;i++){
        obTbl.rows[i].cells[3].childNodes[0].checked = valorObcheck;        
    }
}
function crearTabla(){
    let divForm = document.getElementById("Captura");
    divForm.hidden = true;
    let divTbl = document.getElementById("tabla");
    let obTbl = document.createElement("table");
    obTbl.id = "tbl";
    let fila = obTbl.insertRow(0);
    fila.id = "cabecera";
    let c1 = fila.insertCell(0);
    let c2 = fila.insertCell(1);
    let c3 = fila.insertCell(2);
    let c4 = fila.insertCell(3);
    c1.textContent = "Id";
    c2.textContent = "Nombre";
    c3.textContent = "Apellido";
    //Agregando un control checkbox
    let ctrl = document.createElement("input");
    ctrl.type = "checkbox";
    ctrl.onclick = function(){
        MarcarTodos();
    }
    c4.appendChild(ctrl);
    obTbl.appendChild(fila);
    divTbl.appendChild(obTbl);
}
function Agregar(){
    let divForm = document.getElementById("Captura");
    divForm.hidden = false;
    divForm.style.zIndex = "1";
    divForm.style.filter = "alpha(opacity=99)";
    divForm.style.position = "absolute";
    divForm.style.top = "10px";
    divForm.style.left = (screen.width/2 - 600) + "px";
    let divP = document.getElementById("Principal");
    divP.style.opacity = "0.1";
}
function Eliminar(){
    let obTbl = document.getElementById("tbl");
    let lstEliminar = [];
    for (i=1;i<obTbl.rows.length;i++){
        if (obTbl.rows[i].cells[3].childNodes[0].checked)
            lstEliminar.push(i);
    }
    if (lstEliminar.length==0)
        alert("No hay filas seleccionadas para eliminar");
    else{
        for (x=lstEliminar.length-1;x>=0;x--){
            obTbl.deleteRow(lstEliminar[x]);
        }
    }
    tbl.rows[0].cells[3].childNodes[0].checked = false;
}
function AceptarForm(){
    //Recuperar los datos del formulario
    let v1 = document.frmCaptura.id.value;
    let v2 = document.frmCaptura.nom.value;
    let v3 = document.frmCaptura.ape.value;
    //Limpiando controles input del form
    document.frmCaptura.id.value = "";
    document.frmCaptura.nom.value = "";
    document.frmCaptura.ape.value = "";
    //Agregar los datos de las variables a la tabla
    let tbl = document.getElementById("tbl");
    let numFilas = tbl.rows.length;
    tbl.insertRow(numFilas);
    tbl.rows[numFilas].insertCell(0);
    tbl.rows[numFilas].cells[0].textContent = v1;
    tbl.rows[numFilas].insertCell(1);
    tbl.rows[numFilas].cells[1].textContent = v2;
    tbl.rows[numFilas].insertCell(2);
    tbl.rows[numFilas].cells[2].textContent = v3;
    tbl.rows[numFilas].insertCell(3);
    let ctrl = document.createElement("input");
    ctrl.type = "checkbox";
    tbl.rows[numFilas].cells[3].appendChild(ctrl);
    CancelarForm();
}
function CancelarForm(){
    let divForm = document.getElementById("Captura");
    divForm.hidden = true;
    let divP = document.getElementById("Principal");
    divP.style.opacity="1";
}