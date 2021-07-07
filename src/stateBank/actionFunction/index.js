export function depositAmount(amount) {
    return {
        type:"DEPOSIT",
        payload: amount 
    }
}
export function withdrawAmount(amount) {
    return {
        type:"WITHDRAW",
        payload: amount
    }
}
export function mulNumber() {
    return {
        type:"MULTIPLY"
    }
}
export function divNumber() {
    return {
        type:"DIVIDE"
    }
}