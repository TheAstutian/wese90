import React from 'react'; 

const Button = ({children, ...otherProps}) =>(
    <div>
        <button>{children}</button>
    </div>
)

export default Button; 