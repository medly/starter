import { Theme } from '@theme';
import 'styled-components';

declare module 'styled-components' {
    export type DefaultTheme = Theme;
}
