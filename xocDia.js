
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


var startXocDiaButton, dia, bat, xu1, xu2, xu3, xu4, listOfXu, xoc, cacOCuoc
startXocDiaButton = document.getElementsByClassName('startbox3')[0]
dia = document.getElementsByClassName('dia')[0]
bat = document.getElementsByClassName('bat')[0]
xu1 = document.querySelector('.xu1')
xu2 = document.querySelector('.xu2')
xu3 = document.querySelector('.xu3')
xu4 = document.querySelector('.xu4')
listOfXu = [xu1, xu2, xu3, xu4]
xoc = document.querySelector('.xoc')
cacOCuoc = document.querySelector('.cacOCuoc')



hienThiXu = function() {
    for (let i in listOfXu) {
        hienThiPhanTu([listOfXu[i]])
        a = Math.floor(Math.random() * 246) + 1 + 150
        listOfXu[i].style.left = `${a}px`
        b = Math.floor(Math.random() * 246) + 1 + 150
        listOfXu[i].style.top = `${b}px`
        sapNgua = Math.floor(Math.random()*2)
        if (sapNgua === 0) {
            listOfXu[i].style.backgroundColor = 'rgb(177,227,250)'
            listOfXu[i].innerHTML = 'N'
        } else {
            listOfXu[i].style.backgroundColor = 'rgb(186,224,183)'
            listOfXu[i].innerHTML = 'S'
        }
    }
}




startXocDiaButton.addEventListener('mouseup', function() {
    anPhanTu([dialogBoxElment, listOfGame])
    hienThiPhanTu([xoc, home, cacOCuoc])
})

xoc.addEventListener('mouseup', function() {
    anPhanTu([cacOCuoc, xoc])
    hienThiPhanTu([bat, dia])
    hienThiXu()
})
bat.addEventListener('mouseup', function() {
    anPhanTu([bat])
})

home.addEventListener('mouseup', function() {
    anPhanTu([bat, dia, home, xoc, cacOCuoc])
    hienThiPhanTu([listOfGame, dialogBoxElment])
})