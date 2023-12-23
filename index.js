


var a =document.querySelector("h1")

a.style.color="blue"
a.innerHTML="Hey lets have a coffee"


var d =document.querySelectorAll("h1")

d.forEach(function(e)
{
    // d.innerHTML="Bye Bye Vishal"
    console.log(e.innerHTML);
})

a.addEventListener("click",function(){
    a.innerHTML="Badal gya hu mai"
})

function fun()
{
        if(flag==0)
        {
            bul.style.backgroundColor="yellow"
            console.log("clicked")
            flag=2
        }
        else{
            bul.style.backgroundColor="transparent"
            console.log("again clicked")
            flag=0
        }
        bul.innerHTML="my name is khan"
}

var flag=0;k
var bul=document.querySelector("#bulb")
var btn =document.querySelector("button")

btn.addEventListener("click",fun)