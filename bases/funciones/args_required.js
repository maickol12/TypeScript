"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('miguel', 'rodriguez');
    console.log({ name });
})();
