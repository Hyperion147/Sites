console.log("Javascript For Music App!!! (^_^)");

let currentSong = new Audio();

async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/song/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/song/")[1])
        }
    }

    return songs;

}

const playMusic = (track) => {
    currentSong.src = "/song/" + track
    currentSong.play()
    pause.src = "./svgs/playbtn.svg"
}

async function main() {
    let songs = await getSongs()

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> 

                            <img class="invert" src="./svgs/music.svg" alt="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="./svgs/playbtn.svg" alt="">
                            </div>
                            </li>`;
    }

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        });
    });

    play.addEventListener("click", () => {
        if(currentSong.paused){
            currentSong.play()
            play.src = "./svgs/pausebtn.svg"
        }
        else{
            currentSong.pause()
            pause.src = "./svgs/playbtn.svg"
        }
    })

}

main()
