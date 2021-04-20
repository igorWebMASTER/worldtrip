import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  color: {
    gray: {
      "900": "#181B23",
      "800": "#1d2029",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50":  "#eeeee2",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#fff',
        color: 'gray.800'
      }
    }
  }
})