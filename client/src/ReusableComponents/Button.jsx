import React from 'react'

const Button = ({ className,Span,Text, handleClick }) => {

    if(Text === '' || null) return Text;

  return (
    <button className={className} onClick={handleClick}>
        <span className={Span}>
          {Text}
        </span>
    </button>
  )
}

export default Button;