console.log("welcome to Spotify")
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songs = [
    {SongName:"Let me Love You", FilePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    {SongName:"Let me Love You", FilePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

// audioElement.play();
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    };
});

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/ audioElement.duration)*100)
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})