
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
kiemTraTienCuoc = function (str, num) {
    if (!isNaN(str)) {
        if (parseInt(str) === 0) {
            alert('số tiền không hợp lệ, vui lòng nhập lại!')
            return false
        }
        if (str === '') {
            alert('bạn chưa nhập tiền cược!')
            return false
        }
        if (parseInt(str) > num) {
            if (num === 0) {
                alert('bạn đã hết tiền, vui lòng nạp thêm!')
                return false
            }
            alert('số tiền không, đủ vui lòng nạp thêm!')
            return false
        }
    } else if (str === 'all in') {
        if (num === 0) {
            alert('bạn đã hết tiền, vui lòng nạp thêm!')
            return false
        }
        return true
    } else {
        alert('bạn nhập sai, mời nhập lại!')
        return false
    }
    return true
}

var startXocDiaButton, dia, bat, xu1, xu2, xu3, xu4, listOfXu, xoc, cacOCuoc,
    xocDiaPlayagain, chanInput, leInput, _3s1nInput, _3n1sInput, _4sInput, _4nInput,
    xocDiaInput, soTien
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
xocDiaPlayagain = document.querySelector('.xocDiaPlayagain')
chanInput = document.querySelector('.chanInput')
leInput = document.querySelector('.leInput')
_3s1nInput = document.querySelector('._3s1nInput')
_3n1sInput = document.querySelector('._3n1sInput')
_4sInput = document.querySelector('._4sInput')
_4nInput = document.querySelector('._4nInput')
xocDiaInput = [chanInput, leInput, _3s1nInput, _3n1sInput, _4sInput, _4nInput]
soTien = document.querySelector('#soTien')
soTien = parseInt(soTien.textContent)



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
    console.log(soTien)
    if (soTien >= 1000) {
        anPhanTu([dialogBoxElment, listOfGame])
        hienThiPhanTu([xoc, home, cacOCuoc])
    } else {
        alert('bạn cần đạt 8000 để mở khoá xóc đĩa!')
    }
})


for (let i in xocDiaInput) {
    xocDiaInput[i].addEventListener('blur', function() {
        tienCuoc = xocDiaInput[i].textContent
        if (tienCuoc === '') {

        } else {
            console.log(123)
        }
    })
}


xoc.addEventListener('mouseup', function() {
    anPhanTu([cacOCuoc, xoc])
    hienThiPhanTu([bat, dia])
    hienThiXu()
})
xocDiaPlayagain.addEventListener('mouseup', function() {
    anPhanTu([xocDiaPlayagain, bat, dia])
    hienThiPhanTu([cacOCuoc, xoc])
})

bat.addEventListener('mouseup', function() {
    anPhanTu([bat])
    hienThiPhanTu([xocDiaPlayagain])
})

home.addEventListener('mouseup', function() {
    anPhanTu([bat, dia, home, xoc, cacOCuoc])
    hienThiPhanTu([listOfGame, dialogBoxElment])
})