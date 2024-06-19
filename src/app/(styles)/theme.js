import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          backgroundColor: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: "#FFFFFF",
          fontSize: "15px",
          textTransform: "capitalize",
          padding: "0px 8px",
          fontWeight: 400,
        },
        outlined: {
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "#FFFFFF",
          justifyContent: "space-between",
          padding: "13px 16px",
          borderRadius: "12px",
          textTransform: "capitalize",
          ":hover": {
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
        },
      },
    },
  },
});
export default theme;
