hienThiPhanTu = function (arr) {
    for (let i in arr) {
        arr[i].style.display = 'block'
    }
}
anPhanTu = function (arr) {
    for (let i in arr) {
        arr[i].style.display = 'none'
    }
}

var startXocDiaButton

startXocDiaButton = document.getElementsByClassName('startbox3')[0]

startXocDiaButton.addEventListener('mouseup', function () {
    anPhanTu([listOfGame, dialogBoxElment])
    
})
