import React from 'react';
import Counter from '../Counter/Counter';
import './Button.styl';
import { ReactComponent as Loader } from './Loader.svg';

type ButtonProps = {
  isLoading: boolean;
};

const Button: React.FC<ButtonProps> = ({ isLoading }) => {
  return (
    <div className="button">
      {isLoading ? <Loader /> : <Counter />}
    </div>
  );
};

export default Button;
