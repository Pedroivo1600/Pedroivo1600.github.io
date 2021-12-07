document.addEventListener('DOMContentLoaded', function(){
    let chats = document.querySelectorAll('.chat-box')
    messages = document.querySelectorAll('p')


    for (message of messages){
        message.innerHTML = localStorage.getItem('last message')
    }


    for (chat of chats){
        chat.addEventListener('click', function(event){
            username = event.target.querySelector('h4').innerHTML
            localStorage.setItem('username', username)

            
        })
    }





})