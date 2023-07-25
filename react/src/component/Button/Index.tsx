import React from 'react'

type ButtonProps = {
    children?: React.ReactNode,
    onClick?:()=> void
}

const Button = ({onClick, children}: ButtonProps) => {
  return (
    <div>
        <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button