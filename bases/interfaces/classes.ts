(() => {
    interface xmen{
        name: string;
        realName: string;
        mutantPower:(id:number) => string | undefined;
    }

    class Mutant implements xmen {
        public age: number = 0;
        public name: string = '';
        public realName: string = '';
       
        public mutantPower = (id:number) => {
            return this.name + ' '+ this.realName;
        };
    }
})();