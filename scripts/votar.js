var videoVar;
var $videoWidth = $('#iframe').width();
var $videoheight = $('#iframe').height();
var windowWidth
var windowHeight

var easy1, easy2, 
    hard1, hard2, 
    primeraTematica1, primeraTematica2, 
    segundaTematica1, segundaTematica2, 
    personajes1, personajes2, 
    personajesCheck1, personajesCheck2,
    primerMinuto1, primerMinuto2, 
    segundoMinuto1, segundoMinuto2,
    primerDeluxe1, primerDeluxe2,
    segundoDeluxe1, segundoDeluxe2,
    total1, total2,
    resultado1, resultado2;

var easy1Sumado, easy2Sumado, 
    hard1Sumado, hard2Sumado, 
    primeraTematica1Sumado, primeraTematica1Sumado, 
    segundaTematica1Sumado, segundaTematica2Sumado, 
    personajes1Sumado, personajes2Sumado, 
    primerMinuto1Sumado, primerMinuto2Sumado,
    segundoMinuto1Sumado, segundoMinuto2Sumado,
    primerDeluxe1Sumado, primerDeluxe2Sumado,
    segundoDeluxe1Sumado, segundoDeluxe2Sumado;

function videoComprobacion(){

    function faseUnoADos(){
        $('.faseUno').css('display', 'none')
    
        // Comprobar si el video tiene fuente
        if ($('#iframe').attr("src") == null){
            $('.divIframe').css("display", 'none')
        } else{
            $('.divIframe').css("display", 'flex')
        }
    
        $('.faseDos').css('display', 'flex')
    }

    faseUnoADos()
}

function nombresMc(){

    function faseDosAEasy(){
        $('.faseDos').css('display', 'none')
        $('.Easymode').css('display', 'flex')
    }

    $('#submitFaseDos').click(function(){
        if ($('#nombresInput1').val().length <= 0 || $('#nombresInput2').val().length <= 0){
            $('.errorNombresInput').css("display", 'flex')
        } else {
            var nombreMC1 = $('#nombresInput1').val();
            var nombreMC2 = $('#nombresInput2').val();
            $('.NombresMC1').html(nombreMC1)
            $('.NombresMC2').html(nombreMC2)
            faseDosAEasy()
        }
    })
}

function cssSinVideos(){
    $('.fases').css('width', '100%');

    windowWidth = $(window).width();
    windowHeight = $(window).height();

    if(windowWidth > 710 && windowHeight > 590){
        $('.fases').css('margin-top', '0px');
    }

    if(windowWidth > windowHeight && windowWidth < 710){
        $('.fases').css('margin-top', '60px');
    }

    $('.contenedorIframe').css('display', 'none')
}

function video(){

    $('#submitFaseUno').click(function () { 
        if($('#urlInput').val().length == 11){
            videoVar = 'https://www.youtube.com/embed/' + $('#urlInput').val()
            $('#iframe').attr("src", videoVar)
            videoComprobacion()
        } else if ($('#urlInput').val().length == 0){
            cssSinVideos()
            videoComprobacion()
        } else{
            $('.errorUrlInput').css("display", 'flex')
        }
    });
}

function inputValor() {
    $('.inputPatron').change(function (patronValor) { 
        var patronValor = $(this).val()
        $(this).siblings('.patronValor').html(patronValor)
    });
}


function submitEasy() {
    $('#submitEasymode').click(function () { 

        function sumaEasy() {
            easy1 = $('.easy1')
            easy2 = $('.easy2')
            
            easy1Sumado = parseInt(easy1[0].value) + 
                          parseInt(easy1[1].value) + 
                          parseInt(easy1[2].value) + 
                          parseInt(easy1[3].value) + 
                          parseInt(easy1[4].value) + 
                          parseInt(easy1[5].value) + 
                          parseInt(easy1[6].value) + 
                          parseInt(easy1[7].value) + 
                          parseInt(easy1[8].value)
        
            easy2Sumado = parseInt(easy2[0].value) + 
                          parseInt(easy2[1].value) + 
                          parseInt(easy2[2].value) + 
                          parseInt(easy2[3].value) + 
                          parseInt(easy2[4].value) + 
                          parseInt(easy2[5].value) + 
                          parseInt(easy2[6].value) + 
                          parseInt(easy2[7].value) + 
                          parseInt(easy2[8].value)
        }

        sumaEasy()

        function EasyAHard(){
            $('.Easymode').css('display', 'none')
            $('.Hardmode').css('display', 'flex')
        }

        EasyAHard()
    });
}

