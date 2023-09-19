let cacDongXuDuocHienThi

cacDongXuDuocHienThi = document.querySelectorAll('.xu')

random0va1 = function () {
    return Math.round(Math.random())
}
randomCacDongXu = function () {
    let ans =  [random0va1(), random0va1(), random0va1(), random0va1()]
    return ans
}