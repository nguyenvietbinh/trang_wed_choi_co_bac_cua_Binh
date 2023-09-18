let xocDiaInputs, xocDiaInputElements, dia, xus, bat,
    chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput
xocDiaInputs = [chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput]

xocDiaInputElements = document.getElementsByClassName('nhapTienCuocXocDia')
batDauXoc = document.querySelector('.batDauXoc')
dia = document.querySelector('.dia')
xus = document.querySelector('.xus')
bat = document.querySelector('.bat')

batDauXoc.addEventListener('mouseup', function() {
    if (kiemTraNguoiChoiDaDatCuocChua(xocDiaTienCuoc)) {
        anPhanTu([cacOCuoc, batDauXoc])
        hienThiPhanTu([dia, xus, bat])
    } else {
        alert('tien cuoc khong hop le!')
    }
})