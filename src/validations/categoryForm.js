export const nameValidation = (value) => {
    if(value.length >= 3) {
        return true;
    }else{
        return false;
    }
};

export const descriptionValidation = (value) => {
    if(value.length >= 10 && value.length <= 100){
        return true;
    }else{
        return false;
    }
};

export const colorValidation = (value, data) => {
    if( !data.includes(value) ) {
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