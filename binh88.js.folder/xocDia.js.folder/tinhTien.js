demSoMatDo = function(lst) {
    dem = 0
    for (let i of lst) {
        if (i === 0) {
            dem+=1
        }
    }
    return dem
}

tinhTienCuocChan = function(tienCuoc, numberOfRed) {
    if (tienCuoc === 0) {
        return 0
    }
    if (numberOfRed === 0 || numberOfRed === 2 || numberOfRed === 4) {
        tienCuoc = Math.floor(tienCuoc*0.98)
        return tienCuoc
    }else {
        return 0
    }
}
tinhTienCuocLe = function(tienCuoc, numberOfRed) {
    if (tienCuoc === 0) {
        return 0
    }
    if (numberOfRed === 1 || numberOfRed === 3) {
        tienCuoc = Math.floor(tienCuoc*0.98)
        return tienCuoc
    }else {
        return 0
    }
}
tinhTienCuocBaDo = function(tienCuoc, numberOfRed) {
    if (tienCuoc === 0) {
        return 0
    }
    if (numberOfRed === 3) {
        tienCuoc = Math.floor(tienCuoc*2.6)
        return tienCuoc
    }else {
        return 0
    }
}
tinhTienCuocBaTrang = function(tienCuoc, numberOfRed) {
    if (tienCuoc === 0) {
        return 0
    }
    if (numberOfRed === 1) {
        tienCuoc = Math.floor(tienCuoc*2.6)
        return tienCuoc
    }else {
        return 0
    }
}
tinhTienCuocBonDo = function(tienCuoc, numberOfRed) {
    if (tienCuoc === 0) {
        return 0
    }
    if (numberOfRed === 4) {
        tienCuoc = Math.floor(tienCuoc*12)
        return tienCuoc
    }else {
        return 0
    }
}
tinhTienCuocBonTrang = function(tienCuoc, numberOfRed) {
    if (tienCuoc === 0) {
        return 0
    }
    if (numberOfRed === 0) {
        tienCuoc = Math.floor(tienCuoc*12)
        return tienCuoc
    }else {
        return 0
    }
}
batDauXoc = document.querySelector('.batDauXoc')

bat.addEventListener('mouseup', function() {
    numberOfRed = demSoMatDo(answer)
    tienThuong = 0
    tienThuong += tinhTienCuocChan(xocDiaInputs[0], numberOfRed)
    tienThuong += tinhTienCuocLe(xocDiaInputs[1], numberOfRed)
    tienThuong += tinhTienCuocBaDo(xocDiaInputs[2], numberOfRed)
    tienThuong += tinhTienCuocBaTrang(xocDiaInputs[3], numberOfRed)
    tienThuong += tinhTienCuocBonDo(xocDiaInputs[4], numberOfRed)
    tienThuong += tinhTienCuocBonTrang(xocDiaInputs[5], numberOfRed)
    soTien += tienThuong
    soTienElement.innerHTML = soTien
    hienThiPhanTu([xocDiaPlayAgain])
})
xocDiaPlayAgain.addEventListener('click', function() {
    anPhanTu([xocDiaPlayAgain, batDia])
    hienThiPhanTu([cacOCuoc, batDauXoc])
    for (let i of xocDiaInputElements) {
        i.value = ''
    }
    bat.style.transform = `translate(${toaDoBanDauX}px, ${toaDoBanDauY}px)`
    for (let i of cacDongXuDuocHienThi) [
        anPhanTu([i])
    ]
    cacDongXuDuocHienThi = []
    xocDiaInputs = ['', '', '', '', '', '']
})

