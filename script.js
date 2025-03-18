const btn = document.querySelector('.btn')
    form = document.forms[0];

btn.addEventListener('click', () => {
    fetch("https://database-f231e-default-rtdb.europe-west1.firebasedatabase.app/users.json") 
        .then(x => x.json())
        .then(y => console.log(y))
        .catch(() => console.log('Что-то блин не так....'))
        .finally(() => console.log('END'))
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const user = {
        login: form.name.value,
        pas: form.pas.value
    }
    fetch("https://database-f231e-default-rtdb.europe-west1.firebasedatabase.app/users.json", {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    })
    form.reset()
})