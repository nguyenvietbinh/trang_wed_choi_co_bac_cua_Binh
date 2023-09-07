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

let startXocDiaButton, cacOCuoc

startXocDiaButton = document.getElementsByClassName('startbox3')[0]
cacOCuoc = document.querySelector('.cacOCuoc')
console.log(cacOCuoc)
startXocDiaButton.addEventListener('mouseup', function () {
    anPhanTu([listOfGame, dialogBoxElment])
    hienThiPhanTu([cacOCuoc])
})
