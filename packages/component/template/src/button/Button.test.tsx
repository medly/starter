import { render } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { ButtonProps } from './types';

describe('Button', () => {
    test.each(['solid', 'outlined'])('should render properly with %p variant', (variant: ButtonProps['variant']) => {
        const { container } = render(<Button variant={variant}>Button</Button>);
        expect(container).toMatchSnapshot();
    });
});
