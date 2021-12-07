document.addEventListener('DOMContentLoaded', function(){



    let stars = document.querySelectorAll('.top-of-card img')

    for (star of stars){
        star.addEventListener('click', function(event){ 
            if (event.target.alt === 'vazio'){
                event.target.src = 'img/estrela-preenchida.png'
                event.target.alt = 'preenchido'
            } else{
                event.target.src = 'img/estrela-vazia.png'
                event.target.alt = 'vazio'
            }
        })
    }

})