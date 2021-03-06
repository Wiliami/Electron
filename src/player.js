let player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector(".audio"),
    audioData: {
        title: "Como eu me preparei para chegar até aqui!",
        artist: "Wiliamis Oliveira",
        file: "files/humberto.mp4"
    },

    start () {
        this.currentAudio = this.audioData[0];
        //this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
        //this.title.innerText = this.currentAudio.title;
        //this.artist.innerText = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);

        this.audio.addEventListener("ended", () => {
        this.audio.src = path(this.audioData[1].file);
        this.audio.play();
        });
        console.log(this.start)
    },
};