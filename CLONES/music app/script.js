console.log("Javascript For Music App!!! (^_^)");

let currentSong = new Audio();
let songs;
let currFolder;

function convertSecondsToTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:5501/${currFolder}/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${currFolder}/`)[1])
        }
    }

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
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
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        });
    });

}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "./svgs/pausebtn.svg"
    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:5501/song/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    console.log(anchors);
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if (e.href.includes("/song")) {
            console.log(e.href)
            let a = await fetch(`http://127.0.0.1:5501/song/${folder}/info.json`)
            let response = await a.json()
            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="ncs" class="card">
            <div class="playButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
                    fill="none" class="injected-svg" data-src="/icons/play-circle-stroke-sharp.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
                    <circle cx="12" cy="12" r="12" stroke-width="1.5" style="fill: rgb(0, 255, 0);">
                    </circle>
                    <path d="M9.5 16V8L16 12L9.5 16Z" stroke="#000000" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
            <img class="rounded" src="/song/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }
}

async function main() {
    await getSongs("song/ncs")
    playMusic(songs[0], true)

    displayAlbums()

    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        });
    });

    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "./svgs/pausebtn.svg"
        }
        else {
            currentSong.pause()
            play.src = "./svgs/playbtn.svg"
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerHTML = `${convertSecondsToTime(currentSong.currentTime)}/${convertSecondsToTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        let changeInTime = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = changeInTime + "%"
        currentSong.currentTime = ((currentSong.duration) * changeInTime) / 100
    });

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    });

    prev.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0)
            playMusic(songs[index - 1])
    });

    next.addEventListener("click", () => {
        currentSong.pause()
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length)
            playMusic(songs[index + 1])
    });

    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (vol) => {
        currentSong.volume = parseInt(vol.target.value) / 100
    });

    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            songs = await getSongs(`song/${item.currentTarget.dataset.folder}`)
        })
    })

}

main()
