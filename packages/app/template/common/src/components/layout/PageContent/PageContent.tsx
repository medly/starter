import { CircleLoader } from '@medly-components/loaders';
import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import * as Styled from './PageContent.styled';
import { Props } from './types';

const Component: FC<Props> = props => {
    return (
        <Styled.PageContent {...props}>
            {props.isLoading && (
                <Styled.Loader>
                    <CircleLoader />
                </Styled.Loader>
            )}
            {props.children}
        </Styled.PageContent>
    );
};

Component.displayName = 'PageContent';
export const PageContent: FC<Props> & WithStyle = Object.assign(Component, {
    Style: Styled.PageContent
});
