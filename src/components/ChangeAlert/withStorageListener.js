import React from "react";

function withStorageListener(WrappedComponent) {
   return function WrappedComponentStorageListener(props) {
     const [storageChange, setStorageChange] = React.useState(false)

     window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1'){
        setStorageChange(true)
      } else {
        return null
      }
     })
     return( 
     <WrappedComponent
     show={storageChange}
     toggleShow={setStorageChange}
     />)
   }
}

export {withStorageListener}
