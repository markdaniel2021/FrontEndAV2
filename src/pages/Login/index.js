import React, { useState } from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'

import './style.css'

const Login = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [redirectTo, setRedirectTo] = useState(false)

    const onSubmit = () => {

        const user = {
            login: login,
            password: password,
        }

        const obj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }

        const token = ''

        fetch('http://127.0.0.1:5000/login', obj)
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('token', data.token)
                setRedirectTo(true)
            })
    }

    if (redirectTo) return (<Navigate to="/" />)
    return (
        <div className="master">
            <h1>Acesse o sistema</h1>
            <input placeholder="Email" value="login" type="text" onChange={(v) => setLogin(v.target.value)} />
            <input placeholder="Senha" value="password" type="password" onChange={(v) => setPassword(v.target.value)} />
            <button onClick={() => onSubmit()} />
            <Link to="/cadastro">Tela de cadastro</Link>
        </div>
    )
}

export default Login