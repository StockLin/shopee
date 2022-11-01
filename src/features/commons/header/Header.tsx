import React from 'react';

interface IProps {
  fixed?: boolean
}

const Header : React.FC<IProps> = ({ fixed = false }) => {
  return (
    <div>Header</div>
  )
}

export default Header