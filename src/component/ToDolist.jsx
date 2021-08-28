import React,{ useState} from 'react'
import './style.css';
const ToDolist = () => {
    const [inputItem,setInputItem]= useState('');
    const [Item,setItem]= useState([]);
    const [editBtn,setEditBtn]= useState(true);
    const [isEditItem, setIsEditItem]= useState(null)

    const inputEvent=(event)=>{
        setInputItem(event.target.value);
    }
    const AddItem=()=>{
        if(!inputItem){
            alert('Please Enter the item.')

        }else if (inputItem && !editBtn) {
            setItem(
                Item.map((elem)=>{
                    if (elem.id===isEditItem){
                        return {...elem,name:inputItem}
                    }
                    return elem;
                })
            )
            setInputItem('');
            setEditBtn(true);
            setIsEditItem(null);
        }
        else{
            const allInputData={id:new Date().getTime().toString(), name:inputItem}
            setItem([...Item,allInputData]);
            setInputItem('')
        }
    }

    const deleteItem=(index)=>{
        const updatedItem=Item.filter((elem)=>{
            return elem.id!==index;
        })
        setItem(updatedItem);
    } 
    const DeleteAll=()=>{
        setItem([]);
    }
    const editItem=(id)=>{
        let newEditItem=Item.find((elem)=>{
            return elem.id===id
        })
        setInputItem(newEditItem.name);
        setEditBtn(false);
        setIsEditItem(id);
    }

    return (
        <>
        <div className='main_div'>
            <div className='center_div'>
                <h1> <i className="far fa-clipboard "></i> ToDo List</h1> 
                <div className='input_div'>
                <input placeholder='✍️ Add the item' name='item' value={inputItem} onChange={inputEvent} />
                {editBtn?<i className="fas fa-plus" onClick={AddItem}></i> :
                <i className="far fa-edit edit" onClick={AddItem}></i> }
                </div>
                       {
                            Item.map((elem)=>{
                                return(

                                 <div className='list_items'>
                                    <div className='item'  id={elem.id}>
                                        <p> {elem.name} </p>  
                                        <div className='icons'>
                                        <i class="far fa-edit edit" onClick={()=>editItem(elem.id)}></i>
                                        <i className="far fa-trash-alt delete" onClick={()=>deleteItem(elem.id)}></i>
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
