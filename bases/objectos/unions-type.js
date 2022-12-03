"use strict";
(() => {
    let myCustomVariable = 'miguel';
    console.log(typeof myCustomVariable);
    myCustomVariable = 12;
    console.log(typeof myCustomVariable);
    myCustomVariable = { name: 'test', age: 25, powers: ['hola'] };
    console.log(typeof myCustomVariable);
})();
