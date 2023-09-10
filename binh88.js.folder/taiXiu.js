let startTaiXiuButton, taiButton, xiuButton, circle, ss1, ss2, ss3, chams, winButton, loseButton, taiXiuPlayAgain, taiXiuInput, tienCuoc
startTaiXiuButton = document.getElementsByClassName('startbox')[0]
startBauCuaButton = document.getElementsByClassName('startbox2')[0]
taiButton = document.getElementsByClassName('tai')[0]
xiuButton = document.getElementsByClassName('xiu')[0] 
circle = document.getElementsByClassName('circle')[0]
ss1 = document.getElementsByClassName('sucsac1')[0]
ss2 = document.getElementsByClassName('sucsac2')[0]
ss3 = document.getElementsByClassName('sucsac3')[0]
chamsElement = document.getElementsByClassName('cham')
chams = Array.from(chamsElement)
winButton = document.getElementsByClassName('win')[0]
loseButton = document.getElementsByClassName('lose')[0]
taiXiuPlayAgain = document.getElementsByClassName('taiXiuPlayAgain')[0]
taiXiuInput = document.getElementsByClassName('taiXiuInput')[0]
hienThiSoTien = document.getElementsByClassName('hienThiSoTien')[0]
soTienElement = document.getElementById('soTien')
home = document.getElementsByClassName('home')[0]
var chams1, chams2, chams3
chams1 = chams.slice(0, 7)
chams2 = chams.slice(7, 14)
chams3 = chams.slice(14)
allCham = [chams1, chams2, chams3]


startTaiXiuButton.onmouseup = function () {
    hienThiPhanTu([taiButton, xiuButton, circle, hienThiSoTien, taiXiuInput, home])
    anPhanTu([dialogBoxElment, listOfGame])
    taiXiuInput.focus()
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


hienThiCacCham = function (arr, num) {
    let arrCacTruongHop = [
        [],
        [6],
        [1, 4],
        [0, 6, 5],
        [0, 2, 3, 5],
        [0, 2, 3, 5, 6],
        [0, 2, 3, 5, 1, 4]
    ]
    let a = arrCacTruongHop[num]
    for (let i in a) {
        arr[a[i]].style.display = 'block'
    }
}
hienThiSucSac = function (numbers) {
    for (let i in allCham) {
        hienThiCacCham(allCham[i], numbers[i])
    }
    ss1.style.backgroundColor = 'rgb(188, 192, 195)'
    ss2.style.backgroundColor = 'rgb(188, 192, 195)'
    ss3.style.backgroundColor = 'rgb(188, 192, 195)'
}
function tinhKetQua() {
    let a, b, c
    a = Math.floor(Math.random() * 6) + 1
    b = Math.floor(Math.random() * 6) + 1
    c = Math.floor(Math.random() * 6) + 1
    return [a, b, c]
}

tinhTien = function (boo, tc, st) {
    st -= tc
    if (boo) {
        st += (tc * 2 - Math.floor(tc / 100 * 2))
    }
    if (st < 0) {
        return 0
    }
    return st
}
var ketQua = tinhKetQua(), tongDiem = ketQua[0] + ketQua[1] + ketQua[2]
taiButton.addEventListener('mouseup', function () {
    soTien = document.querySelector('#soTien')
    soTien = parseInt(soTien.textContent)
    if (kiemTraTienCuoc(taiXiuInput.value, soTien)) {
        if (taiXiuInput.value === 'all in') {
            tienCuoc = soTien
        } else {
            tienCuoc = parseInt(taiXiuInput.value)
        }
        anPhanTu([taiButton, xiuButton, taiXiuInput, home])
        hienThiPhanTu([taiXiuPlayAgain])
        hienThiSucSac(ketQua)
        if (tongDiem >= 11) {
            hienThiPhanTu([winButton])
            player = true
            console.log(soTien)
            soTien = tinhTien(player, tienCuoc, soTien)
            console.log(tienCuoc)
            console.log(soTien)
        } else {
            hienThiPhanTu([loseButton])
            player = false
            console.log(soTien)
            soTien = tinhTien(player, tienCuoc, soTien)
            console.log(tienCuoc)
            console.log(soTien)
        }
        soTienElement.innerHTML = soTien
        ketQua = tinhKetQua()
        tongDiem = ketQua[0] + ketQua[1] + ketQua[2]
    }
})
xiuButton.addEventListener('mouseup', function () {
    soTien = document.querySelector('#soTien')
    soTien = parseInt(soTien.textContent)
    if (kiemTraTienCuoc(taiXiuInput.value, soTien)) {
        if (taiXiuInput.value === 'all in') {
            tienCuoc = soTien
        } else {
            tienCuoc = parseInt(taiXiuInput.value)
        }
        anPhanTu([taiButton, xiuButton, taiXiuInput, home])
        hienThiPhanTu([taiXiuPlayAgain])
        hienThiSucSac(ketQua)
        if (tongDiem <= 10) {
            hienThiPhanTu([winButton])
            player = true
            soTien = tinhTien(player, tienCuoc, soTien)
            console.log(tienCuoc)
            console.log(soTien)
        } else {
            hienThiPhanTu([loseButton])
            player = false
            soTien = tinhTien(player, tienCuoc, soTien)
            console.log(tienCuoc)
            console.log(soTien)
        }
        soTienElement.innerHTML = soTien
        ketQua = tinhKetQua()
        tongDiem = ketQua[0] + ketQua[1] + ketQua[2]
    }
})
taiXiuPlayAgain.addEventListener('mouseup', function () {
    hienThiPhanTu([taiButton, xiuButton, taiXiuInput, home])
    anPhanTu([taiXiuPlayAgain, winButton, loseButton])
    taiXiuInput.focus()
    for (let i in chams) {
        chams[i].style.display = 'none'
    }
    ss1.style.backgroundColor = 'rgb(13, 14, 59)'
    ss2.style.backgroundColor = 'rgb(13, 14, 59)'
    ss3.style.backgroundColor = 'rgb(13, 14, 59)'
})
home.addEventListener('mouseup', function () {
    anPhanTu([home, circle, taiButton, xiuButton, taiXiuInput])
    hienThiPhanTu([dialogBoxElment, listOfGame])
})