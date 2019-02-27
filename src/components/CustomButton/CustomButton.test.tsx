import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from "./CustomButton";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomButton title={'Título'} onClick={()=>console.log('click')} buttonType={'primary'}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
