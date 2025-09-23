const spiralsElement = document.querySelector('[data-spiralsImage]')
const buttonElement = document.querySelector('button[data-id="button:playAudio"]')


const playerSettings = {
    loop: true
}

class AudioPlayer {
    constructor(props) {
        this.props = props;
        this.toLoop = true;
        this.isPlaying = false;
        this.audio = props.audioElement
    }

    play(){
        this.audio.play()
    }

    pause(){
        this.audio.pause()
    }

    setLooping(looping) {
        playerSettings.loop = looping;
    }
}

const audioPlayer = new AudioPlayer({
    audioElement: document.getElementById('audioPlayer')
});

const testAudio = document.getElementById('testAudio');


buttonElement.addEventListener('click', () => {
    
    // alert("Audio button clicked!")

    audioPlayer.setLooping(!playerSettings.loop);

    if (playerSettings.loop) {
        audioPlayer.play();
        testAudio.play();
        buttonElement.textContent = "Pause";
    } else {
        audioPlayer.pause();
        testAudio.pause();
        buttonElement.textContent = "Play";
    }
});


const $reactButton = document.querySelector('button[data-id="button:react"]');
$reactButton.addEventListener('click', () => {
    alert("React button clicked!")
});