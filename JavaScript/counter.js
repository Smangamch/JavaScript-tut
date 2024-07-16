
if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0) 
}


function count(){      
    let counter = localStorage.getItem('counter') 
    counter++;                                          /*Alternatively we can write "counter += 1" | "counter = counter + 1" */      
    document.querySelector('#header').innerHTML = counter; 
    localStorage.setItem('counter', counter)  
    }
    document.addEventListener('DOMContentLoaded', function(){
        document.querySelector('#header').innerHTML = localStorage.getItem('counter');
        document.querySelector('button').onclick = count; 
    })
    
