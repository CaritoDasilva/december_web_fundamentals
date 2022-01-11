$(document).ready(function() {
    // your jquery codes here
    const a = $('h1.title').html()
    console.log(a); 
    //Operadores Ternarios
    // a === 'Soy bkn' ? $('.addText').append('<p class="newP">Hola soy un ternario</p>') 
    //     : $('.addText').append('<p class="newP">SOy el otro camino del ternario</p>')
    //IF / ELSE
    // if(a === 'Soy bkn') {
    //     $('.addText').append('<p class="newP"></p>');
    //     $('.newP').text('Hola me reescribo')
    // } else {
    //     $('.addText').append('<p class="newP"></p>');
    //     $('.newP').text('Soy un condicional super cool')
    // }
    switch (a) {
        case 'Soy bkn':
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
            $('.addText').append('<p class="newP">Hola soy un switch</p>');
            break;
        case 'Hola ninjas':
            $('.addText').append('<p class="newP">Por acá piola</p>');
            break;
        default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            $('.addText').append('<p class="newP">No coincidí con nada :(</p>');
            break;
    }
    $('.btn_fade').click(function() { 
        $(this).hide();
    });
    $('li').click(function() {
        $(this).hide();
    })
    $('.pCreator').click(function() {
        const pText = $('p.sp').text();
        console.log("🚀 ~ file: index.js ~ line 13 ~ $ ~ pText", pText)
        $('p.sp').text('Soy otro p')
    })

    $('.textCreatorInDiv').click(function() {
        $('.addText').append('<p class="newP"></p>');
        $('.newP').text('Hola me reescribo')
    })
});

