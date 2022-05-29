

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

const nome = document.getElementById("cliente_nome")
const sobrenome = document.getElementById("client_sobrenome")
const email= document.getElementById("cliente_email")
const clientes = document.getElementsByClassName("clientes")

HTML.addEventListener("load",function(){
    alert("Aoba")
})