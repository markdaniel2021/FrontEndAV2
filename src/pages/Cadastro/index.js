import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router'
import './style.css'

const Cadastro = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [age, setAge] = useState(0)
    const [redirectTo, setRedirectTo] = useState(false)

    const onSubmit = () => {

        const user = {
            username: username,
            password: password,
            fullname: fullname,
            age: age,
        }

        const obj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }

        fetch('http://127.0.0.1:5000/users', obj)
            .then(res => res.json())
            .then(data => {
                setRedirectTo(true)
            })
    }
    if (redirectTo) return (<Navigate to="/login" />)
    return (
        <div className="main">
            <h1>Cadastro de Usuário</h1>
            <p style={{ color: '$B14623' }} >Preencha todos os campos obrigatorios</p>
            <input placeholder="Email" type="text" value={username} onChange={(v) => setUsername(v.target.value)} />
            <input placeholder="Senha" type="password" value={password} onChange={(v) => setPassword(v.target.value)} />
            <input placeholder="Nome" type="text" value={username} onChange={(v) => setUsername(v.target.value)} />
            <input placeholder="Idade" type="text" value={age} onChange={(v) => setAge(v.target.value)} />
            <button onClick={() => onSubmit()} />
            <Link className="estiloLink" to="/login">Página de Login</Link>
        </div>
    )
}

export default Cadastro