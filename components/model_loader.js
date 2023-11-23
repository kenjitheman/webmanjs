import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const ModelContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="voxel-dog"
        m="auto"
        mt={['-30px', '-50px', '-150px']}
        mb={['-1px', '-60px', '-100px']}
        w={[325, 500, 675]}
        h={[325, 500, 675]}
        position="relative"
    >
        {children}
    </Box>
))

const Loader = () => {
    return (
        <ModelContainer>
            <ModelSpinner />
        </ModelContainer>
    )
}

export default Loader
