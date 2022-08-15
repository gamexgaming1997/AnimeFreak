import React from 'react'

const Button = ({ className,Span,Text }) => {

    if(Text === '' || null) return Text;

  return (
    <button className={className}>
        <span className={Span}>
          {Text}
        </span>
    </button>
  )
}

export default Button;