import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    useColorModeValue,
    Divider,
    Button
} from '@chakra-ui/react'
import Layout from "../components/layouts/article";

const NotFound = () => {
    return (
        <Layout
            title="404 | Not Found"
            description="the page you're looking for was not found -_-"
        >
            <Container
                align="center"
            >
                <Heading as="h1">not found | 404</Heading>
                <br />
                <Text>the page you&apos;re looking for was not found</Text>
                <br />
                <Text>ページが見つかりません</Text>
                <br />
                <Text>¯\_(ツ)_/¯ | ( ゜-゜) | (º _ º)</Text>
                <Divider my={12} />
                <Box my={12} align="center">
                    <Button
                        as={NextLink}
                        href="/"
                        p={8}
                        fontSize={'xl'}
                        fontWeight={'bold'}
                        rounded={'2xl'}
                        bg={'transparent'}
                        border={'1px solid'}
                        borderColor={useColorModeValue('gray.300', 'gray.700')}
                    >
                        homepage
                    </Button>
                </Box>
            </Container>
        </Layout>
    )
}

export default NotFound
