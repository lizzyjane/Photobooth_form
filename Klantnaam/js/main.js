$( document ).ready(function() {

    $('.person, .pirate').click(function () {
        $('#input-field-persons').val($(this).attr('data-id'));
    });

    $('.background').click(function () {
        $('#input-field-backgrounds').val($(this).attr('data-id'));
    });

    $('.arrow-right-1').click(function () {
        $('.form-1').hide();
        $('.form-2').show();
    });

    $('.arrow-right-2').click(function () {
        $('.form-2').hide();
        $('.form-3').show();
    });

    $('.arrow-right-3').click(function () {
        $('.form-3').hide();
        $('.form-4').show();
    });

    $('.arrow-left-1').click(function () {
        $('.form-1').show();
        $('.form-2').hide();
    });

    $('.arrow-left-2').click(function () {
        $('.form-2').show();
        $('.form-3').hide();
    });

    $('.restart').click(function () {
        location.reload();
    });

// Wanneer er op (pirateperson) '1' word geklikt dan...
    document.getElementById('pirateperson1').onclick = function() {
        $('#person2').css({'color': '#000000'}); // kleuren 2, 3, 4 en 5 zwart. 
        $('#person3').css({'color': '#000000'}); // Deze kleuren zijn al zwart, maar niet als
        $('#person4').css({'color': '#000000'}); // er al op één van deze geklikt was.
        $('#person5').css({'color': '#000000'});
        $('#person1').css({'color': '#ed7b7c'}); // kleurt 1 rood.
    };
    

     document.getElementById('pirateperson2').onclick = function() {
        $('#person1').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person2').css({'color': '#ed7b7c'});
    };

    document.getElementById('pirateperson3').onclick = function() {
        $('#person2').css({'color': '#000000'});
        $('#person1').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person3').css({'color': '#ed7b7c'});
    };

    document.getElementById('pirateperson4').onclick = function() {
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person1').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person4').css({'color': '#ed7b7c'});
    };

    document.getElementById('pirateperson5').onclick = function() {
        $('#person1').css({'color': '#000000'});
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#ed7b7c'});
    };


    document.getElementById('pirate1').onclick = function() {
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person1').css({'color': '#ed7b7c'});
    };

     document.getElementById('pirate2').onclick = function() {
        $('#person1').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person2').css({'color': '#ed7b7c'});
    };

    document.getElementById('pirate3').onclick = function() {
        $('#person2').css({'color': '#000000'});
        $('#person1').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person3').css({'color': '#ed7b7c'});
    };

    document.getElementById('pirate4').onclick = function() {
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person1').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person4').css({'color': '#ed7b7c'});
    };

    document.getElementById('pirate5').onclick = function() {
        $('#person1').css({'color': '#000000'});
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#ed7b7c'});
    };



    $('#person1').click(function() {
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person1').css({'color': '#ed7b7c'});
    });

    $('#person2').click(function() {
        $('#person1').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person2').css({'color': '#ed7b7c'});
    });

    $('#person3').click(function() {
        $('#person2').css({'color': '#000000'});
        $('#person1').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person3').css({'color': '#ed7b7c'});
    });

    $('#person4').click(function() {
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person1').css({'color': '#000000'});
        $('#person5').css({'color': '#000000'});
        $('#person4').css({'color': '#ed7b7c'});
    });

    $('#person5').click(function() {
        $('#person1').css({'color': '#000000'});
        $('#person2').css({'color': '#000000'});
        $('#person3').css({'color': '#000000'});
        $('#person4').css({'color': '#000000'});
        $('#person5').css({'color': '#ed7b7c'});
    });


    document.getElementById('background1').onclick = function() {
        $('#background1').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background2').onclick = function() {
        $('#background2').css({'opacity': '1'});

        $('#background1').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background3').onclick = function() {
        $('#background3').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background4').onclick = function() {
        $('#background4').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background5').onclick = function() {
        $('#background5').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background6').onclick = function() {
        $('#background6').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background7').onclick = function() {
        $('#background7').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background8').onclick = function() {
        $('#background8').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

    document.getElementById('background9').onclick = function() {
        $('#background9').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background10').onclick = function() {
        $('#background10').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background11').onclick = function() {
        $('#background11').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background12').onclick = function() {
        $('#background12').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background13').onclick = function() {
        $('#background13').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background14').onclick = function() {
        $('#background14').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
        $('#background15').css({'opacity': '0.5'});
    };

        document.getElementById('background15').onclick = function() {
        $('#background15').css({'opacity': '1'});

        $('#background2').css({'opacity': '0.5'});
        $('#background3').css({'opacity': '0.5'});
        $('#background4').css({'opacity': '0.5'});
        $('#background5').css({'opacity': '0.5'});
        $('#background6').css({'opacity': '0.5'});
        $('#background1').css({'opacity': '0.5'});
        $('#background8').css({'opacity': '0.5'});
        $('#background7').css({'opacity': '0.5'});
        $('#background10').css({'opacity': '0.5'});
        $('#background11').css({'opacity': '0.5'});
        $('#background12').css({'opacity': '0.5'});
        $('#background13').css({'opacity': '0.5'});
        $('#background14').css({'opacity': '0.5'});
        $('#background9').css({'opacity': '0.5'});
    };

});

