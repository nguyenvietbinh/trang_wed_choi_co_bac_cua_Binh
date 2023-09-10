
let startXocDiaButton, cacOCuoc, batDauXoc

startXocDiaButton = document.getElementsByClassName('startbox3')[0]
cacOCuoc = document.querySelector('.cacOCuoc')
batDauXoc = document.querySelector('.batDauXoc')
startXocDiaButton.addEventListener('mouseup', function () {
    anPhanTu([listOfGame, dialogBoxElment])
    hienThiPhanTu([cacOCuoc, batDauXoc])
})
