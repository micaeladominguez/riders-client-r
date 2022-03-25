import {createTheme} from "@mui/material/styles";

export const ridersTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ee2738',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#ffffff',
        },
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
    },
    overrides: {
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                    transform: 'translateX(16px)',
                    color: '#000000',
                    '& + $track': {
                        opacity: 1,
                        border: 'none',
                    },
                },
            },
            thumb: {
                width: 24,
                height: 24,
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#000000',
                opacity: 1,
                transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            },
        },
    },
});

