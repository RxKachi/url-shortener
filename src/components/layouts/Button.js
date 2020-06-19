import React from 'react';

const Button = props => 
<button className='btn btn-primary'><a href={props.link}>{props.children}</a></button>

export default Button;