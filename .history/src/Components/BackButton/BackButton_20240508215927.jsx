import React from 'react'


const BackButton = () => {
    const history=useHistory();
  return (
    <div>
      <button onClick={history.goBack()}>Back</button>
    </div>
  )
}

export default BackButton
