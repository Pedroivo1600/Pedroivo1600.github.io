document.addEventListener('DOMContentLoaded', function(){


    let hamburguer = document.querySelector('.container')

    let nav = document.querySelector('nav')

    let hireapp = document.getElementById('logo')

    
    hamburguer.addEventListener('click', function(event){


        hamburguer.classList.toggle('change')

        if (nav.style.display === 'flex'){
            nav.style.display = 'none'
            hireapp.style.display = 'block'

        } else{
            nav.style.display = 'flex'
            nav.style.alignItems = 'center'

            hireapp.style.display = 'none'

        }


    })




})
