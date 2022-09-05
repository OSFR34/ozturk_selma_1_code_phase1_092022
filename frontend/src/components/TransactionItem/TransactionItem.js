import React, {useState} from 'react'
import './transactionItem.css'

export default function TransactionItem() {

    const [collapseOpenState, setCollapseOpenState] = useState(false)

    const changeCollapseState = () => {
        setCollapseOpenState(!collapseOpenState)
    }

    return (
    <div className='transaction-item-parent' onClick={changeCollapseState}>
    <div className='date-column'>
        {
            collapseOpenState ?  <i className='fa fa-angle-up'></i> : <i className='fa fa-angle-down'></i>
        }
        
       
        <span>June 20th, 2020</span>
    </div>
    <div>
        Golden Sun Bakery
    </div>
    <div>$ 5.00</div>
    <div>$ 2082.79</div>
    {
        collapseOpenState ? <div className='selection-collapse'>
        <div>
            Transaction Type: <span className='type-name'>Electronic</span>
        </div>
        <div>
            Category: <span className='category-name'>Food</span><i className='fa fa-pencil'></i>
        </div>
        <div>
            Notes: <i className='fa fa-pencil'></i>
        </div>
    </div>:null
    }
</div>

  )
}
