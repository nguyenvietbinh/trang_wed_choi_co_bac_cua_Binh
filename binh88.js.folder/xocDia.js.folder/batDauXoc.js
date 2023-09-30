let xocDiaInputs, xocDiaInputElements, dia, xus, bat, test, batDia, answer, 
    chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput
xocDiaInputs = [chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput]

xocDiaInputElements = document.getElementsByClassName('nhapTienCuocXocDia')
batDauXoc = document.querySelector('.batDauXoc')
dia = document.querySelector('.dia')
xus = document.querySelector('.xus')
bat = document.querySelector('.bat')
batDia = document.querySelector('.batDia')


batDauXoc.addEventListener('mouseup', function() {
    if (kiemTraNguoiChoiDaDatCuocChua(xocDiaTienCuoc)) {
        anPhanTu([cacOCuoc, batDauXoc])
        hienThiPhanTu([batDia, bat])
        answer = randomCacDongXu()
        test()
        cacDongXuDuocHienThi = chonCacDongXuDuocHienThi(answer)
        for (let i of cacDongXuDuocHienThi) {
            let ans = getRandomPos()
            i.style.display = 'block'
            i.style.left = `${ans[0]}px`
            i.style.top = `${ans[1]}px`
        }
    } else {
        alert('tien cuoc khong hop le!')
    }
})