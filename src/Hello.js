import React from 'react';

const Hello = () => {


  return (
    <div className='App flex items-center justify-center h-screen w-screen bg-dark'>
      <>
      <div className='container-card flex-col items-center gap-4'>
        <div className='flex flex-col w-50'>
          <label >First Name:</label>
          <input type="text" id="fname" className='form-text' name="fname"></input>
        </div>
        <div className='flex flex-col'>
          <label >Last name:</label>
          <input type="text" id="fname" className='form-text' name="fname"></input>
        </div>
        </div>
      </>
    </div>
  )
}

export default Hello;

