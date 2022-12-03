
(() => {
    const fullName = (firstName: string,lastName?: string, upperCase: boolean = false):string => {
        if( upperCase )
            return (`${firstName} ${lastName || 'No last name' }`).toUpperCase();
      return `${firstName} ${lastName || 'No last name' }`
    }
    
    const name = fullName('miguel');
     
    console.log({name});
 })();