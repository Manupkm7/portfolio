import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { createContext, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";

export const light = responsiveFontSizes(
  createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #94ABD6",

            "& .MuiTabs-indicator": {
              backgroundColor: "#012477",
              height: "4px",
            },

            "& .MuiTabs-scrollButtons.Mui-disabled": {
              display: "none",
            },
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            color: "#899AB8",
            paddingX: 4,

            "&.Mui-selected": {
              color: "#3B5689",

              "& .MuiTypography-root": {
                fontWeight: "500",
              },
            },
          },
        },
      },

      MuiFormControl: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-filled": {
              transform: "translate(0, 0)",
              position: "relative",
              color: "inherit",
              marginBottom: "8px",

              "&.MuiInputLabel-shrink": {
                transform: "translate(0, 0)",
                position: "relative",
                color: "inherit",
              },
            },

            "& .MuiFilledInput-root": {
              borderRadius: "8px",

              "&::before": {
                display: "none",
              },

              "&::after": {
                display: "none",
              },

              "&.MuiInputBase-multiline": {
                padding: "0",
              },

              "& .MuiFilledInput-input": {
                padding: "14.5px 16px",
              },

              "&.Mui-disabled": {
                backgroundColor: "#f2f4f8",

                "& .MuiFilledInput-input": {
                  color: "#C4C4C4",
                },
              },
            },
          },
        },
      },

      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginLeft: "0 !important",
          },
        },
      },

      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: "#F2F4F8",
          },
        },
      },

      MuiButton: {
        defaultProps: {
          size: "large",
          disableElevation: true,
        },

        styleOverrides: {
          root: {
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: 500,
            borderWidth: "2px",
            whiteSpace: "nowrap",
          },

          contained: {
            borderRadius: "25px",
          },

          outlined: {
            borderRadius: "25px",
            borderWidth: "2px !important",
          },

          sizeSmall: {
            padding: "0 24px",
            minHeight: "36px",
            fontSize: "14px",
            lineHeight: "18px",
          },

          sizeMedium: {
            padding: "0 32px",
            minHeight: "42px",
          },

          sizeLarge: {
            padding: "0 48px",
            minHeight: "48px",
          },
        },
      },

      MuiGrid: {
        styleOverrides: {
          "spacing-xs-1": {
            width: "100%",
            margin: "auto",
          },
        },
      },
    },

    typography: {
      fontWeightRegular: 300,
      caption: {
        color: "#747474",
      },
      subtitle2: {
        color: "#677CAD",
      },
      button: {
        fontWeight: "bold",
        textTransform: "none",
      },
    },

    props: {
      MuiTooltip: {
        arrow: true,
        style: {
          pointerEvents: "all",
        },
      },

      MuiButton: {
        disableFocusRipple: true,
      },

      MuiDivider: {
        style: {
          marginTop: 16,
          marginBottom: 16,
        },
      },
    },

    shape: {
      borderRadius: 8,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  })
);

export const ThemeSelectorContext = createContext({
  theme: "",
});

export const useThemeSelector = () => useContext(ThemeSelectorContext);

export const withTheme = (Component) => (props) => {
  const t = "light";
  const theme = t === "light" ? light : light;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </ThemeProvider>
  );
};
