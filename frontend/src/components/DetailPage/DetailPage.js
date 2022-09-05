import React from 'react'
import {useParams} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {useSelector} from 'react-redux'
import './detailPage.css'
import TransactionItem from '../TransactionItem/TransactionItem'

export default function DetailsPage() {
// this parameter can use to get transaction details from backend server.
  let {id} = useParams()
// get all redux store states
const isAuth = useSelector(state => state.loginReducer)

  return (
    <div className='detail-parent' >
        <Header/>
        <div className='hero-title'>
            <p>Argent Bank Checking (x8349)</p>
            <h1>$ 2,082.79 </h1>
            <p className='hero-title-text'>Available Balance</p>
        </div>
        <div className='detail-main'>
            <div className='title-group'>
                <div>DATE</div>
                <div>DESCRIPTION</div>
                <div>AMOUNT</div>
                <div>BALANCE</div>
            </div>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>            
        </div>
       
        <Footer/>
    </div>

  )
}
