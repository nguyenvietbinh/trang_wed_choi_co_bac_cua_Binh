
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


var startXocDiaButton, dia, bat, xu1, xu2, xu3, xu4, listOfXu, xoc
startXocDiaButton = document.getElementsByClassName('startbox3')[0]
dia = document.getElementsByClassName('dia')[0]
bat = document.getElementsByClassName('bat')[0]
xu1 = document.querySelector('.xu1')
xu2 = document.querySelector('.xu2')
xu3 = document.querySelector('.xu3')
xu4 = document.querySelector('.xu4')
listOfXu = [xu1, xu2, xu3, xu4]
xoc = document.getElementsByClassName('xoc')[0]


var diaRect = dia.getBoundingClientRect(), centerX = diaRect.left + 300, centerY = 300

hienThiXu = function() {
    for (let i in listOfXu) {
        hienThiPhanTu([listOfXu[i]])
        a = Math.floor(Math.random() * 285) + 1 + 150
        console.log(a)
        listOfXu[i].style.left = `${a}px`
        b = Math.floor(Math.random() * 285) + 1 + 150
        console.log(b)
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
    hienThiPhanTu([dia, bat, home, xoc])
})

xoc.addEventListener('mouseup', function() {
    console.log('123')
    anPhanTu([bat])
    hienThiXu()
})


home.addEventListener('mouseup', function() {
    anPhanTu([bat, dia, home, xoc])
    hienThiPhanTu([listOfGame, dialogBoxElment])
})
