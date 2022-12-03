(() => {
    const NOMBRE: string = 'Miguel';

    const heroes = {
        a:1,
        b:2
    };

    function getName(){
        console.log('viejo getname');
    }

    heroes.b = 3;

    getName();
})();