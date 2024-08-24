console.log("Javascript For Music App!!! (^_^)");

let currentSong = new Audio();

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

const playMusic = (track, pause = false) => {
    currentSong.src = "/song/" + track
    if(!pause){
        currentSong.play()
        play.src = "./svgs/pausebtn.svg"
    }
    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songTime").innerHTML = "00:00 / 00:00"
}

async function main() {
    let songs = await getSongs()
    playMusic(songs[1], true)

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
            play.src = "./svgs/playbtn.svg"
        }
    });

    currentSong.addEventListener("timeupdate", () => {
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songTime").innerHTML = `${convertSecondsToTime(currentSong.currentTime)}/${convertSecondsToTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    });

    document.querySelector(".seekbar").addEventListener("click", e => {
        let changeInTime = (e.offsetX/e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = changeInTime + "%"
        currentSong.currentTime = ((currentSong.duration) * changeInTime) / 100
    });

    document.querySelector(".hamburger").addEventListener("click", () => 
    {
        document.querySelector(".left").style.left = "0"
    });
    
    document.querySelector(".close").addEventListener("click", () => 
    {
        document.querySelector(".left").style.left = "-120%"
    });
    

}

main()
