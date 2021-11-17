import { FC, HTMLProps, memo } from 'react';
import { PageLayoutStyled } from './PageLayout.styled';
export const PageLayout: FC<HTMLProps<HTMLDivElement>> = memo(({ children }) => {
    return <PageLayoutStyled>{children}</PageLayoutStyled>;
});

PageLayout.displayName = 'PageLayout';
