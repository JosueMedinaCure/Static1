imagenGrande = document.querySelector(".papa");

//imagenGrande.addEventListener("click", function () {
        
  //      this.classList.toggle('papa');       
    //    this.classList.toggle('imagen_1');
//});

const texto = document.querySelector(".texto")


const contEditable = ()=> texto.setAttribute("contentEditable","true")

const backgroundYellow = ()=>	texto.style.backgroundColor = "yellow"; 

texto.addEventListener("mouseover",function(){

	contEditable()
	backgroundYellow()
});


texto.addEventListener("mouseout",function(){
	
	texto.setAttribute("contentEditable","false")
	texto.style.backgroundColor = ""; 

});
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

window.addEventListener("click", function(event) {
	if (event.target === imagen_abajo1){
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

imagenArriva.addEventListener("before",(event)=>{
	console.log("te fuiste del sitio")
});

/* contenedor1.addEventListener("click",(event)=>{
	alert("contenedor1")
	event.stopPropagation()
}); */


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
