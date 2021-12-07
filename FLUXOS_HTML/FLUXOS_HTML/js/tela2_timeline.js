document.addEventListener('DOMContentLoaded', function(){


    names = document.querySelectorAll('.nome-usuario')

    

    for (el of names){
        el.addEventListener('click', function(event){


            worker_name = event.target.innerHTML

            localStorage.setItem('worker name', worker_name)





        })
    }


})