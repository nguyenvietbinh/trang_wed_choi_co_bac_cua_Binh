
let run = false


for (let i = 0; i <= 5; i++) {
    xocDiaInputElements[i].addEventListener('blur', function() {
        console.log('a')
    })
}
kiemTraTienCuocXocDia = function(listOfInput) {

}
daDatCuocChua = function (listToCheck) {
    for (let i in listToCheck) {
        if (listToCheck[i] !== '') {
            return true
        }
    }
    return false
}
kiemTraKieuDuLieu = function (variableToCheck, limmit) {
    if (!isNaN(variableToCheck)) {
        if (parseInt(variableToCheck) === 0) {
            alert('so tien khong hop le!')
            return false
        } else if (parseInt(variableToCheck) > limmit){
            alert('tien cuoc qua lon!')
            return false
        } else {
            return true
        }
    } else {
        alert('so tien khong hop le!')
        return false
    }
}