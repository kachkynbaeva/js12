const balloons=document.querySelectorAll('.box')
const checkbox=document.querySelectorAll('.checkbox')
const selectAll=document.querySelector('#selectAll')


const handleClick = (balloon, idx ) => {
    balloon.classList.toggle('bgRed')
    console.log(balloon.classList)
    checkbox [idx] .checked= !checkbox[idx].checked
    const arrBallons = Array.from(balloons)
    selectAll.checked = ! ! arrBallons.every(el=> el.classList[1] === 'bgRed')
}

checkbox.forEach(el => {
    el.addEventListener('click', () => {
        el.checked = ! el.checked
    })
})

balloons.forEach((el,idx) => {
    el.addEventListener('click', () => handleClick(el, idx))
})


selectAll.addEventListener('click', () => {
    if (selectAll.checked) {
        balloons.forEach(el =>
            el.classList.add('bgRed'))
        checkbox.forEach(el => el.checked = true)
    } else {
        balloons.forEach(el =>
            el.classList.add('bgRed'))
        checkbox.forEach(el => el.checked = false)
    }
})