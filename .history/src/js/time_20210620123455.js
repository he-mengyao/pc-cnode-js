function countTime(a) {
    let nowTime = new Date()
    let nowTimes = nowTime.getTime()
    let lastTimes = dayjs(a).valueOf()
    let time = nowTimes - lastTimes
    let seconds = time / 1000
    let minutes = time / 1000 / 60
    let hours = time / 1000 / 60 / 60
    let days = time / 1000 / 60 / 60 / 24
    let months = time / 1000 / 60 / 60 / 24 / 30
    let years = time / 1000 / 60 / 60 / 24 / 30 / 12
    let result = ''
    if (years >= 1) {
        result = `${Math.floor(years)}年前`
    } else if (months >= 1) {
        result = `${Math.floor(months)}月前`
    } else if (days >= 1) {
        result = `${Math.floor(days)}天前`
    } else if (hours >= 1) {
        result = `${Math.floor(hours)}小时前`
    } else if (minutes >= 1) {
        result = `${Math.floor(minutes)}分钟前`
    } else {
        result = `刚刚`
    }
    return result
}