function criarbola (){
	var bola = document.createElement("div"); //cria uma div e seta ela na variavel bola
	bola.setAttribute("class", "bola");  //seta o atributo class="bola"
	var p1 = Math.floor(Math.random() *500);	// cria 1 numero aletario de 0 a 500 e salva em p1
	var p2 = Math.floor(Math.random() *400);	// cria 1 numero aletario de 0 a 500 e salva em p2
	
	var cores = ["red","blue","black","orange","purple","green","red","grey","red","black","orange","purple","grey","green","red"]
	var IdCor = Math.floor(Math.random()*15);
	// alert(IdCor);
	var cor = cores [IdCor];
	// alert(cor);

	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:"+cor);	//seta bolinha para aparecer em lugares aleatorios
	bola.setAttribute("onclick", "estourar(this,this.style.backgroundColor)");	//chama a função estourar
	document.body.appendChild(bola);	//faz aparecer o a div bola ( chamando a variavel bola ) - pega o conteudo do site e add algo novo
}

function estourar(BolinhaClicada,CorDaBola){
	// alert (CorDaBola);
	if (CorDaBola == "red") {
	// alert("Estourou bola vermelha!");
	var div = parseInt(document.getElementById("placar").innerHTML); //funciona tambem , porem usei o innerHTML++ 
	var div = div - 10;
	document.getElementById("placar").innerHTML = div;
	document.body.removeChild(BolinhaClicada);	}
	
	else if(CorDaBola == "blue"){
		var div = parseInt(document.getElementById("placar").innerHTML);
		var div = div + 4
		document.getElementById("placar").innerHTML = div ; 
		document.body.removeChild(BolinhaClicada) } 

	else if(CorDaBola == "grey"){
		var div = parseInt(document.getElementById("placar").innerHTML)
		var div = div + 2
		document.getElementById("placar").innerHTML = div
		document.body.removeChild(BolinhaClicada) }


	else {
	document.body.removeChild(BolinhaClicada);
	document.getElementById("placar").innerHTML++; } 

}


function iniciar(){
	setInterval(criarbola,1000); 
}
