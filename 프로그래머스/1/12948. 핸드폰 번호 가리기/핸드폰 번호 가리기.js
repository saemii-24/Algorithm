function solution(phone_number) {
    let num = phone_number.length - 4
    return '*'.repeat(num) + phone_number.slice(-4)
}