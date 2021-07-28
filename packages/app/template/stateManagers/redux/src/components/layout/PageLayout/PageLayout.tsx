import { addToast } from '@medly-components/core';
import React, { useCallback, useEffect } from 'react';
import { PageLayoutStyled } from './PageLayout.styled';
import { Props } from './types';

const PageLayout: React.FC<Props> = React.memo(({ fetchUser, children }) => {
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return <PageLayoutStyled>{children}</PageLayoutStyled>;
});

PageLayout.displayName = 'PageLayout';

export default PageLayout;
