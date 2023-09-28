let cacDongXu

cacDongXu = document.querySelectorAll('.xu')


getRandomInRange = function(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}
randomCacDongXu = function () {
    let ans =  [getRandomInRange(0, 1), getRandomInRange(0, 1), getRandomInRange(0, 1) , getRandomInRange(0, 1)]
    return ans
}
getRandomPos = function () {
    x = getRandomInRange(0, 320)
    EF = 2*Math.floor(Math.sqrt(x * (320 - x)))
    y = getRandomInRange(0, EF)
    y = Math.floor((320 - EF)/2 + y)

    x = x + 89 - 17
    y = y + 89 - 22
    return [x, y]
}
chonCacDongXuDuocHienThi = function(lst) {
    ans = []
    if (lst[0] === 0) {
        hienThiPhanTu([cacDongXu[0]])
        ans.push(cacDongXu[0])
    } else {
        hienThiPhanTu([cacDongXu[1]])
        ans.push(cacDongXu[1])
    }
    if (lst[1] === 0) {
        hienThiPhanTu([cacDongXu[2]])
        ans.push(cacDongXu[2])
    } else {
        hienThiPhanTu([cacDongXu[3]])
        ans.push(cacDongXu[3])
    }
    if (lst[2] === 0) {
        hienThiPhanTu([cacDongXu[4]])
        ans.push(cacDongXu[4])
    } else {
        hienThiPhanTu([cacDongXu[5]])
        ans.push(cacDongXu[5])
    }
    if (lst[3] === 0) {
        hienThiPhanTu([cacDongXu[6]])
        ans.push(cacDongXu[6])
    } else {
        hienThiPhanTu([cacDongXu[7]])
        ans.push(cacDongXu[7])
    }
    return ans
}