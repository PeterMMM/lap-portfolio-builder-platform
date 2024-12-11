import React from 'react'

export default function Main(props) {
    const {children} = props
  return (
    <main className='felx-1 flex flex-col'>{children}</main>
  )
}
