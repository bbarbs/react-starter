export const deposit = (nr) => {
    return {
        type: 'DEPOSIT',
        payload: nr
    }
}

export const withdraw = (nr) => {
    return {
        type: 'WITHDRAW',
        payload: nr
    }
}