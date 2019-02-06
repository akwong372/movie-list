import React from 'react';

const Insert = (props)=>{
  return (
    <div>
      <form>
        <input type="text" name="movieAdd" id="movieAdd"/>
        <input type="submit" value="Add" onClick={(e) => { e.persist(); props.addMovie(e)}} />
      </form>
    </div>
  )
}

export default Insert;