
let keoTha = false

bat.addEventListener('mousedown', function(event) {
    mouseX = event.clientX
    mouseY = event.clientY
    if (event.button === 0) {
        keoTha = true
    }
})

bat.addEventListener('mousemove', function(event) {
    if (keoTha) {
        newMouseX = event.clientX
        newMouseY = event.clientY
        khoangCachX = newMouseX - mouseX
        khoangCachY = newMouseY - mouseY
        bat.style.transform = `translate(${khoangCachX}px, ${khoangCachY}px)`
    }
})

bat.addEventListener('mouseup', function() {
    anPhanTu([bat])
    keoTha = false
})
