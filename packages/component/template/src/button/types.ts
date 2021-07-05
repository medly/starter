import { HTMLProps } from '@medly-components/utils';

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
    /** Button design */
    variant: 'solid' | 'outlined';
    /** Button type */
    type?: 'button' | 'reset' | 'submit';
};
