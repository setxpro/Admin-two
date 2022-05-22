import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string; 
        colors: {
            primary: string;
            sidebar: string;
            navbar: string;
            text: string;
            textLight: string;
            border: string;
            icons: string;
        }
    }
}