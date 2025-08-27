const spiralsElement = document.querySelector('[data-spiralsImage]')
const buttonElement = document.querySelector('button[data-id="button:pickSpiral"]')



buttonElement.addEventListener('click', () => {
    alert("Button clicked!")
    
    const audio = document.getElementById('audio');
    // const audio = new Audio('../public/sounds/base-bg-hypno.wav');
    audio.play()
});