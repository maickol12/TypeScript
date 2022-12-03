
(() => {
    const fullName = (firstName:string, ...restArgs: string[]):string => {
        return `${ firstName } ${ restArgs.join(' ') }`;
    }
    const superMan = fullName('Miguel','Angel','Rodriguez');

    console.log({superMan})
 })();