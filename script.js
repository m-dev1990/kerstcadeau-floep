function unwrapPresent() {
    // Hide the present
    ;[...document.querySelectorAll('.ribbon,.ribbon2')].forEach(x => x.style.display = 'none')
    // Show the logo
    document.querySelector('.present')?.classList.add('open')
    ;[...document.querySelectorAll('.logo,.logo2')].forEach(x => x.classList.remove('hidden'))
}
