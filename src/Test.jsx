import React from 'react'
import Proptypes from "prop-types"
export default function Test({x,children}) {
  return (
    <div>
        {x}
        {
            children
        }
    </div>
  )
}
Test.propTypes={
    x: Proptypes.number , 
    children : Proptypes.number
}
