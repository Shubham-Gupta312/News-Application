import React from 'react'
import News from './News'
function Entertainment() {
  return (
    <div>
      <News pageSize={6} country="in" category="entertainment"/>
    </div>
  )
}

export default Entertainment

