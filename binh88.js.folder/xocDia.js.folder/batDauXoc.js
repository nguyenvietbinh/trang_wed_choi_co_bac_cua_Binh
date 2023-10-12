let xocDiaInputs, xocDiaInputElements, dia, xus, bat, batDia, answer, xocDiaPlayAgain,
    chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput, cacDongXuDuocHienThi
    xocDiaInputs = ['', '', '', '', '', '']

xocDiaInputElements = document.querySelectorAll('.nhapTienCuocXocDia')
batDauXoc = document.querySelector('.batDauXoc')
dia = document.querySelector('.dia')
xus = document.querySelector('.xus')
bat = document.querySelector('.bat')
batDia = document.querySelector('.batDia')
xocDiaPlayAgain = document.querySelector('.xocDiaPlayAgain')

batDauXoc.addEventListener('mouseup', function() {
    if (soTien === 0) {
        alert('ban da het tien')
    } else{
        if (kiemTraTongSoTienCuoc(xocDiaInputs, soTien)) {
            soTien -= sumOfList(xocDiaInputs)
            soTienElement.innerHTML = soTien
            anPhanTu([cacOCuoc, batDauXoc])
            hienThiPhanTu([batDia, bat])
            answer = randomCacDongXu()
            cacDongXuDuocHienThi = chonCacDongXuDuocHienThi(answer)
            for (let i of cacDongXuDuocHienThi) {
                pos = getRandomPos()
                i.style.display = 'block'
                i.style.left = `${pos[0]}px`
                i.style.top = `${pos[1]}px`
                gocNgauNhien = getRandomInRange(0, 360)
                i.style.transform = `rotate(${gocNgauNhien}deg)`
            }
        } else {
            alert('tien cuoc khong hop le!')
        }
    }
})