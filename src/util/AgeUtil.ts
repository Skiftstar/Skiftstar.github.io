export const getAge = () => {
    var today = new Date();
    var birthDate = new Date("2002/09/23");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const getCurrentYear = () => {
    var today = new Date();
    return today.getFullYear()
}