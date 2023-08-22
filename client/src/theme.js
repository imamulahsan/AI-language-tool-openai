export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#D3D3D3",
      50: "#808080",
    },
    primary: {
      50: "#F2D7D5",
      100: "#922B21",
      200: "#C0392B",  
    }
  };
  
  export const themeSettings = (mode) => {
    return {
      palette: {
        primary: {
          dark: colorTokens.primary[200],
          main: colorTokens.primary[100],
          light: colorTokens.primary[50],
        },
        neutral: {
          dark: colorTokens.grey[50],
          medium: colorTokens.grey[10],
          light: colorTokens.grey[0],
        },
        background: {
          default: colorTokens.primary[50],
          alt: colorTokens.primary[100],
        },      
      },
      typography: {
        fontSize: 12,
        h1: {
          fontSize: 40,
        },
        h2: {
          fontSize: 32,
        },
        h3: {
          fontSize: 24,
        },
        h4: {
          fontSize: 20,
        },
        h5: {
          fontSize: 16,
        },
        h6: {
          fontSize: 14,
        },
      },
    };
  };