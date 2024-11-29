const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const pagehome = $('.brand')
const signin = $('.signUp')
const email = $('#email')
const password = $('#password')
const logic = {
    accounts : [
        {
            email : 'che',
            password: 'che'
        }
    ],

    check : function () {
      
    },
    handle : function (){
        pagehome.onclick = function (){
            window.location.href ="index.html";
        }


    },
    start : function(){
        this.handle()
    }
}

logic.start ()