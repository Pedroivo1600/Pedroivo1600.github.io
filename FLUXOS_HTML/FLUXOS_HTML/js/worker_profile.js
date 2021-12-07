document.addEventListener('DOMContentLoaded', function(){

    let worker_name = document.querySelector('#nome-worker')

    worker_name.innerHTML = localStorage.getItem('worker name')

    let button = document.querySelector('button')
    

    button.addEventListener('click', function(event){

        nome_trabalhador = worker_name.innerHTML

        localStorage.setItem('nome trabalhador', nome_trabalhador)

    })

})