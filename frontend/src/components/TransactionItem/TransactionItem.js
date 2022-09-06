import React, {useState} from 'react'
import './transactionItem.css'

export default function TransactionItem() {

    const [collapseOpenState, setCollapseOpenState] = useState(false)
    const [categoryCollapseState,setCategoryState] = useState(false)
    const [selectedCategory,setSelectedCategory] = useState('Food')
    const [noteState,setNoteState] = useState(false)
  
    const changeCollapseState = () => {
      setCollapseOpenState(!collapseOpenState)
    }
  
    const selectCategoryItem = (e) => {
      setCategoryState(!categoryCollapseState)
    }
  
    const handleChangeCategory = (e) => {
      setSelectedCategory(e.target.innerText)
      setCategoryState(false)
    }
  
    const handleNoteState = () => {
      setNoteState(!noteState)
    }

    const handleNote = (e) => {
        let noteText = e.target.value
        if(e.keyCode === 13){
          console.log(noteText)
          setTimeout(function(){
            document.querySelector('.add-note').style.display = 'block'
          },1000)
          setTimeout(function(){
            document.querySelector('.add-note').style.display = 'none'
            setNoteState(false)
          },3500)
         
        }
      }
    
  

    return (
        <div className='transaction-item-parent' >
        <div className='date-column' onClick={changeCollapseState} >
        {
        collapseOpenState ? <i className='fa fa-angle-up'></i> : <i className='fa fa-angle-down'></i>
        }
        <span>June 20th, 2020</span>
        </div>
        <div>
        Golden Sun Bakery
        </div>
        <div>$ 5.00</div>
        <div>$ 2082.79</div>
        {
        collapseOpenState ? <div className='selection-collapse' >
        <div>
        Transaction Type: <span className='type-name'>Electronic</span>
        </div>
        <div className='category-parent' >
        Category: <span className='category-name'>{selectedCategory}</span>
        <i className='fa fa-pencil' onClick={e => selectCategoryItem(e)}></i>
        {
        categoryCollapseState ? <div className='category-dropdown'>
        <ul>
        <li onClick={e => handleChangeCategory(e)}><a>Shopping</a></li>
        <li onClick={e => handleChangeCategory(e)}><a>Billing</a></li>
        <li onClick={e => handleChangeCategory(e)}><a>Repair</a></li>
        </ul>
        </div>:null
        }
        </div>
        <div className={noteState ? 'note-parent-flex' : 'note-parent'}>
        <span>Notes:</span> <i className='fa fa-pencil' onClick={handleNoteState}></i>
        {
        noteState ? <input name='note-input' id="note-input" className='note-input' placeholder='You can add transaction note here...' onKeyUp={e => handleNote(e)} />:null
        }
        <div className="add-note">
        <i className="fa fa-check"></i>
        <span>New note has been added note successfully!</span>
        </div>
        </div>
        </div>:null
        }
        </div>
        
      
      
  )
}
