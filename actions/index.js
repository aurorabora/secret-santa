import types from "./types";

/*********** Export Functions Here ***********/
export function createList(list, pairings) {
    let referenceList = [...list];
    for (key in pairings) {
        let randomNum = Math.floor(Math.random() * referenceList.length);
        while (key === referenceList[randomNum]) {
            randomNum = Math.floor(Math.random() * referenceList.length);
        }
        pairings[key] = referenceList[randomNum];
        referenceList.splice(randomNum, 1);
    }
    return {
        type: types.CREATE_LIST,
        payload: {
            list,
            pairings
        }
    }
}

export function updateList(pairings) {
    return {
        type: types.UPDATE_LIST,
        payload: {
            pairings
        }
    }
}