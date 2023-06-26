for (let i = 1; i <= 50; i++) {
    let item = document.createElement('li');
    item.innerHTML = i;
    item.className = "number";
    let ul = document.querySelector('ul');
    ul.append(item);
}
document.addEventListener('click', event => {
    if (event.target.classList.contains('number')) {
        event.target.classList.add('crossed');
    }
});