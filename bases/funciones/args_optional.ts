
(() => {
    const fullName = (firstName: string,lastName?: string):string => {
      return `${firstName} ${lastName || 'No last name' }`
    }
    
    const name = fullName('miguel');
     
    console.log({name});
 })();