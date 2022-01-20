window.player = {
    cover: document.querySelector(),
    title: document.querySelector(),
    artist: document.querySelector(),
    audio: document.querySelector(),
    data: {
        title: "",
        artist: "",
        cover: "",
        file: ""
    },

    start () {
        this.cover.style.background = ``;
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artist;
        this.audio.src = this.data.file;
    }
};