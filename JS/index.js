imagenGrande = document.querySelector(".papa");

//imagenGrande.addEventListener("click", function () {
        
  //      this.classList.toggle('papa');       
    //    this.classList.toggle('imagen_1');
//});

const texto = document.querySelector(".texto")

texto.addEventListener("mouseover",function(){

	texto.setAttribute("contentEditable","true")

	texto.style.backgroundColor = "yellow"; 

});


texto.addEventListener("mouseout",function(){
	
	texto.setAttribute("contentEditable","false")
	texto.style.backgroundColor = ""; 

});

const imagen_0 = document.querySelector(".papa")
const imagen_abajo1 = document.getElementById("imagenes_abajo1")
const imagen_abajo2 = document.getElementById("imagenes_abajo2")
const imagen_abajo3 = document.getElementById("imagenes_abajo3")
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




	

	

	
	//texto.removeAttribute("onmouseover","combiar()")
	


