document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    });

    const result = await response.json();

    if (response.ok) {
        alert('Usuario registrado correctamente: ' + result.user.name);
    } else {
        alert('Error al registrar usuario: ' + result.message);
    }
});
