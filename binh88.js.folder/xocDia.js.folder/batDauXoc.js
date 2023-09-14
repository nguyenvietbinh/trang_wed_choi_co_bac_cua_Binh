let xocDiaInputs, xocDiaInputElements, dia,
    chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput
xocDiaInputs = [chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput]

xocDiaInputElements = document.getElementsByClassName('nhapTienCuocXocDia')
batDauXoc = document.querySelector('.batDauXoc')
dia = document.querySelector('.dia')

batDauXoc.addEventListener('mouseup', function() {
    if (kiemTraNguoiChoiDaDatCuocChua(xocDiaTienCuoc)) {
        anPhanTu([cacOCuoc, batDauXoc])
    } else {
        alert('tien cuoc khong hop le!')
    }
    hienThiPhanTu([dia])
})