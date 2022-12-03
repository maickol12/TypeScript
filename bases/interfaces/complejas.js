"use strict";
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: '176273',
            city: 'apatz'
        },
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.zip;
        },
    };
    const client2 = {
        name: 'jose',
        age: 20,
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.zip;
        },
    };
})();
