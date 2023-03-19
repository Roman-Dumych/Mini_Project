fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        for (let user of data) {
            let block = document.createElement('div')
            let a = document.createElement('a');
            a.innerText = `id:${user.id} name:${user.name}`
            a.href = `user-details.html?data=${JSON.stringify(user)}`
            block.appendChild(a);
            document.body.appendChild(block);
        }
    });

