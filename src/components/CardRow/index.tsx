import React from 'react';

import { Container } from './styles';

export interface Props {
  backgroundColor?: string;
  color?: string;
  title?: string;
}

export const CardRow: React.FC<Props> = ({
  children,
  title="",
  backgroundColor = '#fff',
  color = '#000',
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      {...props}
    >
      <h3>{title}</h3>
      {children}
    </Container>
  );
};