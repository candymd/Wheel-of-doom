$(document).ready(function () {


     const coders= [ 'Candy', 'Gabrielle', 'Carmen', 'Laura .C', 'Alexia', 
     'Alisa', 'Kristina', 'Helen', 'Ana', 'Anna', 'Yuliya', 'Desiree', 'Laura M.', 'Valentina', 'Gracia', 
     'Joana', 'Faby', 'Marisa', 'Judith', 'Sonia', 'Tamara', 'Rosa', 'Sandra', 'Sara', 'Marta',
     ];

     function pickCoder () {
        let random=  Math.floor((Math.random() * coders.length));
        var randomName=coders[random];
        console.log(randomName);

        

        coders.splice(random,1);

        coders.forEach( t => 
            $('.resultado').html(
                randomName
            )
        );
     
}

$('.start').on('click', pickCoder);
$('.reset').on('click', pickCoder);
    $('.resultado').reset(randomName);

});

