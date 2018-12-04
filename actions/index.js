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

export function updateList(list, pairings) {
    return {
        type: types.UPDATE_LIST,
        payload: {
            list,
            pairings
        }
    }
}

export function createSections(list, pairings) {
    let sectionsObject = {};
    for (let key in pairings) {
        const first_letter = key[0];
        sectionsObject = Object.assign(sectionsObject, { [first_letter]: [] });
        for (let i = 0; i < list.length; i++) {
            if (list[i][0] === first_letter) {
                Object.assign(sectionsObject, { [first_letter]: [...sectionsObject[first_letter], list[i]] });
            }
        }
    };
    let sectionsArray = [];
    for (let key in sectionsObject) {
        sectionsArray.push({ title: key, data: sectionsObject[key] });
    };

    return {
        type: types.CREATE_SECTIONS,
        payload: {
            sections: sectionsArray,
        }
    }
}