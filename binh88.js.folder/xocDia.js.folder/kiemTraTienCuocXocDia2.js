

kiemTraTongSoTienCuoc = function(lst, limmit) {
    tong = 0
    for (let i of lst) {
        if (i === '') {
            i = 0
        }
        tong+=i
    }
    if ((tong === 0) || (tong > limmit)) {
        return false
    }
    return true
}

for (let i = 0; i <= 5; i++) {
    xocDiaInputElements[i].addEventListener('input', function(e) {
        inputValue = e.target.value
        numbericValue = parseInt(inputValue, 10)
        if (isNaN(numbericValue)) {
            e.target.value = ''
            xocDiaInputs[i] = ''
        } else {
            e.target.value = numbericValue
            xocDiaInputs[i] = numbericValue
        }
    })
}