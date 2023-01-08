import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext()
  const searchValue=React.useRef('')

  const searchMovie=()=>{
    setSearchTerm(searchValue.current.value)
    // console.log(searchValue.current.value)
  }
  React.useEffect(()=>{
    searchValue.current.focus()
  },[])
  const handleSubmit=(e)=>{
    e.preventDefault ()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='name'>search you movie</label>

          <input type='text' id='name' ref={searchValue} />
          <div style={{marginTop:"20px"}}>

          <button type='submit' className='btn' onClick={searchMovie}>Submit</button>
          </div>
          
        </div>
      </form>
    </section>
  )
}

export default SearchForm
