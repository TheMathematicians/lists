import 'styled-components';

/**
 * Ref: https://material.io/design/material-theming/implementing-your-theme.html#
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary?: string;
      primaryVariant?: string;
      secondary?: string;
      secondaryVariant?: string;
      background?: string;
      surface?: string;
      error?: string;
      on?: {
        primary?: string;
        secondary?: string;
        background?: string;
        surface?: string;
        error?: string;
      };
    };
  }
}
