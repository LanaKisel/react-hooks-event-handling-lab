// Code EyesOnMe Component Here
import React from 'react'
function handleFocus(e) {
    console.log("Good!")
}
function handleBlur(e) {
    console.log('Hey! Eyes on me!')
}

const EyesOnMe = () => {
  return (
    <div>
        <button onFocus={handleFocus} onBlur={handleBlur}>"Eyes on me"</button>
      
    </div>
  )
}

export default EyesOnMe
