"use strict";
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realName = '';
            this.mutantPower = (id) => {
                return this.name + ' ' + this.realName;
            };
        }
    }
})();
