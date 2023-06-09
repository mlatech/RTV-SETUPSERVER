import React from 'react'

export default function Issue(props){
  const { title, description, _id } = props
  return (
    <div className="issue">
      <h1 className='title'>{ title }</h1>
      <h3 className='description'>{ description }</h3>
    </div>
  )
}