function submitHard() {
    $('#submitHardmode').click(function () { 

        function sumaHard() {
            hard1 = $('.hard1')
            hard2 = $('.hard2')
            
            hard1Sumado = parseInt(hard1[0].value) + 
                          parseInt(hard1[1].value) + 
                          parseInt(hard1[2].value) + 
                          parseInt(hard1[3].value) + 
                          parseInt(hard1[4].value) + 
                          parseInt(hard1[5].value) + 
                          parseInt(hard1[6].value) + 
                          parseInt(hard1[7].value) + 
                          parseInt(hard1[8].value)
        
            hard2Sumado = parseInt(hard2[0].value) + 
                          parseInt(hard2[1].value) + 
                          parseInt(hard2[2].value) + 
                          parseInt(hard2[3].value) + 
                          parseInt(hard2[4].value) + 
                          parseInt(hard2[5].value) + 
                          parseInt(hard2[6].value) + 
                          parseInt(hard2[7].value) + 
                          parseInt(hard2[8].value)
        }

        sumaHard()

        function HardAPrimeraTematica(){
            $('.Hardmode').css('display', 'none')
            $('.PrimeraTematica').css('display', 'flex')
        }

        HardAPrimeraTematica()

    });
}

function submitPrimeraTematica() {
    $('#submitPrimeraTematica').click(function () { 

        function sumaPrimeraTematica() {
            primeraTematica1 = $('.primeraTematica1')
            primeraTematica2 = $('.primeraTematica2')
            
            primeraTematica1Sumado = parseInt(primeraTematica1[0].value) + 
                                     parseInt(primeraTematica1[1].value) + 
                                     parseInt(primeraTematica1[2].value) + 
                                     parseInt(primeraTematica1[3].value) + 
                                     parseInt(primeraTematica1[4].value) + 
                                     parseInt(primeraTematica1[5].value) + 
                                     parseInt(primeraTematica1[6].value)
        
            primeraTematica2Sumado = parseInt(primeraTematica2[0].value) + 
                                     parseInt(primeraTematica2[1].value) + 
                                     parseInt(primeraTematica2[2].value) + 
                                     parseInt(primeraTematica2[3].value) + 
                                     parseInt(primeraTematica2[4].value) + 
                                     parseInt(primeraTematica2[5].value) + 
                                     parseInt(primeraTematica2[6].value)
        }

        sumaPrimeraTematica()
        
        function PrimeraTematicaASegundaTematica(){
            $('.PrimeraTematica').css('display', 'none')
            $('.SegundaTematica').css('display', 'flex')
        }

        PrimeraTematicaASegundaTematica()
    });
}

function submitSegundaTematica() {
    $('#submitSegundaTematica').click(function () { 

        function sumaSegundaTematica() {
            segundaTematica1 = $('.segundaTematica1')
            segundaTematica2 = $('.segundaTematica2')
            
            segundaTematica1Sumado = parseInt(segundaTematica1[0].value) + 
                                     parseInt(segundaTematica1[1].value) + 
                                     parseInt(segundaTematica1[2].value) + 
                                     parseInt(segundaTematica1[3].value) + 
                                     parseInt(segundaTematica1[4].value) + 
                                     parseInt(segundaTematica1[5].value) + 
                                     parseInt(segundaTematica1[6].value);
        
            segundaTematica2Sumado = parseInt(segundaTematica2[0].value) + 
                                     parseInt(segundaTematica2[1].value) + 
                                     parseInt(segundaTematica2[2].value) + 
                                     parseInt(segundaTematica2[3].value) + 
                                     parseInt(segundaTematica2[4].value) + 
                                     parseInt(segundaTematica2[5].value) + 
                                     parseInt(segundaTematica2[6].value);
        }

        sumaSegundaTematica()

        function SegundaTematicaAPersonajes(){
            $('.SegundaTematica').css('display', 'none')
            $('.Personajes').css('display', 'flex')
        }

        SegundaTematicaAPersonajes();
    });
}

