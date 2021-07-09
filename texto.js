var main_text = document.getElementById("main_text");

function play(){
	main_text.style.display = "inline-block";
}

function stop(){
	main_text.style.display = "none";
}

function update(data){
    data = JSON.parse(data);
    texto = data.texto;
    main_text.innerText             = (texto == undefined || texto == null) ? "Texto"        : texto;
    main_text.style.fontFamily      = (data.fonte == undefined)             ? "Fenomen Sans" : data.fonte;
    main_text.style.color           = (data.cor == undefined)               ? "white"        : data.cor;
    main_text.style.fontWeight      = (data.estilo == undefined)            ? "400"          : data.estilo;
    main_text.style.fontSize        = (data.tamanho == undefined)           ? "100px"        : data.tamanho + "px";
    main_text.style.letterSpacing   = (data.espaco == undefined)            ? "normal"       : data.espaco + "em";
}