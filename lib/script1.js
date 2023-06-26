for (let i = 1; i <= 50; i++) {
    let ul = document.querySelector('ul');
    ul.insertAdjacentHTML('beforeend', '<li class="number">' + i + '</li>');
}
document.addEventListener('click', event => {
    if (event.target.classList.contains('number')) {
        event.target.classList.add('crossed');
    }
});