function submitPersonajes() {
    $('#submitPersonajes').click(function () { 

        function sumaPersonajes() {
            personajes1 = $('.personajes1')
            personajes2 = $('.personajes2')
            personajesCheck1 = $('.personajesCheck1')
            personajesCheck2 = $('.personajesCheck2')

            for (var x = 0; x < personajesCheck1.length; x++) {
                if(personajesCheck1[x].checked == false){
                    personajesCheck1[x].value = 0;
                } else{
                    personajesCheck1[x].value = 1;
                }
            }

            for (var x = 0; x < personajesCheck2.length; x++) {
                if(personajesCheck2[x].checked == false){
                    personajesCheck2[x].value = 0;
                } else{
                    personajesCheck2[x].value = 1;
                }
            }
            
            personajes1Sumado = parseInt(personajes1[0].value) + 
                                parseInt(personajes1[1].value) + 
                                parseInt(personajes1[2].value) + 
                                parseInt(personajes1[3].value) + 
                                parseInt(personajes1[4].value) + 
                                parseInt(personajes1[5].value) + 
                                parseInt(personajes1[6].value) + 
                                parseInt(personajes1[7].value) + 
                                parseInt(personajes1[8].value) + 
                                parseInt(personajesCheck1[0].value) + 
                                parseInt(personajesCheck1[1].value) + 
                                parseInt(personajesCheck1[2].value) + 
                                parseInt(personajesCheck1[3].value) + 
                                parseInt(personajesCheck1[4].value) +
                                parseInt(personajesCheck1[5].value);
        
            personajes2Sumado = parseInt(personajes2[0].value) + 
                                parseInt(personajes2[1].value) + 
                                parseInt(personajes2[2].value) + 
                                parseInt(personajes2[3].value) + 
                                parseInt(personajes2[4].value) + 
                                parseInt(personajes2[5].value) + 
                                parseInt(personajes2[6].value) + 
                                parseInt(personajes2[7].value) + 
                                parseInt(personajes2[8].value) +
                                parseInt(personajesCheck2[0].value) + 
                                parseInt(personajesCheck2[1].value) + 
                                parseInt(personajesCheck2[2].value) + 
                                parseInt(personajesCheck2[3].value) + 
                                parseInt(personajesCheck2[4].value) +
                                parseInt(personajesCheck2[5].value);
        }

        sumaPersonajes()

        function PersonajesAPrimerMinuto(){
            $('.Personajes').css('display', 'none')
            $('.PrimerMinuto').css('display', 'flex')
        }

        PersonajesAPrimerMinuto();
    });
}

