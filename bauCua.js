useClassName = function (className) {
    return document.getElementsByClassName(className)
}
useId = function (id) {
    return document.getElementById(id)
}
var startBauCuaButton, startTaiXiuButton, tu1den6, bton1, bton2, bton3, bton4, bton5, bton6, cricle,
    hienThiSoTien, bauCuaInput, home, soTien, ss1, ss2, ss3, chams
startBauCuaButton = useClassName('startbox2')[0]
tu1den6 = useClassName('tu1den6')[0]
bton1 = useId('button1')
bton2 = useId('button2')
bton3 = useId('button3')
bton4 = useId('button4')
bton5 = useId('button5')
bton6 = useId('button6')
circle = document.getElementsByClassName('circle')[0]
hienThiSoTien = document.getElementsByClassName('hienThiSoTien')[0]
bauCuaInput = document.getElementsByClassName('bauCuaInput')[0]
home = document.getElementsByClassName('home')[0]
bauCuaPlayAgain = document.getElementsByClassName('bauCuaPlayAgain')[0]


var buttons = [bton1, bton2, bton3, bton4, bton5, bton6], ans
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

startBauCuaButton.addEventListener('mouseup', function () {
    anPhanTu([startBauCuaButton, startTaiXiuButton])
    hienThiPhanTu([tu1den6, circle, hienThiSoTien, home])
})


function tinhKetQua() {
    let a, b, c
    a = Math.floor(Math.random() * 6) + 1
    b = Math.floor(Math.random() * 6) + 1
    c = Math.floor(Math.random() * 6) + 1
    return [a, b, c]
}

ans = tinhKetQua()
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

var onTarget = 0
let playerLst = []
for (let i in buttons) {
    buttons[i].addEventListener('mouseup', function () {
        soTien = document.querySelector('#soTien')
        soTien = parseInt(soTien.textContent)
        playerLst.push(buttons[i])
        player = parseInt(i) + 1
        for (let i in ans) {
            if (player === ans[i]) {
                onTarget += 1
            }
        }
        bauCuaInput.focus()
        console.log(player)
    })
}
tinhTien2 = function (ontg, tc, st) {
    if (ontg === 0) {
        st -= tc
    } else {
        st += tc * ontg
    }
    return st
}
bauCuaInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        tienCuoc = bauCuaInput.value
        console.log(tienCuoc)
        if (kiemTraTienCuoc(tienCuoc, soTien)) {
            if (tienCuoc === 'all in') {
                tienCuoc = soTien
            }
            hienThiSucSac(ans)
            soTien = tinhTien2(onTarget, tienCuoc, soTien)
            anPhanTu([bauCuaInput])
            hienThiPhanTu([bauCuaPlayAgain, home])
            console.log(soTien)
            soTienElement.innerHTML = soTien
            onTarget = 0
            ans = tinhKetQua()
        }
    }
})
bauCuaPlayAgain.addEventListener('mouseup', function () {
    anPhanTu([bauCuaPlayAgain])
    hienThiPhanTu([tu1den6])
    for (let i in chams) {
        chams[i].style.display = 'none'
    }
    ss1.style.backgroundColor = 'rgb(59, 57, 57)'
    ss2.style.backgroundColor = 'rgb(59, 57, 57)'
    ss3.style.backgroundColor = 'rgb(59, 57, 57)'
})

home.addEventListener('mouseup', function () {
    anPhanTu([home, circle, bauCuaInput, hienThiSoTien, tu1den6, bauCuaPlayAgain])
    hienThiPhanTu([startTaiXiuButton, startBauCuaButton])
    for (let i in chams) {
        chams[i].style.display = 'none'
    }
    ss1.style.backgroundColor = 'rgb(59, 57, 57)'
    ss2.style.backgroundColor = 'rgb(59, 57, 57)'
    ss3.style.backgroundColor = 'rgb(59, 57, 57)'
})
