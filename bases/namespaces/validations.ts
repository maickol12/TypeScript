namespace Validations {
    export const validateText = ( text: string ) => {
        return text.length > 3;
    }

    export const validateDate = ( fecha: Date ) => {
        return ( isNaN( fecha.valueOf() ) );
    }
}


console.log( Validations.validateDate('maickol') );