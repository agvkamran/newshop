export const checkPasswordToUpperCase = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (pass[i].charCodeAt() >= 65 && pass[i].charCodeAt() <= 90) return true
    }
}

export const checkPasswordToSpecialSymbol = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if ((pass[i].charCodeAt() >= 33 && pass[i].charCodeAt() <= 47)
            || (pass[i].charCodeAt() >= 58 && pass[i].charCodeAt() <= 64)
            || (pass[i].charCodeAt() >= 91 && pass[i].charCodeAt() <= 96)
            || (pass[i].charCodeAt() >= 123 && pass[i].charCodeAt() <= 126)
        ) return true
    }
}

export const checkPasswordToNumber = (pass) => {
    for (let i = 0; i < pass.length; i++) {
        if (pass[i].charCodeAt() >= 48 && pass[i].charCodeAt() <= 57) return true
    }
}

export const correctName = (name) => {
    const idx = name.indexOf('@');
    name = name.slice(0, idx);
    return name;
}