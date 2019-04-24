// Referencia: https://www.devmedia.com.br/desenhando-com-o-mouse-na-canvas-da-html5/27619
window.onload = function () {
    var ctx;
    var quadro;
    var largura = 500;
    var altura = 300;

    criaQuadro()

    function criaQuadro()
    {
        quadro = document.getElementById("quadro");
        quadro.setAttribute("width", largura);
        quadro.setAttribute("height", altura);
    
        ctx = quadro.getContext("2d");
        ctx.strokeStyle = "#FFFFFF";
    }            
    
    var desenhando = false;

    quadro.onmousedown = function (evt) {
        ctx.moveTo(evt.clientX, evt.clientY);
        desenhando = true;
    };

    quadro.onmouseup = function () {
        desenhando = false;                
    };

    quadro.onmousemove = function (evt) {
        if (desenhando) {
            ctx.lineTo(evt.clientX, evt.clientY);
            ctx.stroke();
        }
    };

    var novo = document.getElementById("novo");
    novo.onclick = function(evt) {
        criaQuadro();
        //ctx.clearRect(0, 0, quadro.width, quadro.height);
    };
    var salvar = document.getElementById("salvar");
    salvar.onclick = function(evt) {
        var image = quadro.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        window.location.href = image;
    };
};