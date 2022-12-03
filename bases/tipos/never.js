"use strict";
(() => {
    const abc = (msg) => {
        if (msg) {
            throw new Error(msg);
        }
        return 1;
    };
    abc('msg');
})();
