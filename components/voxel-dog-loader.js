import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-10px', '-40px', '-130px']}
    mb={['-30px', '-70px', '-100px']}
    w={[350, 500, 675]}
    h={[350, 500, 675]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
