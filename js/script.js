let list = document.getElementById('list')
let hamberge = document.getElementById('hamberger')
let close = document.getElementById('close')
let menu = document.getElementById('menu')

hamberge.addEventListener('click', function () {
    if(list.style.display === 'none'){
        list.style.display = 'block'
        close.style.display = 'none'
        menu.style.display = 'block'
        hamberge.style.display='none'
    }
    else{
        list.style.display = 'none'
        close.style.display = 'block'
        menu.style.display = 'none'
    }   
})
