(() => {
    class Avenger {
        name:string;
        power:number;
        constructor(name: string = 'no power',power: number = 0){
            this.name = name;
            this.power = power;
        }
    } 

    class FlyingAvenger extends Avenger{
        flying:boolean;


        constructor(name: string = 'no power',power: number = 0){
            super(name,power);
            this.flying = true;
        }

    }

    const hulk          = new Avenger( 'Miguel Angel',1500 );
    const flyingAvenger = new FlyingAvenger( 'Falcon',578 );

})();