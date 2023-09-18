
let run 

kiemTraKieuDuLieu = function (variableToCheck, limmit) {
    if (variableToCheck === '') {
        return true
    }
    if (!isNaN(variableToCheck)) {
        if (parseInt(variableToCheck) === 0) {
            return false
        } else if (parseInt(variableToCheck) > limmit){
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}
kiemTraNguoiChoiDaDatCuocChua = function(lstToCheck) {
    let ans = true, d = 0
    for (let i in lstToCheck) {
        if (isNaN(lstToCheck[i])) {
            ans = false
        } else if (lstToCheck[i] === 0) {
            d = d + 1
        } else if (!kiemTraKieuDuLieu(lstToCheck[i], soTienToDisplay)) {
            ans = false
        }
    }
    if (d === 6) {
        ans = false
    }
    return ans
}
let soTienToDisplay = soTien, chanTienCuoc = 0, leTienCuoc = 0, baDoTienCuoc = 0, baTrangTienCuoc = 0,
    bonDoTienCuoc = 0, bonTrangTienCuoc = 0, xocDiaTienCuoc = [chanTienCuoc, leTienCuoc, baDoTienCuoc,
    baTrangTienCuoc, bonDoTienCuoc, bonTrangTienCuoc]

xocDiaInputElements[0].addEventListener('blur', function() {
    let tongSoTienCuocXocDia = 0
    xocDiaTienCuoc[0] = this.value
    if (kiemTraKieuDuLieu(xocDiaTienCuoc[0], soTienToDisplay)) {
        if (xocDiaTienCuoc[0] === '') {
            xocDiaTienCuoc[0] = 0
        }
        for (let i in xocDiaTienCuoc) {
            tongSoTienCuocXocDia = tongSoTienCuocXocDia + parseInt(xocDiaTienCuoc[i])
        }
        soTienToDisplay = soTien - tongSoTienCuocXocDia
        soTienElement.innerHTML = soTienToDisplay
        this.style.border = '1px solid black'
    } else {
        this.focus()
        this.style.border = '2px solid red'
    }
})
xocDiaInputElements[1].addEventListener('blur', function() {
    let tongSoTienCuocXocDia = 0
    xocDiaTienCuoc[1] = this.value
    if (kiemTraKieuDuLieu(xocDiaTienCuoc[1], soTienToDisplay)) {
        if (xocDiaTienCuoc[1] === '') {
            xocDiaTienCuoc[1] = 0
        }
        for (let i in xocDiaTienCuoc) {
            tongSoTienCuocXocDia = tongSoTienCuocXocDia + parseInt(xocDiaTienCuoc[i])
        }
        soTienToDisplay = soTien - tongSoTienCuocXocDia
        soTienElement.innerHTML = soTienToDisplay
        this.style.border = '1px solid black'
    } else {
        this.focus()
        this.style.border = '2px solid red'
    }
})
xocDiaInputElements[2].addEventListener('blur', function() {
    let tongSoTienCuocXocDia = 0
    xocDiaTienCuoc[2] = this.value
    if (kiemTraKieuDuLieu(xocDiaTienCuoc[2], soTienToDisplay)) {
        if (xocDiaTienCuoc[2] === '') {
            xocDiaTienCuoc[2] = 0
        }
        for (let i in xocDiaTienCuoc) {
            tongSoTienCuocXocDia = tongSoTienCuocXocDia + parseInt(xocDiaTienCuoc[i])
        }
        soTienToDisplay = soTien - tongSoTienCuocXocDia
        soTienElement.innerHTML = soTienToDisplay
        this.style.border = '1px solid black'
    } else {
        this.focus()
        this.style.border = '2px solid red'
    }
})
xocDiaInputElements[3].addEventListener('blur', function() {
    let tongSoTienCuocXocDia = 0
    xocDiaTienCuoc[3] = this.value
    if (kiemTraKieuDuLieu(xocDiaTienCuoc[3], soTienToDisplay)) {
        if (xocDiaTienCuoc[3] === '') {
            xocDiaTienCuoc[3] = 0
        }
        for (let i in xocDiaTienCuoc) {
            tongSoTienCuocXocDia = tongSoTienCuocXocDia + parseInt(xocDiaTienCuoc[i])
        }
        soTienToDisplay = soTien - tongSoTienCuocXocDia
        soTienElement.innerHTML = soTienToDisplay
        this.style.border = '1px solid black'
    } else {
        this.focus()
        this.style.border = '2px solid red'
    }
})
xocDiaInputElements[4].addEventListener('blur', function() {
    let tongSoTienCuocXocDia = 0
    xocDiaTienCuoc[4] = this.value
    if (kiemTraKieuDuLieu(xocDiaTienCuoc[4], soTienToDisplay)) {
        if (xocDiaTienCuoc[4] === '') {
            xocDiaTienCuoc[4] = 0
        }
        for (let i in xocDiaTienCuoc) {
            tongSoTienCuocXocDia = tongSoTienCuocXocDia + parseInt(xocDiaTienCuoc[i])
        }
        soTienToDisplay = soTien - tongSoTienCuocXocDia
        soTienElement.innerHTML = soTienToDisplay
        this.style.border = '1px solid black'
    } else {
        this.focus()
        this.style.border = '2px solid red'
    }
})
xocDiaInputElements[5].addEventListener('blur', function() {
    let tongSoTienCuocXocDia = 0
    xocDiaTienCuoc[5] = this.value
    if (kiemTraKieuDuLieu(xocDiaTienCuoc[5], soTienToDisplay)) {
        if (xocDiaTienCuoc[5] === '') {
            xocDiaTienCuoc[5] = 0
        }
        for (let i in xocDiaTienCuoc) {
            tongSoTienCuocXocDia = tongSoTienCuocXocDia + parseInt(xocDiaTienCuoc[i])
        }
        soTienToDisplay = soTien - tongSoTienCuocXocDia
        soTienElement.innerHTML = soTienToDisplay
        this.style.border = '1px solid black'
    } else {
        this.focus()
        this.style.border = '2px solid red'
    }
})