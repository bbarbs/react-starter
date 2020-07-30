/*export const deposit = (nr) => {
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
}*/

export const DEPOSIT_REQUESTED = 'DEPOSIT_REQUESTED';
export const WITHDRAW_REQUESTED = 'WITHDRAW_REQUESTED';
export const DEPOSIT_DONE = 'DEPOSIT_DONE';
export const WITHDRAW_DONE = 'WITHDRAW_DONE';

export const deposit = (nr) => {
    return {
        type: DEPOSIT_REQUESTED,
        payload: nr
    }
}

export const withdraw = (nr) => {
    return {
        type: WITHDRAW_REQUESTED,
        payload: nr
    }
}