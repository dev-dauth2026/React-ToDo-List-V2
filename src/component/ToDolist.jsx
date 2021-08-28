import React,{ useState} from 'react'
import './style.css';
const ToDolist = () => {
    const [inputItem,setInputItem]= useState('');
    const [Item,setItem]= useState([]);

    const inputEvent=(event)=>{
        setInputItem(event.target.value);
    }
    const AddItem=()=>{
        if(!inputItem){
            alert('Please Enter the item.')

        }else{
            
            setItem([...Item,inputItem]);
            setInputItem('')
        }
    }

    const deleteItem=(id)=>{
        const updatedItem=Item.filter((elm,ind)=>{
            return ind!==id;
        })
        setItem(updatedItem);
    } 
    const DeleteAll=()=>{
        setItem([]);
    }

    return (
        <>
        <div className='main_div'>
            <div className='center_div'>
                <h1> <i className="far fa-clipboard "></i> ToDo List</h1> 
                <div className='input_div'>
                <input placeholder='✍️ Add the item' name='item' value={inputItem} onChange={inputEvent} />
                <i className="fas fa-plus" onClick={AddItem}></i> 
                </div>
                       {
                            Item.map((val,ind)=>{
                                return(

                                 <div className='list_items'>
                                    <div className='item' key={ind} id={ind}>
                                        <p>{ind+1}. {val} </p>  
                                        <div className='icons'>
                                        <i class="far fa-edit edit"></i>
                                        <i className="far fa-trash-alt delete" onClick={()=>deleteItem(ind)}></i>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        } 
                 {!Item ? (null):(< button onClick={DeleteAll}>Delete All</button>)}       
            </div>
        </div>
            
        </>
    )
}

export default ToDolist;
