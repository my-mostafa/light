let on = document.getElementById("ids")
let bt = document.querySelector("button")
let flagh = false
    function funci () {
      if(flagh){
      on.setAttribute("src", "./images/1.png")
      flagh=false
      bt.innerHTML = "power on"
      
    }
    else{
      
      on.setAttribute("src", "./images/3.png")
      flagh=true
      bt.innerHTML = "power off"
      
      }
    }






