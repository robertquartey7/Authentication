import FlashMessage from 'react-flash-message';

import React from 'react'

function Flash({message, statusCode}) {
  return (
    <div>
    
<FlashMessage duration={5000} persistOnHover={true}>
  <p className={`alert alert-${statusCode === 200 ? "success":"danger"}`}>{message}</p>
</FlashMessage>
    </div>
  )
}

export default Flash