function submitPrimerMinuto() {
    $('#submitPrimerMinuto').click(function () { 

        function sumaPrimerMinuto() {
            primerMinuto1 = $('.primerMinuto1')
            primerMinuto2 = $('.primerMinuto2')
            respuestaCheck1 = $('.respuestaCheck1')

            for (var x = 0; x < respuestaCheck1.length; x++) {
                if(respuestaCheck1[x].checked == false){
                    respuestaCheck1[x].value = 0;
                } else{
                    respuestaCheck1[x].value = 1;
                }
            }
            
            primerMinuto1Sumado = parseInt(primerMinuto1[0].value) + 
                                     parseInt(primerMinuto1[1].value) + 
                                     parseInt(primerMinuto1[2].value) + 
                                     parseInt(primerMinuto1[3].value) + 
                                     parseInt(primerMinuto1[4].value) + 
                                     parseInt(primerMinuto1[5].value) + 
                                     parseInt(primerMinuto1[6].value) + 
                                     parseInt(primerMinuto1[7].value) + 
                                     parseInt(primerMinuto1[8].value) +
                                     parseInt(respuestaCheck1[0].value) + 
                                     parseInt(respuestaCheck1[1].value) + 
                                     parseInt(respuestaCheck1[2].value) + 
                                     parseInt(respuestaCheck1[3].value) + 
                                     parseInt(respuestaCheck1[4].value) + 
                                     parseInt(respuestaCheck1[5].value);
        
            primerMinuto2Sumado = parseInt(primerMinuto2[0].value) + 
                                     parseInt(primerMinuto2[1].value) + 
                                     parseInt(primerMinuto2[2].value) + 
                                     parseInt(primerMinuto2[3].value) + 
                                     parseInt(primerMinuto2[4].value) + 
                                     parseInt(primerMinuto2[5].value) + 
                                     parseInt(primerMinuto2[6].value) + 
                                     parseInt(primerMinuto2[7].value) + 
                                     parseInt(primerMinuto2[8].value)
        }

        sumaPrimerMinuto()
        
        function PrimerMinutoASegundoMinuto(){
            $('.PrimerMinuto').css('display', 'none')
            $('.SegundoMinuto').css('display', 'flex')
        }

        PrimerMinutoASegundoMinuto()
    });
}

function submitSegundoMinuto() {
    $('#submitSegundoMinuto').click(function () { 

        function sumaSegundoMinuto() {
            segundoMinuto1 = $('.segundoMinuto1')
            segundoMinuto2 = $('.segundoMinuto2')
            respuestaCheck2 = $('.respuestaCheck2')

            for (var x = 0; x < respuestaCheck2.length; x++) {
                if(respuestaCheck2[x].checked == false){
                    respuestaCheck2[x].value = 0;
                } else{
                    respuestaCheck2[x].value = 1;
                }
            }
            
            segundoMinuto1Sumado = parseInt(segundoMinuto1[0].value) + 
                                     parseInt(segundoMinuto1[1].value) + 
                                     parseInt(segundoMinuto1[2].value) + 
                                     parseInt(segundoMinuto1[3].value) + 
                                     parseInt(segundoMinuto1[4].value) + 
                                     parseInt(segundoMinuto1[5].value) + 
                                     parseInt(segundoMinuto1[6].value);
        
            segundoMinuto2Sumado = parseInt(segundoMinuto2[0].value) + 
                                     parseInt(segundoMinuto2[1].value) + 
                                     parseInt(segundoMinuto2[2].value) + 
                                     parseInt(segundoMinuto2[3].value) + 
                                     parseInt(segundoMinuto2[4].value) + 
                                     parseInt(segundoMinuto2[5].value) + 
                                     parseInt(segundoMinuto2[6].value) +
                                     parseInt(respuestaCheck2[0].value) + 
                                     parseInt(respuestaCheck2[1].value) + 
                                     parseInt(respuestaCheck2[2].value) + 
                                     parseInt(respuestaCheck2[3].value) + 
                                     parseInt(respuestaCheck2[4].value) + 
                                     parseInt(respuestaCheck2[5].value);
        }

        sumaSegundoMinuto()
        
        function SegundoMinutoAPrimerDeluxe(){
            $('.SegundoMinuto').css('display', 'none')
            $('.PrimerDeluxe').css('display', 'flex')
        }

        SegundoMinutoAPrimerDeluxe()
    });
}

