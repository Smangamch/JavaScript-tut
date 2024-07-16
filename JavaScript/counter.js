
if(!localStorage.getItem('counter')) {
    localStorage.setItem('counter, 0') 
}


function count(){      
    let counter = localStorage.getItem('counter') 
    counter++;                                          /*Alternatively we can write "counter += 1" | "counter = counter + 1" */      
    document.querySelector('h1').innerHTML = counter; 
    localStorage.setItem('counter', counter)       
    if(counter % 10 === 0) {
        alert(`Counter limit ${counter} is reached!`) 
            }
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('h1').innerHTML = localStorage.getItem('counter');
            document.querySelector('button').onclick = count; 
    })
    
}