import React, { useState } from 'react' 
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import './profilepage.css'
import Actions from '../../redux/actions'

export default function ProfilePage() {

    const isAuth = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    const [editingOpen, setEditingOpen] = useState(false)
    const [firstNameState,setFirstNameState] = useState(isAuth.user.firstName)
    const [lastNameState,setLastNameState] = useState(isAuth.user.lastName)
    const navigate = useNavigate()
    
    const handleEditOpen = () => {
        setEditingOpen(true)
    }
    const handleEditClose = () => {
        setEditingOpen(false)
    }

    const onFirstNameChange = () => {
        const newFirstName = document.querySelector('#firstname').value
        setFirstNameState(newFirstName)
    }
    const onLastNameChange = () => {
        const newLastName = document.querySelector('#lastname').value
        setLastNameState(newLastName)
    }

    const handleSubmit = () => {
        let firstNameValue = firstNameState
        let lastNameValue = lastNameState
        const headers = {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${isAuth.token}`
        }
        const body = {
            firstName:firstNameValue,
            lastName:lastNameValue
        }
        axios.put('http://localhost:3001/api/v1/user/profile',body,{
            headers:headers
        })
        .then(result => {
            if(result.status === 200){
                axios.post('http://localhost:3001/api/v1/user/profile',[],{
                    headers:headers
                }).then(result => {
                    dispatch(Actions.userAction.logIn({
                        loggedin:true,
                        token:isAuth.token,
                        user:result.data.body
                    }))
                    navigate('/profile')

                }).catch(error => console.error(error))
                setEditingOpen(false)         
            }
            
        })
        .catch(error => console.error(error))

    }

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                {
                    editingOpen ? <div className='header header-open'>
                        <h1>Welcome Back</h1>
                        <div className='header-open-content'>
                            <div className='input-group'>
                                <input id="firstname" placeholder={isAuth.user.firstName} onChange={onFirstNameChange}  />
                                <input id="lastname" placeholder={isAuth.user.lastName} onChange={onLastNameChange}  />
                            </div>
                            <div className='button-group'>
                                <button className='save-button' onClick={handleSubmit}>Save</button>
                                <button className='cancel-button' onClick={handleEditClose}>Cancel</button>
                            </div>
                        </div>
                    </div> : <div className="header">

                        <h1>Welcome Back<br />
                            {
                                isAuth.user.firstName + ' ' + isAuth.user.lastName + '!'
                            }
                        </h1>
                        <button className="edit-button" onClick={handleEditOpen}>Edit Name</button>
                    </div>
                }

                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
