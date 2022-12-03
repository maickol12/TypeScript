(() => {

    interface Address {
        id:number,
        zip:string,
        city:string
    }

    interface Client {
        name: string;
        age?: number;
        address?:Address;
        getFullAddress: (id: string) => string | undefined;
    }


    const client: Client = {
        name:'Fernando',
        age:25,
        address: {
            id:123,
            zip:'176273',
            city:'apatz'
        },
        getFullAddress(id) {
            return this.address?.zip;
        },
    }; 

    const client2: Client = {
        name:'jose',
        age: 20,
        getFullAddress(id) {
            return this.address?.zip;
        },
    }
})();