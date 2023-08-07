import React from 'react';
import CustomButton from './CustomButton';


const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        placeholder='Ask AI....' 
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type='outline'
            title= 'Asking AI....'
            customeStyles= "text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="ouline"
              title= "AI Logo"
              handleClick={() => handleSubmit('logo')}
              customeStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title= "AI Full"
              handleClick={() => handleSubmit('full')}
              customeStyles="text-xs"
            />
          </>
        )}
      </div>

      
    </div>
  )
}

export default AIPicker
