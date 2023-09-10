let xocDiaInputs, xocDiaInputElements, 
    chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput
xocDiaInputs = [chanInput, leInput, baDoInput, baTrangInput, bonDoInput, boTrangInput]

xocDiaInputElements = document.getElementsByClassName('nhapTienCuocXocDia')
batDauXoc = document.querySelector('.batDauXoc')

batDauXoc.addEventListener('mouseup', function() {
    for (let i = 0; i <= 5; i++) {
        xocDiaInputs[i] = xocDiaInputElements[i].value
    }
})