import type { FC } from 'react';
import { ButtonStyled } from './Button.styled';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = props => <ButtonStyled {...props} />;
Button.defaultProps = {
    variant: 'solid'
};
