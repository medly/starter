import React, { HTMLProps } from 'react';
import { PageLayoutStyled } from './PageLayout.styled';

export const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(({ children }) => {
    return <PageLayoutStyled>{children}</PageLayoutStyled>;
});

PageLayout.displayName = 'PageLayout';
