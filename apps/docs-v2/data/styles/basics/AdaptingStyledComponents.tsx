import * as React from 'react';
import { styled } from '@mui/styles';
import Button, { ButtonProps } from '@mui/material/Button';

interface MyButtonProps {
  color: 'red' | 'blue';
}

const MyButton = styled(
  ({ color, ...other }: MyButtonProps & Omit<ButtonProps, keyof MyButtonProps>) => (
    <Button {...other} />
  ),
)({
  background: (props: MyButtonProps) =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props: MyButtonProps) =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
});

export default function AdaptingStyledComponents() {
  return (
    <React.Fragment>
      <MyButton color="red">Red</MyButton>
      <MyButton color="blue">Blue</MyButton>
    </React.Fragment>
  );
}
