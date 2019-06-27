function criarbola (){
	var bola = document.createElement("div"); //cria uma div e seta ela na variavel bola
	bola.setAttribute("class", "bola");  //seta o atributo class="bola"
	var p1 = Math.floor(Math.random() *500);	// cria 1 numero aletario de 0 a 500 e salva em p1
	var p2 = Math.floor(Math.random() *400);	// cria 1 numero aletario de 0 a 500 e salva em p2
	
	var cores = ["red","blue","black","orange","purple","grey","green"];
	var IdCor = Math.floor(Math.random()*7);
	// alert(IdCor);
	var cor = cores [IdCor];
	// alert(cor);

	bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:"+cor);	//seta bolinha para aparecer em lugares aleatorios
	bola.setAttribute("onclick", "estourar(this)");	//chama a função estourar
	document.body.appendChild(bola);	//faz aparecer o a div bola ( chamando a variavel bola ) - pega o conteudo do site e add algo novo
}

function estourar(ElementoRecebidoBola){
	document.body.removeChild(ElementoRecebidoBola);
	document.getElementById("estouradas").innerHTML++;
	// var div = parseInt(document.getElementById("estouradas").innerHTML);
	// var div = div + 1;
	// document.getElementById("estouradas").innerHTML = div;
}

function iniciar(){
	setInterval(criarbola,1000); 
}
