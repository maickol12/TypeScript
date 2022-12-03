(() => {

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activos: boolean;
        poder: number;
    }

    const avenger:Avenger = {
        nick:'Miguel Angel',
        ironman:'Jose',
        vision:'Pedro',
        activos: true,
        poder:1500
    };

    const printAvenger = ( { ironman,...resto }:Avenger ) => {
        console.log({ironman,resto});
    }

    printAvenger(avenger);

    const avengerArr: [string,boolean,number] = ['Cap. America',true,150.15];

    const [capi,ironman,seriaUnNumero] = avengerArr;

    console.log({capi,ironman});

    for(const avenger of avengerArr){
        console.log(avenger);
    }
    
})();