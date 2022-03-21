/*
    Se importa views() y createPoUp() desde ./modules
    Se utiliza JQuery para poder ubicar los elementos
    pares e impares.
*/

import { views } from '../modules/moduleCounter.js';
import { createPopUp } from '../modules/popUp.js';

$(document).ready(function (){

    $("ul li div.images .button:odd").attr({
        'data-bs-toggle': 'modal',
        'data-bs-target':'#modal'
    })

    $("ul li div.images .button:odd").click(function(){
        
        let id = $(this).attr('data-id');
        let srcValue = $('.card-img-top[data-id='+id+']').attr("src"); 
        let altValue = $('.card-img-top[data-id='+id+']').attr("alt"); 
        
        views(id);

        $("img#dinamic-img").attr({
            'src' : srcValue,
            'alt' : altValue
        })

    });

    $("ul li div.images .button:even").click(function(){

        let id = $(this).attr('data-id');
        let srcValue = $('.card-img-top[data-id='+id+']').attr("src");
        let altValue = $('.card-img-top[data-id='+id+']').attr("alt");

        createPopUp(srcValue, altValue,id);
        
    });

    $("#callingAjax").click(function(){
        $.get('../test/home.json', function(res) {
            let txt = res.texto;
            document.getElementById("fill-textarea").innerHTML = txt;
        });
    })

});




