 let click = window.document.getElementById('icon-burguer')
 let nav = window.document.getElementById('nav-list')
 click.addEventListener('click', menu)

 function menu() {
    if(nav.style.display == 'none'){
        nav.style.display = 'block'
    } 
        else{
            nav.style.display = 'none'
        }
 } 