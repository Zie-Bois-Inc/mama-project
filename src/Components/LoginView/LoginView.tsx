import { ChangeEvent, Fragment, useState } from 'react'
import LoginViewProps from "./LoginViewProps"

const LoginView = ({text}: LoginViewProps) => {
    const [name, setName] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <Fragment>
            <h1>Hello</h1>
            <input type="text" placeholder='Enter your name' onChange={onChange}/>
            <p>{text}</p>
            <p>{name}</p>
        </Fragment>
    )
}

export default LoginView