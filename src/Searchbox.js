import React from 'react'

const Searchbox = ({ search,setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='searchlabel'>search</label>
        <input
        type='text'
        id='search'
        placeholder='search item'
        role='searchbox'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        /> 
    </form>
  )
}

export default Searchbox