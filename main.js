const humbMenu=document.getElementById('humbMenu');
const overlay=document.querySelector('.overlay');
const hasFade=document.querySelectorAll('.hasFade')
const body=document.body;

humbMenu.addEventListener("click",function(){
    if(humbMenu.classList.contains('open')){
        body.classList.remove('noscroll')
        humbMenu.classList.remove('open')
        hasFade.forEach(function(ele){
            ele.classList.add('fade-out')
            ele.classList.remove('fade-in')
        })
    }else{
        body.classList.add('noscroll')
        humbMenu.classList.add('open')
        hasFade.forEach(function(ele){
            ele.classList.add('fade-in')
            ele.classList.remove('fade-out')
        })

    }
})