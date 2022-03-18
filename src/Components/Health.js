import React from 'react'
import News from './News'

function Health() {
  return (
    <div>
      <News pageSize={6} country="in" category="health"/>
      
    </div>
  )
}

export default Health
