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
xuLiSuKienChonSo = function () {
    if (!isViolet) {
        this.style.backgroundColor = 'violet'
        isViolet = true
    } else if (isViolet) {
        this.style.backgroundColor = 'rgb(228, 155, 228)'
        isViolet = false
    }
}

function tinhKetQua() {
    let a, b, c
    a = Math.floor(Math.random() * 6) + 1
    b = Math.floor(Math.random() * 6) + 1
    c = Math.floor(Math.random() * 6) + 1
    return [a, b, c]
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


let tu1den6, bton1, bton2, bton3, bton4, bton5, bton6, bauCuaInput



startBauCuaButton = document.getElementsByClassName('startbox2')[0]
startTaiXiuButton = document.getElementsByClassName('startbox')[0]
circle = document.getElementsByClassName('circle')[0]
tu1den6 = document.getElementsByClassName('tu1den6')[0]
bauCuaInput = document.getElementsByClassName('bauCuaInput')[0]
bton1 = document.getElementById('button1')
bton2 = document.getElementById('button2')
bton3 = document.getElementById('button3')
bton4 = document.getElementById('button4')
bton5 = document.getElementById('button5')
bton6 = document.getElementById('button6')

let btons = [bton1, bton2, bton3, bton4, bton5, bton6]


startBauCuaButton.addEventListener('mouseup', function () {
    anPhanTu([startBauCuaButton, startTaiXiuButton])
    hienThiPhanTu([circle, tu1den6, bauCuaInput])
})

for (let i in btons) {
    var isViolet = false
    btons[i].addEventListener('muoseup', xuLiSuKienChonSo)
}
bauCuaInput.addEventListener('keydown', function () {
    if (event.keyCode === 13) {
        console.log('123')
        hienThiSucSac(tinhKetQua())

    }
})
