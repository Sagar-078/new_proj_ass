import React, { useState } from 'react'

const Card = ({card}) => {

  console.log("single card ", card);

  const [formData, setFormData] = useState({ ...card});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

  return (
    <div className=' flex flex-col lg:w-[400px] md:w-[350px] sm:w-[300px] bg-slate-300 items-center  justify-center p-3 rounded-lg'>
      <div className=' flex gap-4'>
        <div className='flex flex-col gap-3'>
          <img src={card?.frontImage} className=' h-[200px] w-[150px] rounded-md'/>
          <h1 className='text-sm font-semibold'>Front</h1>
        </div>
        <div className='flex flex-col gap-3'>
          <img src={card?.backImage} className=' h-[200px] w-[150px] rounded-md'/>
          <h1 className='text-sm font-semibold'>
            Back
          </h1>
        </div>
      </div>

      
      <form className=" pt-3 w-full flex flex-col items-center justify-center"
        // onSubmit={handleInputChange}
      >
        {Object.entries(formData).map(([key, value]) => {
          
          if (key === 'frontImage' || key === 'backImage') return null;

          return (
            <div key={key} className="mb-2 flex flex-row items-center gap-2 justify-between w-full">
              <div className=' flex items-center gap-1'>
                <label className="block text-sm font-medium text-gray-700 capitalize" htmlFor={key}>
                  {key}  
                </label>
                <span>:</span>
              </div>
              <input
                type="text"
                id={key}
                name={key}
                value={value || ''}
                onChange={handleInputChange}
                className=" block w-[280px] border border-gray-300 rounded-md p-2"
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="mt-3 px-8 py-2 bg-slate-500 text-base shadow-lg font-semibold text-white rounded-md"
        >
          Save
        </button>
      </form>

    </div>
  )
}

export default Card