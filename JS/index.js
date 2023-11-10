const imagenGrande = document.querySelector(".papa");  
const contEditable = ()=> texto.setAttribute("contentEditable","true")
const  backgroundYellow = ()=>	texto.style.backgroundColor = "yellow"; 

const input = document.querySelector(".input")
const contenedor = document.querySelector(".Contenedor")


input.addEventListener("select",(e)=>{
	let start = e.target.selectionStart;
	let end = e.target.selectionEnd;
	let textoCompleto = input.value;
	contenedor.textContent = textoCompleto.substring(start,end);
	console.log(textoCompleto.substring(start, end))
})








let imagenArriva = document.querySelector(".imagen_arriva")
const imagen_0 = document.querySelector(".papa")
const imagen_abajo1 = document.getElementById("imagenes_abajo1")
const imagen_abajo2 = document.getElementById("imagenes_abajo2")
const imagen_abajo3 = document.getElementById("imagenes_abajo3")
const imagen_abajo4 = document.getElementById("imagenes_abajo4")
const imgSelected = document.querySelector(".imagen_seleccionada")
const slices1 = document.querySelector(".slices1")
const slices2 = document.querySelector(".slices2")
const containerImgSlices = document.querySelector(".container_img_slices")
const header = document.getElementById("header")

imagen_0.addEventListener("click",function(){

		containerImgSlices.style.display = "block"; 
})


window.addEventListener("click", function(event) {
	if (event.target === containerImgSlices){
		containerImgSlices.style.display = "none";
	}
	
});

window.addEventListener("click", function(event) {  // Para cambiar el fondo de la imagen grande al 
	if (event.target === imagen_abajo1){			// presionar una de las imagenes de abajo
		imagen_0.style.backgroundColor = "aqua";
	}else if(event.target === imagen_abajo2){
		imagen_0.style.backgroundColor = "red";
	}
	else if(event.target === imagen_abajo3){
		imagen_0.style.backgroundColor = "indigo";
	}
	else if(event.target === imagen_abajo4){
		imagen_0.style.backgroundColor = "darksalmon";
	}else{
		return 0;
	}
});

/* 

const expr = prompt("elige entre orange, pepino y mango")

switch(expr){
	case 'oranges':
		alert("oranges a 24 pavos");
		break;
	case 'pepino':
		alert('te lo metes por todo el chikoreo');
		break;
	case 'mango':
			alert("mango ya no hay")
		break
	default:
		alert("ninguna de las anteriores")

} */



imagenArriva.addEventListener("click",(event)=>{
	confirm("Deseas salir del sitio web?")
	if(confirm("Estas seguro que deseas salir? cuando sales de esta pagina reduce 5 cm de tu pene") === true){
		window.open("https://excalidraw.com/#room=cfbacb9c770189fe5b95,xOfVbABbgEDzipmTF9frpg")
	}else{
		console.log("pono")
	}
})



const  contenedor1 = document.querySelector(".contenedor1")
const href = document.querySelector(".href")
const button = document.querySelector(".button")


/*
	ESTO SIRVE PARA HACER DOBLE AUTENTICACION  AL DIRECCIONAR HACIA OTRA PAGINA 
href.addEventListener("click",(event)=>{
	 if(confirm("deseas salir?") ===  true){
		href.setAttribute('href','https://www.youtube.com/')
		console.log("realizado")
	 }else{
		console.error("micropene")
	 }
});
*/




let alumnos = [{
email:"tupito",  			// lo que esta adentro se convierte en alumno
nombre: "josue",  			// y datos seria lo que seta antes de los dos puntos (:)
celular:"pobre mental"} 	// lo que se selecciona es el string  
];
 

for (alumno in alumnos){
let datos = alumnos[alumno]
let nombre = datos["nombre"]
let email = datos['email']
let celular = datos['celular']
document.write(`A continuacion presentamos los datos  <br>
estos son: <br>
-Nombre: <b> ${nombre}</b> <br>
-email: <b> ${email}</b> <br>
-celular: <b>${celular}</b> <br><br>`)
}