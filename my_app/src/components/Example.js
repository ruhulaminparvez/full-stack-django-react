import React from 'react'

function Example(props) {

    function myElements(names){
        return names.map(name =>
            <div key={name}>
                {`${name}`}  
            </div> 
             
        )
    }

  return (
    <div>

        <h3>{myElements(props.names)}</h3>
    </div>
  )
}

export default Example