import React from "react";

function useLocalStorage(itemName, initialValue) {
    
  const actionTypes = {
    error: 'ERROR',
    succsess: 'SUCCESS',
    set_item: 'SET-ITEM'
  }

    const reducerObject = (state, payload) => ({
    [actionTypes.error]: {...state, error: true},
    [actionTypes.succsess]: {...state, loading: false, item: payload},
    [actionTypes.set_item]: {...state, item: payload}
  })

    const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state
  }

    const initialState = {error: false, loading: true, item: initialValue} 
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const {error, loading, item } = state  

    const onError = () => dispatch({type: actionTypes.error})
    const onSuccess = (parsedItem) => dispatch({type: actionTypes.succsess, payload: parsedItem})
    const onSetItem = (newItem) => dispatch({type: actionTypes.set_item, payload: newItem})

    React.useEffect(() => {
      setTimeout(() => {
        try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
          onSuccess(parsedItem)
       } catch (error) {
          onError(error)
       }
      }, 3000)
    })
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem)
        onSetItem(newItem)
      } catch (error) {
        onError(error)
      }
    };
  
    return {
      item, 
      saveItem, 
      loading, 
      error
    };
  } 


export {useLocalStorage}
  
  