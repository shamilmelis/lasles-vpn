const menuClick = document.querySelector('.burger_button');
menuClick.addEventListener('click', function () {
    let cont = document.getElementById('row_header');
    if (cont.className === 'row') {
        cont.className = 'rowActive';
    } else {
        cont.className = 'row';
    }
})