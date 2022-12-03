"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avenger = {
        nick: 'Miguel Angel',
        ironman: 'Jose',
        vision: 'Pedro',
        activos: true,
        poder: 1500
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log({ ironman, resto });
    };
    printAvenger(avenger);
    const avengerArr = ['Cap. America', true, 150.15];
    const [capi, ironman, seriaUnNumero] = avengerArr;
    console.log({ capi, ironman });
    for (const avenger of avengerArr) {
        console.log(avenger);
    }
})();
