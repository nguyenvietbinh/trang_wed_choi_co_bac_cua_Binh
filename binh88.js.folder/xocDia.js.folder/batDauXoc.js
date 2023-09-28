let xocDiaInputs, xocDiaInputElements, dia, xus, bat, test, batDia,
    chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput
xocDiaInputs = [chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput]

xocDiaInputElements = document.getElementsByClassName('nhapTienCuocXocDia')
batDauXoc = document.querySelector('.batDauXoc')
dia = document.querySelector('.dia')
xus = document.querySelector('.xus')
bat = document.querySelector('.bat')
test = document.querySelectorAll('.test')
batDia = document.querySelector('.batDia')


batDauXoc.addEventListener('mouseup', function() {
    if (kiemTraNguoiChoiDaDatCuocChua(xocDiaTienCuoc)) {
        anPhanTu([cacOCuoc, batDauXoc])
        hienThiPhanTu([batDia])
        let answer = randomCacDongXu()
        cacDongXuDuocHienThi = chonCacDongXuDuocHienThi(answer)
        console.log(cacDongXuDuocHienThi)
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
