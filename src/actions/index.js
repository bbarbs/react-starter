export const DEPOSIT_REQUESTED = 'DEPOSIT_REQUESTED';
export const WITHDRAW_REQUESTED = 'WITHDRAW_REQUESTED';
export const DEPOSIT_DONE = 'DEPOSIT_DONE';
export const WITHDRAW_DONE = 'WITHDRAW_DONE';

export const deposit = (amount) => {
    return {
        type: DEPOSIT_REQUESTED,
        payload: amount
    }
}

export const withdraw = (amount) => {
    return {
        type: WITHDRAW_REQUESTED,
        payload: amount
    }
}