var contador = 1;
var contador1 = 1;
var contador2 = 1;

function main () {

    $('.icon-menu').click(function () { 
        if (contador == 1){
            $('nav').animate({
                right: "-18px"
            });
            $('.fondoMenu').addClass('oscuro')
            $('body').addClass('menu-noScroll')
            contador = 0;                
        } else {
            $('nav').animate({
                right: "-65%"
            });
            $('.fondoMenu').removeClass('oscuro')
            $('body').removeClass('menu-noScroll')
            contador = 1; 
        }
    });
}

function fueraMenu(){
    $('.fondoMenu').click(function(){
        $('nav').animate({
            right: "-65%"
        });
        $('.fondoMenu').removeClass('oscuro')
        $('.fondoMenu').removeClass('oscuroMenor')
        $('body').removeClass('menu-noScroll')
        contador = 1; 
    });
}

function navegadorPc(){
    $('.menu').css('right', '140px');
    $('.submenu').siblings('ul').css('display', 'none');
    $('.flecha').removeClass('icon-chevron-small-down').addClass('icon-chevron-small-right');
    $('.fondoMenu').removeClass('oscuro');
    $('body').removeClass('menu-noScroll');
}

function navegadorMovil(){
    $('.flecha').addClass('icon-chevron-small-down').removeClass('icon-chevron-small-right');
    $('.submenu').siblings('ul').css('display', 'none');
    $('.menu').css('right', '-65%');
}

function click(){

    $('.submenu').click(function(){
        $(this).siblings('ul').slideToggle(150);
    });

    $('.submenu1').click(function(){
        $(this).children('ul').slideToggle(150);
    });
}

function submenu(){
    var $windowWidth = $(window).width();
    var $windowheight = $(window).height();
    if($windowWidth < 769 || $windowheight < 501){
        navegadorMovil();
    } else if ($windowWidth > 768 || $windowheight > 500){
        navegadorPc();
    }
}

function formatofms(){
    var $windowWidth = $(window).width();
    if($windowWidth < 769){
        $('.img-pc').addClass('img-responsive');
        $('.img-movil').removeClass('img-responsive');
    } else if ($windowWidth > 768){
        $('.img-pc').removeClass('img-responsive');
        $('.img-movil').addClass('img-responsive');
    }
}

function scroll(){
    var $windowWidth = $(window).width();
    var $windowheight = $(window).height();
    if($windowWidth < 769 || $windowheight < 501){
        $('.menu').addClass('menu-scroll');
    } else if ($windowWidth > 768 || $windowheight > 500){
        $('.menu').removeClass('menu-scroll');
    }
}

function anclas(){
    
    var contadorAnclas0 = 1;
    var contadorAnclas1 = 1;
    var contadorAnclas2 = 1;
    var contadorAnclas3 = 1;
    var contadorAnclas4 = 1;
    var contadorAnclas5 = 1;

    $('#resJor13').click(function(){
        if(contadorAnclas0 == 1){
            $(this).siblings('ul').slideDown(150)
            $('.fondoMenu').addClass('oscuroMenor')
            contadorAnclas0 = 0;
        } else {
            $(this).siblings('ul').slideUp(150)
            contadorAnclas0 = 1;
            $('.fondoMenu').removeClass('oscuroMenor')
        }
    });

    $('#resJor46').click(function(){
        if(contadorAnclas1 == 1){
            $(this).siblings('ul').slideDown(150)
            $('.fondoMenu').addClass('oscuroMenor')
            contadorAnclas1 = 0;
        } else {
            $(this).siblings('ul').slideUp(150)
            contadorAnclas1 = 1;
            $('.fondoMenu').removeClass('oscuroMenor')
        }
    });

    $('#resJor79').click(function(){
        if(contadorAnclas2 == 1){
            $(this).siblings('ul').slideDown(150)
            $('.fondoMenu').addClass('oscuroMenor')
            contadorAnclas2 = 0;
        } else {
            $(this).siblings('ul').slideUp(150)
            contadorAnclas2 = 1;
            $('.fondoMenu').removeClass('oscuroMenor')
        }
    });

    $('#resJor14').click(function(){
        if(contadorAnclas3 == 1){
            $(this).siblings('ul').slideDown(150)
            $('.fondoMenu').addClass('oscuroMenor')
            contadorAnclas3 = 0;
        } else {
            $(this).siblings('ul').slideUp(150)
            contadorAnclas3 = 1;
            $('.fondoMenu').removeClass('oscuroMenor')
        }
    });

    $('#resJor59').click(function(){
        if(contadorAnclas4 == 1){
            $(this).siblings('ul').slideDown(150)
            $('.fondoMenu').addClass('oscuroMenor')
            contadorAnclas4 = 0;
        } else {
            $(this).siblings('ul').slideUp(150)
            contadorAnclas4 = 1;
            $('.fondoMenu').removeClass('oscuroMenor')
        }
    });

    $('#resJor19').click(function(){
        if(contadorAnclas5 == 1){
            $(this).siblings('ul').slideDown(150)
            $('.fondoMenu').addClass('oscuroMenor')
            contadorAnclas5 = 0;
        } else {
            $(this).siblings('ul').slideUp(150)
            contadorAnclas5 = 1;
            $('.fondoMenu').removeClass('oscuroMenor')
        }
    });

    $('.fondoMenu').click(function(){
        if(contadorAnclas0 == 0 || contadorAnclas1 == 0 || contadorAnclas2 == 0 ||contadorAnclas3 == 0 ||contadorAnclas4 == 0 ||contadorAnclas5 == 0){
            $('.resumenJornada').siblings('ul').slideUp(150)
            contadorAnclas0 = 1;
            contadorAnclas1 = 1;
            contadorAnclas2 = 1;
            contadorAnclas3 = 1;
            contadorAnclas4 = 1;
            contadorAnclas5 = 1;
        }
    });

    $('.resumenJornada').siblings('ul').children('li').children('a').click(function(){
        $('.resumenJornada').siblings('ul').slideUp(150)
        contadorAnclas0 = 1;
        contadorAnclas1 = 1;
        contadorAnclas2 = 1;
        contadorAnclas3 = 1;
        contadorAnclas4 = 1;
        contadorAnclas5 = 1;
        $('.fondoMenu').removeClass('oscuroMenor')
    })

    $('.anclasMenu').children('ul').children('li').children('a').click(function(){
        $('.resumenJornada').siblings('ul').slideUp(150)
        contadorAnclas0 = 1;
        contadorAnclas1 = 1;
        contadorAnclas2 = 1;
        contadorAnclas3 = 1;
        contadorAnclas4 = 1;
        contadorAnclas5 = 1;
        $('.fondoMenu').removeClass('oscuroMenor')
    })

}

$(document).ready(function(){
    main();
    submenu();
    click()
    formatofms();
    fueraMenu()
    scroll();
    anclas();
});

$(window).resize(function(){
    submenu();
    formatofms();
    scroll();
    $('.fondoMenu').removeClass('oscuro')
});