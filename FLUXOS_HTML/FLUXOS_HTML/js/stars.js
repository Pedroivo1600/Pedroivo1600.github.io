document.addEventListener('DOMContentLoaded', function(){

    let stars = document.querySelectorAll('.div-teste')
    console.log(stars)

    let boolean = true
    
    for (star of stars){
        star.addEventListener('click', function(event){
            if (boolean){
                event.target.querySelector('.star').classList.remove('fa-regular')
                event.target.querySelector('.star').classList.add('fa-solid')
                boolean = false
            } else{
                event.target.querySelector('.star').classList.remove('fa-solid')
                event.target.querySelector('.star').classList.add('fa-regular')
                boolean = true
            }
        })
    }

    
    
})