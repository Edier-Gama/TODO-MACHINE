import React from "react";
import './EmptyResults.css'

function EmptyResults(props) {
   return (
     <p className="Empty">No hubieron resultados para : { props.searchValue}</p>
   )
}

export {EmptyResults}