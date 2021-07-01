var main_text = document.getElementById("main_text");

function play(){
	main_text.style.display = "inline-block";
}

function stop(){
	main_text.style.display = "none";
}

function update(data){
    data = JSON.parse(data);
    
    // texto
    main_text.innerText = (data.texto == undefined) ? "Texto" : data.texto;

    // fonte
    main_text.style.fontFamily = (data.fonte == undefined) ? "Fenomen Sans" : data.fonte;
    
    // cor
    main_text.style.color = (data.cor == undefined) ? white : data.cor;

    // estilo
    main_text.style.weight = (data.estilo == undefined) ? "normal" : data.estilo;

    // tamanho
    main_text.style.fontSize = (data.tamanho == undefined) ? "100px" : data.tamanho + "px";

    //espacamento
    main_text.style.letterSpacing = (data.espaco == undefined) ? normal : data.espaco + "px";
}