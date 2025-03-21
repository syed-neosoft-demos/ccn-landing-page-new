import { Palette } from '@mui/material/styles'
import { Typography } from '@mui/material/styles/createTypography'
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
export interface AppTheme {
    dark: {
        palette: DeepPartial<Palette>
        typography?: DeepPartial<Typography>
    }
    light: {
        palette: DeepPartial<Palette>
        typography?: DeepPartial<Typography>
    }
}

export const CustomTheme: AppTheme = {
    dark: {
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976D2',
                contrastText: 'rgba(255,255,255,0.87)',
            },
            secondary: {
                main: '#FB8C00',
                light: '#FB8C00',
                dark: '#FB8C00',
                contrastText: 'rgba(255,255,255)',
            },
            error: {
                main: '#ff0032',
                light: '#ff0032',
                dark: '#ff0032',
            },
            warning: {
                main: '#fb8c00',
                light: '#fb8c00',
                dark: '#fb8c00',
            },
            info: {
                main: '#40c4ff',
                light: '#40c4ff',
                dark: '#40c4ff',
            },
            success: {
                main: '#004d40',
                light: '#004d40',
                dark: '#004d40',
            },
            background: {
                paper: '#000616',
                default: '#0B101A',
            },
            divider: 'rgba(0,8,12,0.12)',
        },
        typography: {
            button: {
                textTransform: 'none',
            },
        },
    },
    light: {
        palette: {
            mode: 'light',
            primary: {
                main: '#1976D2',
                contrastText: 'rgba(255,255,255,0.87)',
            },
            secondary: {
                main: '#2962ff',
                light: '#2962ff',
                dark: '#2962ff',
            },
            error: {
                main: '#ff0032',
                light: '#ff0032',
                dark: '#ff0032',
            },
            warning: {
                main: '#fb8c00',
                light: '#fb8c00',
                dark: '#fb8c00',
            },
            info: {
                main: '#40c4ff',
                light: '#40c4ff',
                dark: '#40c4ff',
            },
            success: {
                main: '#004d40',
                light: '#004d40',
                dark: '#004d40',
            },
            background: {
                default: '#ffffff',
                paper: '#fafafa',
            },
            divider: 'rgba(0,8,12,0.12)',
        },
        typography: {
            button: {
                textTransform: 'none',
            },
        },
    },
}
