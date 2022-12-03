(() => {
    enum AudioLevel{
        min =1 , 
        medium, 
        max
    }

    const currentAudio: AudioLevel = AudioLevel.max;

    console.log(currentAudio);
})();