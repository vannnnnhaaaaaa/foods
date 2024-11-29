const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const pagehome = $('.brand')

const app = {
    handle : function (){
        pagehome.onclick = function (){
            window.location.href ="index.html";
        }
    },
    start : function(){
        this.handle()
    }
}

app.start ()