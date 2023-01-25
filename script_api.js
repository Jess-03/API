const showData = (users) => {
    let showTableData = ""
    for (let i = 0; i < users.length; i++) {
        showTableData += `<tr>
                        <td>${users[i].id}</td>
                        <td>${users[i].first_name}</td>
                        <td>${users[i].last_name}</td>
                        <td>${users[i].email}</td>
                        <td>
                            <img src="${users[i].avatar}">
                        </td>
                    </tr>`
    };
    document.getElementById('data').innerHTML = showTableData;
}

let tiempoDeVida = localStorage.getItem('tiempoDeVida');

const btnGetUsers = document.getElementById("getUsers")
btnGetUsers.addEventListener('click', () => {

    const url = 'https://reqres.in/api/users?delay=3';
    if ((typeof (tiempoDeVida) == "undefined") ||
        new Date().getTime() - tiempoDeVida > 60_000) {

        fetch(url)
            .then(response => response.json())
            .then(users => {
                console.log(users)
                localStorage.setItem("datosguardadosUsuarios", JSON.stringify(users.data));
                localStorage.setItem("tiempoDeVida", (new Date().getTime()) + 60_000);
                tiempoDeVida = localStorage.getItem('tiempoDeVida');
                showData(users.data);
            })

            .catch(error => console.log(error));
    }
    else {
        showData(JSON.parse(localStorage.getItem("datosguardadosUsuarios")));
        console.log("Datos locales");
    }
        
});

const datosConvertidos = JSON.parse(localStorage.getItem("datosguardadosUsuarios"));















