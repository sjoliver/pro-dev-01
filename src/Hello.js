import React from 'react';

const Hello = () => {


  return (
    <div className='App flex items-center justify-center h-screen w-screen bg-dark'>
      <>
        <div className='container-card flex-col items-center gap-4'>
          <div className='form-input-col'>
            <label >First Name</label>
            <input type="text" id="fname" className='form-text' name="fname"></input>
          </div>
          <div className='form-input-col'>
            <label >Last Name</label>
            <input type="text" id="fname" className='form-text' name="fname"></input>
          </div>
          <div className='form-input-col'>
            <label >Email</label>
            <input type="text" id="fname" className='form-text' name="fname"></input>
          </div>
          <button type='button' className='mt-[20px]'>OK</button>
        </div>
      </>
    </div>
  )
}

export default Hello;

