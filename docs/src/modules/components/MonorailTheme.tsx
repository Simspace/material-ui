import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const monorailThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1465FF',
      dark: '#1050cb',
      light: '#7aa8ff',
    },
    secondary: {
      main: '#d41c0b',
      dark: '#ad0c00',
    },
  },
  typography: {
    button: {
      fontSize: 11,
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: 3,
          letterSpacing: 0,
          padding: '2px 12px 1px',
          border: '1px solid',
        },
        contained: {
          boxShadow: 'none',
          color: '#fff',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #7AA8FF',
          },
        },
        containedPrimary: {
          borderColor: '#1465FF',
          '&:hover': {
            borderColor: '#1050CB',
          },
          '&:active': {
            backgroundColor: '#0C3D99',
            borderColor: '#0C3D99',
          },
          '&:focus': {
            borderColor: '#0C3D99',
          },
        },
        containedSecondary: {
          borderColor: '#D41C0B',
          '&:hover': {
            borderColor: '#AD0C00',
          },
          '&:active': {
            backgroundColor: '#890900',
            borderColor: '#890900',
          },
          '&:focus': {
            borderColor: '#890900',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 11,
          color: '#1c1c1c',
          paddingBottom: 6,
          fontWeight: 500,
          marginTop: '-1px',
          '&$focused': {
            color: '#1c1c1c',
          },
          '&$disabled': {
            color: '#C2C2C2',
          },
        },
        outlined: {
          '&$shrink': {
            transform: 'none',
            position: 'relative',
          },
        },
      },
      defaultProps: {
        shrink: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          boxSizing: 'border-box',
          padding: '5px 8px 4px',
          minHeight: 24,
          fontSize: 11,
          border: '1px solid #8F8F8F',
          borderRadius: 3,
          '&:hover': {
            borderColor: '#558DF6',
          },
          '&:active': {
            borderColor: '#1465FF',
          },
          '&:focus': {
            borderColor: '#0C3D99',
            boxShadow: '0px 0px 0px 3px #7AA8FF',
          },
          '&$disabled': {
            color: '#C2C2C2',
            borderColor: '#C2C2C2',
          },
        },
        notchedOutline: {
          display: 'none',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 8,
          fontWeight: 500,
          marginTop: 1,
          marginBottom: '-5px',
        },
        contained: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          paddingTop: 2,
          '&:focus': {
            borderRadius: 3,
          },
        },
        outlined: {
          borderRadius: 3,

          '&$outlined': {
            paddingRight: 28,
          },
        },
        selectMenu: {
          minHeight: 24,
          height: 24,
        },
        icon: {
          height: 16,
          width: 16,
          top: 4,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 11,
          paddingTop: 8,
          paddingBottom: 8,

          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: 6,
          },

          '&:hover::before': {
            background: '#83A8F8',
          },

          '&$selected': {
            backgroundColor: '#F5F9FE',

            '&::before': {
              background: '#2152C4',
            },

            '&:hover': {
              backgroundColor: '#F5F9FE',
            },
          },
        },
        button: {
          '&:hover': {
            backgroundColor: '#F5F9FE',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        button: {
          '&:hover': {
            backgroundColor: '#F5F9FE',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingTop: 4,
          paddingBottom: 4,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          height: 24,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& [class*="MuiSvgIcon-root"]': {
            height: 16,
            width: 16,
          },
        },
      },
    },
  },
};

const MonorailTheme = createMuiTheme({ ...monorailThemeOptions });

export default MonorailTheme;
