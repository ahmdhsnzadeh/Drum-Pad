function _pad(e) {
    let _audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let _keys = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!_audio) return null
    _keys.classList.add('active')
    _audio.currentTime = 0
    _audio.play()
    setTimeout(function() {
        _keys.classList.remove('active'), 8000
    })
}
window.addEventListener("keydown", _pad)