(() => {
    const abc = (msg:string):(never | number) => {
        if(msg){
            throw new Error(msg);
        }
        return 1;
    }

    abc('msg');
})();
