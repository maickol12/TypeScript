

(() => {

    type Hero = {
        name: string,
        age: number, 
        powers:string[], 
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'miguel';

    console.log(typeof myCustomVariable);

    myCustomVariable = 12;

    console.log(typeof myCustomVariable);

    myCustomVariable = {name:'test',age:25,powers:['hola']};

    console.log(typeof myCustomVariable);

 })();