function submitPrimerDeluxe() {
    $('#submitPrimerDeluxe').click(function () { 

        function sumaPrimerDeluxe() {
            primerDeluxe1 = $('.primerDeluxe1')
            primerDeluxe2 = $('.primerDeluxe2')
            
            primerDeluxe1Sumado = parseInt(primerDeluxe1[0].value) + 
                                     parseInt(primerDeluxe1[1].value) + 
                                     parseInt(primerDeluxe1[2].value) + 
                                     parseInt(primerDeluxe1[3].value) + 
                                     parseInt(primerDeluxe1[4].value) + 
                                     parseInt(primerDeluxe1[5].value) + 
                                     parseInt(primerDeluxe1[6].value);
        
            primerDeluxe2Sumado = parseInt(primerDeluxe2[0].value) + 
                                     parseInt(primerDeluxe2[1].value) + 
                                     parseInt(primerDeluxe2[2].value) + 
                                     parseInt(primerDeluxe2[3].value) + 
                                     parseInt(primerDeluxe2[4].value) + 
                                     parseInt(primerDeluxe2[5].value) + 
                                     parseInt(primerDeluxe2[6].value);
        }

        sumaPrimerDeluxe()
        
        function SegundoMinutoAPrimerDeluxe(){
            $('.PrimerDeluxe').css('display', 'none')
            $('.SegundoDeluxe').css('display', 'flex')
        }

        SegundoMinutoAPrimerDeluxe()
    });
}

function coloresGanadores(){
    if (palabras1 > palabras2){
        $(resultado1[0]).addClass('resultadoGanador');
        $(resultado2[0]).addClass('resultadoPerdedor');
    } else if(palabras1 < palabras2){
        $(resultado2[0]).addClass('resultadoGanador');
        $(resultado1[0]).addClass('resultadoPerdedor');
    } else{
        $(resultado1[0]).addClass('resultadoReplica');
        $(resultado2[0]).addClass('resultadoReplica');
    }

    if (tematicas1 > tematicas2){
        $(resultado1[1]).addClass('resultadoGanador');
        $(resultado2[1]).addClass('resultadoPerdedor');
    } else if(tematicas1 < tematicas2){
        $(resultado2[1]).addClass('resultadoGanador');
        $(resultado1[1]).addClass('resultadoPerdedor');
    } else{
        $(resultado1[1]).addClass('resultadoReplica');
        $(resultado2[1]).addClass('resultadoReplica');
    }

    if (personajes1Sumado > personajes2Sumado){
        $(resultado1[2]).addClass('resultadoGanador');
        $(resultado2[2]).addClass('resultadoPerdedor');
    } else if(personajes1Sumado < personajes2Sumado){
        $(resultado2[2]).addClass('resultadoGanador');
        $(resultado1[2]).addClass('resultadoPerdedor');
    } else{
        $(resultado1[2]).addClass('resultadoReplica');
        $(resultado2[2]).addClass('resultadoReplica');
    }

    if (minutos1 > minutos2){
        $(resultado1[3]).addClass('resultadoGanador');
        $(resultado2[3]).addClass('resultadoPerdedor');
    } else if(minutos1 < minutos2){
        $(resultado2[3]).addClass('resultadoGanador');
        $(resultado1[3]).addClass('resultadoPerdedor');
    } else{
        $(resultado1[3]).addClass('resultadoReplica');
        $(resultado2[3]).addClass('resultadoReplica');
    }

    if (deluxe1 > deluxe2){
        $(resultado1[4]).addClass('resultadoGanador');
        $(resultado2[4]).addClass('resultadoPerdedor');
    } else if(deluxe1 < deluxe2){
        $(resultado2[4]).addClass('resultadoGanador');
        $(resultado1[4]).addClass('resultadoPerdedor');
    } else{
        $(resultado1[4]).addClass('resultadoReplica');
        $(resultado2[4]).addClass('resultadoReplica');
    }

    if(total1 > total2 + 5){
        $(resultado1[5]).addClass('resultadoGanador');
        $(resultado2[5]).addClass('resultadoPerdedor');
    } else if(total2 > total1 + 5){
        $(resultado2[5]).addClass('resultadoGanador');
        $(resultado1[5]).addClass('resultadoPerdedor');
    } else{
        $(resultado1[5]).addClass('resultadoReplica');
        $(resultado2[5]).addClass('resultadoReplica');
    }
}

var palabras1, palabras2,
    tematicas1, tematicas2,
    minutos1, minutos2,
    deluxe1, deluxe2;

