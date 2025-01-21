const form = document.getElementById('userForm');
const userList = document.querySelector('#user-list ul');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const favoriteMovie = form.querySelector('#favorite-movie').value.trim();

    if (!name || !email || !favoriteMovie) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item bg-dark text-light';
    listItem.textContent = `Nome: ${name} | E-mail: ${email} | Filme Favorito: ${favoriteMovie}`;
    userList.appendChild(listItem);

    form.reset();
});