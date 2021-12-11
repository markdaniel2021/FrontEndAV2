import React, { useState, useEffect } from 'react'

import './style.css'

const Home = () => {

    const[username, setUsername] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            let pass = 'senhaSuperSecretaESegura';
            var header = {
                method: 'GET',
                headers: {
                    'authorization': sessionStorage.getItem('token'),
                    'x-api-key': pass
                },
                mode: 'cors',
                cache: 'default'
            }
            fetch('http://127.0.0.1:5000/user', header)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setNome(data.nome)
                })
        }
    })

    return (
        <div className="main" >
            <h1>Tela Inicial</h1>
            <h2>Seja Bem vindo {username}</h2>
        </div>
    )
}

export default Home