function ResultadoFinal() {
    resultado1 = $('.resultado1');
    resultado2 = $('.resultado2');

    palabras1 = parseInt(easy1Sumado) + parseInt(hard1Sumado)
    palabras2 = parseInt(easy2Sumado) + parseInt(hard2Sumado)
    tematicas1 = parseInt(primeraTematica1Sumado) + parseInt(segundaTematica1Sumado)
    tematicas2 = parseInt(primeraTematica2Sumado) + parseInt(segundaTematica2Sumado)
    minutos1 = parseInt(primerMinuto1Sumado) + parseInt(segundoMinuto1Sumado)
    minutos2 = parseInt(primerMinuto2Sumado) + parseInt(segundoMinuto2Sumado)
    deluxe1 = parseInt(primerDeluxe1Sumado) + parseInt(segundoDeluxe1Sumado)
    deluxe2 = parseInt(primerDeluxe2Sumado) + parseInt(segundoDeluxe2Sumado)

    total1 = parseInt(easy1Sumado) + 
             parseInt(hard1Sumado) +
             parseInt(primeraTematica1Sumado) +
             parseInt(segundaTematica1Sumado) +
             parseInt(personajes1Sumado) +
             parseInt(primerMinuto1Sumado) +
             parseInt(segundoMinuto1Sumado) +
             parseInt(deluxe1);

    total2 = parseInt(easy2Sumado) + 
             parseInt(hard2Sumado) +
             parseInt(primeraTematica2Sumado) +
             parseInt(segundaTematica2Sumado) +
             parseInt(personajes2Sumado) +
             parseInt(primerMinuto2Sumado) +
             parseInt(segundoMinuto2Sumado) +
             parseInt(deluxe2);

    $(resultado1[0]).html(palabras1);
    $(resultado1[1]).html(tematicas1);
    $(resultado1[2]).html(personajes1Sumado);
    $(resultado1[3]).html(minutos1);
    $(resultado1[4]).html(deluxe1);
    $(resultado1[5]).html(total1);

    $(resultado2[0]).html(palabras2);
    $(resultado2[1]).html(tematicas2);
    $(resultado2[2]).html(personajes2Sumado);
    $(resultado2[3]).html(minutos2);
    $(resultado2[4]).html(deluxe2);
    $(resultado2[5]).html(total2);

    coloresGanadores()
}

function submitSegundoDeluxe() {
    $('#submitSegundoDeluxe').click(function () { 

        function sumaSegundoDeluxe() {
            segundoDeluxe1 = $('.segundoDeluxe1')
            segundoDeluxe2 = $('.segundoDeluxe2')
            
            segundoDeluxe1Sumado = parseInt(segundoDeluxe1[0].value) + 
                                     parseInt(segundoDeluxe1[1].value) + 
                                     parseInt(segundoDeluxe1[2].value) + 
                                     parseInt(segundoDeluxe1[3].value) + 
                                     parseInt(segundoDeluxe1[4].value) + 
                                     parseInt(segundoDeluxe1[5].value) + 
                                     parseInt(segundoDeluxe1[6].value);
        
            segundoDeluxe2Sumado = parseInt(segundoDeluxe2[0].value) + 
                                     parseInt(segundoDeluxe2[1].value) + 
                                     parseInt(segundoDeluxe2[2].value) + 
                                     parseInt(segundoDeluxe2[3].value) + 
                                     parseInt(segundoDeluxe2[4].value) + 
                                     parseInt(segundoDeluxe2[5].value) + 
                                     parseInt(segundoDeluxe2[6].value);
        }

        sumaSegundoDeluxe()
        
        function SegundoDeluxeAResultadoFinal(){
            $('.SegundoDeluxe').css('display', 'none')
            $('.ResultadoFinal').css('display', 'flex')
        }

        ResultadoFinal()
        SegundoDeluxeAResultadoFinal()
    });
}

$(document).ready(function () {
    video();
    nombresMc();
    inputValor();
    submitEasy();
    submitHard();
    submitPrimeraTematica();
    submitSegundaTematica();
    submitPersonajes();
    submitPrimerMinuto();
    submitSegundoMinuto();
    submitPrimerDeluxe();
    submitSegundoDeluxe();
}) ;