let ls = window.localStorage;
function MarcarTodos(){
    let obTbl = document.getElementById("tbl");
    let valorObcheck = obTbl.rows[0].cells[3].childNodes[0].checked;
    let lstFilas = obTbl.rows;
    for (i=1;i<lstFilas.length;i++){
        obTbl.rows[i].cells[3].childNodes[0].checked = valorObcheck;        
    }
}

async function obtenerSuperHeroes(){
    const result = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    const res = await result.json();
    let resCad = JSON.stringify(res.members);
    ls.setItem("heroes", resCad);
}
function AgregarFila(it){
    //Agregar los datos de las variables a la tabla
    let tbl = document.getElementById("tbl");
    let numFilas = tbl.rows.length;
    tbl.insertRow(numFilas);
    tbl.rows[numFilas].insertCell(0);
    tbl.rows[numFilas].cells[0].textContent = it;
    tbl.rows[numFilas].insertCell(1);
    let ctrl = document.createElement("input");
    ctrl.type = "checkbox";
    tbl.rows[numFilas].cells[1].appendChild(ctrl);
}
function crearTabla(){
    obtenerSuperHeroes();

    let divForm = document.getElementById("Captura");
    divForm.hidden = true;
    let divTbl = document.getElementById("tabla");
    let obTbl = document.createElement("table");
    obTbl.id = "tbl";
    let fila = obTbl.insertRow(0);
    fila.id = "cabecera";
    let c1 = fila.insertCell(0);
    let c2 = fila.insertCell(1);
    c1.textContent = "Nombre";
    //Agregando un control checkbox
    let ctrl = document.createElement("input");
    ctrl.type = "checkbox";
    ctrl.onclick = function(){
        MarcarTodos();
    }
    c2.appendChild(ctrl);
    obTbl.appendChild(fila);
    divTbl.appendChild(obTbl);

    let lst = JSON.parse(ls.getItem("heroes"));
    lst.forEach(element => {
        AgregarFila(element.name);    
    });
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
    let lst = JSON.parse(ls.getItem("heroes"));
    let obTbl = document.getElementById("tbl");
    let lstEliminar = [];
    for (i=1;i<obTbl.rows.length;i++){
        if (obTbl.rows[i].cells[1].childNodes[0].checked){
            lstEliminar.push(i);
            delete lst[i-1];
        }
    }
    if (lstEliminar.length==0)
        alert("No hay filas seleccionadas para eliminar");
    else{
        for (x=lstEliminar.length-1;x>=0;x--){
            obTbl.deleteRow(lstEliminar[x]);
            
        }
    }
    tbl.rows[0].cells[1].childNodes[0].checked = false;
    lst.pop();
    ls.setItem("heroes", JSON.stringify(lst));

}
function AceptarForm(){
    //Recuperar los datos del formulario
    let v1 = document.frmCaptura.nom.value;
    //Limpiando controles input del form
    document.frmCaptura.nom.value = "";
    AgregarFila(v1);
    let lst = JSON.parse(ls.getItem("heroes"));
    let nuevoOb = {
        name : v1,
        age : 99,
        secretIdentity : "None",
        powers : []
    };
    lst.push(nuevoOb);
    ls.setItem("heroes", JSON.stringify(lst));
    CancelarForm();
}
function CancelarForm(){
    let divForm = document.getElementById("Captura");
    divForm.hidden = true;
    let divP = document.getElementById("Principal");
    divP.style.opacity="1";
}