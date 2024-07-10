import React from 'react'

import Listitems from './Listitems';

const Content = ({items,handleChange,handleDelete}) => {
  return (
    <main>
      {items.length?(
      <Listitems
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
         ):(
        //without any list this is display;
      <p>your list is empty</p>)}
    </main>
  )
}

export default Content