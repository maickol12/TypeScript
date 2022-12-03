"use strict";
(() => {
    const fullName = (firstName, lastName, upperCase = false) => {
        if (upperCase)
            return (`${firstName} ${lastName || 'No last name'}`).toUpperCase();
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('miguel');
    console.log({ name });
})();
