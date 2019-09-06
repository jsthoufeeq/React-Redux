import * as actions from './actionType';

console.log('coming inside action');
export const addCounter = () => ({
    type: actions.ADD,
    payload: 10
})

export const subCounter = () => ({
    type: actions.SUB,
    payload: 5
})

export const changeName = (text) => ({
    type: actions.CHANGE,
    payload: text
})
