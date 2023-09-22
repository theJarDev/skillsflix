

export const titleValidation = (value) => {
    if( value.length >= 5 && value.length <= 50 ) {
        return true;
    }else {
        return false;
    }
};

export const videoValidation = (value) => {
    if( value.includes('https://www.youtube.com') ) {
        return true;
    }else {
        return false;
    }
};

export const imageValidation = (value) => {
    if( value.includes('https://') ) {
        return true;
    }else {
        return false;
    }
};

export const categoryValidation = (value) => {
    if( value.length >= 3 ) {
        return true;
    }else {
        return false;
    }
};

export const descriptionValidation = (value) => {
    if( value.length >= 10 && value.length <= 100 ) {
        return true;
    }else {
        return false;
    }
};

export const idValidation = (value, data) => {
    if( !data.includes(value) && value.length >= 5 ) {
        return true;
    }else {
        return false;
    }
};