import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { useState} from 'react';
import './App.css'
import Additem from './Additem';
import Searchitem from './Searchbox';
function App(){
  const[items,setItem]=useState(JSON.parse(localStorage.getItem("To do list")));
    const[newItem,setnewItem]=useState('');
    const[search,setSearch]=useState('');
     //addItem
     console.log('hi')
     const additem =(item)=>{
      const id =  items.length?items[items.length-1].id+1:1;
      const addnewitem = {id,checked:false,item}
      const listitems = [...items,addnewitem];
      setItem(listitems)
      localStorage.setItem("To do list",JSON.stringify(listitems));
     }
  //handle check input
  const handleChange =(id)=>{
    const listitems = items.map((item)=>
      item.id===id ? {...item,checked:!item.checked}:item
      )
      setItem(listitems) 
      localStorage.setItem("To do list",JSON.stringify(listitems));
  }

  //to handle delete
    const handleDelete =(id)=>{   
      const listitems =items.filter((item)=>item.id!==id);
      setItem(listitems);
      localStorage.setItem("To do list",JSON.stringify(listitems));
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("submit")
      if(!newItem)return;
      additem(newItem)
      setnewItem('')
    }
    
  return (
    <div className="App">
        <Header  title="To do List"/>
        <Additem
        newItem={newItem}
        setnewItem={setnewItem}
        handleSubmit={handleSubmit}
        />
        <Searchitem
        search ={search}
        setSearch={setSearch}
        />
        <Content 
        items={items.filter((item)=>((item.item).toLowerCase()).includes((search).toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
        />
        <Footer
        length={items.length}
        />
    </div>
  )
};
export default App