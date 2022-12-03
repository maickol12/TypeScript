"use strict";
(() => {
    class Avenger {
        constructor(name = 'no power', power = 0) {
            this.name = name;
            this.power = power;
        }
    }
    class FlyingAvenger extends Avenger {
        constructor(name = 'no power', power = 0) {
            super(name, power);
            this.flying = true;
        }
    }
    const hulk = new Avenger('Miguel Angel', 1500);
    const flyingAvenger = new FlyingAvenger('Falcon', 578);
})();
