const baloons=document.querySelectorAll(`.box`)
const checkBox =document.querySelectorAll(`.checkbox`)
const allcheck=document.querySelectorAll(`.allcheck`)
baloons.forEach((baloon,idx)=>{
    baloon.addEventListener(`click`,()=>{
        baloon.classList.toggle(`bgRed`)
        checkBox[idx].checked = !checkBox[idx].checked
    })
})
allcheck.addEventListener('click',()=>{
    const innercheck = input[0].checked
    input.forEach((el,idx)=>{
        el.checked = !innercheck
        balloon.forEach((balloon)=>{
            balloon.classList.toggle('bgRed')
        })
    })

})