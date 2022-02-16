let panel = document.querySelector(".result-panel");
const igual = document.querySelector('.equal')
const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button){
    button.addEventListener('click',function(){    
        let click =  button.innerText    
        actionButton(click);
    })
})

function actionButton(click){
    if(click==="="){           
        return equal();
    }
    if(click==="C"){
        return clear();
    }
    if(click==="CE"){
        return del();
    }
    write(click);
}

function write(element){
    panel.innerHTML += element;
}

function clear () {
    panel.innerHTML = ' '
}

function del() {
    if (panel.innerText){
        let result = document.querySelector('.result-panel').innerHTML
        panel.innerHTML = result.substring(0, result.length - 1)
    }
}

function equal(){
    if(panel.innerText.toString()){
        document.querySelector('.result-panel').innerHTML = eval(panel.innerHTML);
    }
}