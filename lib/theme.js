import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#ffffff', '#000000')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#d6bcfa',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#805ada', '#d6bcfa')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Rajdhani', sans-serif",
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts })
export default theme
