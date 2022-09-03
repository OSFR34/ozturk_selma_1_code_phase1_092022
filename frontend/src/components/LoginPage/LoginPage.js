import React,{useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'

export default function LoginPage() {

    // Identification du nom
    const [userNameState, setUserName] = useState(false)
    // Mot de passe
    const [passwordState, setPasswordState] = useState(false)
    // Remember
    const [rememberState, setRememberState] = useState(false)

    const onUsernameChange = (e) => {
        let userNameValue = e.target.value;
        setUserName(userNameValue)
    }

    const onPasswordChange = (e) => {
        let userPasswordValue = e.target.value;
        setPasswordState(userPasswordValue)
        console.log(userPasswordValue)
    }

    const onRememberChange = (e) => {
        let userRememberValue = e.target.checked;
        setRememberState(userRememberValue)
    }
    const onFormSubmitFunction = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/v1/user/login',{
            email:userNameState,
            password:passwordState        
        }).then(result => {
            console.log(result)
        }).catch(error => console.error(error))      
    }

  return (
    <div>
        <Header/>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={onFormSubmitFunction} >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={onUsernameChange} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={onPasswordChange}  />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" onChange={onRememberChange}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button" style={{cursor:'pointer' }} >Sign In</button>                
                </form>
            </section>
            </main>
        <Footer/>      
    </div>
  )
}
