(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'DR Strange';
    console.log( (avenger as string).charAt(0) );
    avenger = 150.2312;
    console.log( (avenger as number).toFixed(2) );

    console.log(exists);
    console.log(power);
})();