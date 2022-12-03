"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superMan = fullName('Miguel', 'Angel', 'Rodriguez');
    console.log({ superMan });
})();
