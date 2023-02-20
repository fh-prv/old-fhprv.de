document.addEventListener('DOMContentLoaded', e => {
    document.querySelector('main').style.opacity = 1;
});

window.transition = href => {
    document.querySelector('main').style.opacity = 0;

    setTimeout(() => {
        window.location.href = href;
    }, 1000);
}