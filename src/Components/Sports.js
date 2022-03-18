import React from 'react'
import News from './News'

function Sports() {
  return (
    <div>
      <News pageSize={6} country="in" category="sports"/>
           
    </div>
  )
}

export default Sports
