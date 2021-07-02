import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

const solidStyle = css`
        border: 0;
        background-color: blue;
        color: white;
    `,
    outlinedStyled = css`
        border: 1px solid blue;
        background-color: white;
        color: blue;
    `;

export const ButtonStyled = styled('button')<ButtonProps>`
    padding: 10px 20px;
    border-radius: 4px;
    ${({ variant }) => (variant === 'solid' ? solidStyle : outlinedStyled)}
`;
