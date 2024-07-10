import { FaPlus } from "react-icons/fa";
const Additem = ({newItem,setnewItem,handleSubmit}) => {
  return (
    <form className="addForm" onClick={handleSubmit}>
        <label htmlFor='additems'>AddItem</label>
        <input type='text' id='additems' 
        autoFocus
        placeholder='addItems'
        required
        value={newItem}
        onChange={(e)=>{setnewItem(e.target.value)}}
       
        ></input>
        <button
        type='submit'
        aria-label='additem'
        ><FaPlus /></button>
        
    </form>
  )
}

export default Additem