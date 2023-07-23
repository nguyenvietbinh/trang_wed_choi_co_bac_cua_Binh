useClassName = function (className) {
    return document.getElementsByClassName(className)
}
useId = function (id) {
    return document.getElementById(id)
}
var startBauCuaButton, startTaiXiuButton, tu1den6, bton1, bton2, bton3, bton4, bton5, bton6, cricle,
    hienThiSoTien, bauCuaInput, home, soTien, ss1, ss2, ss3, chams, confirmElement, runElement
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
confirmElement = document.getElementsByClassName('bauCuaConfirm')[0]
runElement = document.getElementsByClassName('bauCuaRun')[0]


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
    hienThiPhanTu([tu1den6, circle, hienThiSoTien, home, confirmElement])
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

tinhTien2 = function (playerL, answer, tc, st) {
    for (let i in playerL) {
        if (!answer.includes(playerL[i])) {
            st -= tc
        } else {
            for (let j in answer) {
                if (playerL[i] === answer[j]) {
                    st += tc
                }
            }
        }
    }
    if (st < 0) {
        return 0
    }
    return st
}
console.log(tinhTien2([1, 2, 3, 4, 5, 6], ans, 1, 10))
console.log(ans)


let playerLst = []
for (let i in buttons) {
    buttons[i].addEventListener('click', function () {
        soTien = document.querySelector('#soTien')
        soTien = parseInt(soTien.textContent)
        player = parseInt(i) + 1
        hienThiPhanTu([confirmElement])
        if (!playerLst.includes(player)) {
            playerLst.push(player)
            buttons[i].style.backgroundColor = 'rgb(186,224,183)'
        } else {
            buttons[i].style.backgroundColor = 'rgb(177,227,250)'
            indexToRemove = playerLst.indexOf(player)
            playerLst.splice(indexToRemove, 1)
        }
    })
}

confirmElement.addEventListener('mouseup', function () {
    if (playerLst.length === 0) {
        alert('bạn chưa đặt!')
    } else {
        anPhanTu([confirmElement, tu1den6, home])
        hienThiPhanTu([bauCuaInput, runElement])
        bauCuaInput.focus()
    }
})
runElement.addEventListener('mouseup', function() {
    tienCuoc = bauCuaInput.value
    if (kiemTraTienCuoc(tienCuoc, soTien)) {
        if (tienCuoc === 'all in') {
            tienCuoc = soTien
        }
        hienThiSucSac(ans)
        soTien = tinhTien2(playerLst, ans, parseInt(tienCuoc), soTien)
        anPhanTu([bauCuaInput, runElement])
        hienThiPhanTu([bauCuaPlayAgain, home])
        console.log(soTien)
        soTienElement.innerHTML = soTien
        ans = tinhKetQua()
    }
})

bauCuaInput.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        tienCuoc = bauCuaInput.value
        if (kiemTraTienCuoc(tienCuoc, soTien)) {
            if (tienCuoc === 'all in') {
                tienCuoc = soTien
            }
            hienThiSucSac(ans)
            soTien = tinhTien2(playerLst, ans, parseInt(tienCuoc), soTien)
            anPhanTu([bauCuaInput, runElement])
            hienThiPhanTu([bauCuaPlayAgain, home])
            console.log(soTien)
            soTienElement.innerHTML = soTien
            ans = tinhKetQua()
        }
    }
})
bauCuaPlayAgain.addEventListener('mouseup', function () {
    anPhanTu([bauCuaPlayAgain])
    hienThiPhanTu([tu1den6, confirmElement])
    for (let i in chams) {
        chams[i].style.display = 'none'
    }
    ss1.style.backgroundColor = 'rgb(59, 57, 57)'
    ss2.style.backgroundColor = 'rgb(59, 57, 57)'
    ss3.style.backgroundColor = 'rgb(59, 57, 57)'
    playerLst = []
    for (let i in buttons) {
        buttons[i].style.backgroundColor = 'rgb(177,227,250)'
    }
})

home.addEventListener('mouseup', function () {
    anPhanTu([home, circle, bauCuaInput, tu1den6, bauCuaPlayAgain, confirmElement])
    hienThiPhanTu([startTaiXiuButton, startBauCuaButton])
    for (let i in chams) {
        chams[i].style.display = 'none'
    }
    ss1.style.backgroundColor = 'rgb(59, 57, 57)'
    ss2.style.backgroundColor = 'rgb(59, 57, 57)'
    ss3.style.backgroundColor = 'rgb(59, 57, 57)'
})
