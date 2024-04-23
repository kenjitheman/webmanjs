import NextLink from "next/link";
import { Box, Heading, Text, Container, useColorModeValue, Divider, Button } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const Support = () => {
    return (
        <Layout
            title="support | kenjitheman"
            description="support kenjitheman by donating"
        >
            <Container
                align="center"
                alignContent="center"
                maxW="container.lg"
            >
                <Heading as="h1" pb={"5%"}>support me</Heading>
                <Box align="center" justify="center" direction="column" alignContent={"center"} w={"100%"}>
                    <Section delay={0.4}>
                        <Box display={"column"}>
                            <Heading as="h3"
                                variant="section-title"
                                fontSize="1.5rem"
                                color={useColorModeValue("black", "purple.400")}
                            >
                                # BTC:
                            </Heading>
                            <Text
                                fontSize="1.2rem"
                                color={useColorModeValue("black", "white")}
                                p={2}
                                align="center"
                                alignSelf={"center"}
                                flexWrap={"wrap"}
                            >
                                bc1q5qmnzhxlv9dn6pjzc4nv9w76scyn64wcm5ur0x
                            </Text>
                        </Box>
                        <Box display={"column"}>
                            <Heading as="h3"
                                variant="section-title"
                                fontSize="1.5rem"
                                color={useColorModeValue("black", "purple.400")}
                            >
                                # ETH:
                            </Heading>
                            <Text
                                fontSize="1.2rem"
                                color={useColorModeValue("black", "white")}
                                p={2}
                                align="center"
                                alignSelf={"center"}
                                flexWrap={"wrap"}
                            >
                                0xd5e3E7e717Ad5e2728b64d3D23D3a2132cAB9564
                            </Text>
                        </Box>
                        <Box display={"column"}>
                            <Heading as="h3"
                                variant="section-title"
                                fontSize="1.5rem"
                                color={useColorModeValue("black", "purple.400")}
                            >
                                # SOL:
                            </Heading>
                            <Text
                                fontSize="1.2rem"
                                color={useColorModeValue("black", "white")}
                                p={2}
                                align="center"
                                alignSelf={"center"}
                                flexWrap={"wrap"}
                            >
                                CrC1AVxNddg74GJHjJBZzfnDNoM4JFGjWwVwZAFBpeYD
                            </Text>
                        </Box>
                        <Box display={"column"}>
                            <Heading as="h3"
                                variant="section-title"
                                fontSize="1.5rem"
                                color={useColorModeValue("black", "purple.400")}
                            >
                                # TON:
                            </Heading>
                            <Text
                                fontSize="1.2rem"
                                color={useColorModeValue("black", "white")}
                                p={2}
                                align="center"
                                alignSelf={"center"}
                                flexWrap={"wrap"}
                            >
                                EQCmxr8QYpdow8O-gM2P9t4xnkdQCoQnypLx17hpNx3IqzA0
                            </Text>
                        </Box>
                        <Box display={"column"}>
                            <Heading as="h3"
                                variant="section-title"
                                fontSize="1.5rem"
                                color={useColorModeValue("black", "purple.400")}
                            >
                                # TRX:
                            </Heading>
                            <Text
                                fontSize="1.2rem"
                                color={useColorModeValue("black", "white")}
                                p={2}
                                align="center"
                                alignSelf={"center"}
                                flexWrap={"wrap"}
                            >
                                TTP5DX9gdy1ihBphuSF9nGy5pKzEvD7nkT
                            </Text>
                        </Box>
                        <Box display={"column"}>
                            <Heading as="h3"
                                variant="section-title"
                                fontSize="1.5rem"
                                color={useColorModeValue("black", "purple.400")}
                            >
                                # ko-fi:
                            </Heading>
                            <Text
                                fontSize="1.2rem"
                                color={useColorModeValue("black", "white")}
                                p={2}
                                align="center"
                                alignSelf={"center"}
                                flexWrap={"wrap"}
                            >
                                <NextLink href="https://ko-fi.com/kenjitheman" target="_blank">
                                    ko-fi.com/kenjitheman
                                </NextLink>
                            </Text>
                        </Box>
                    </Section>
                </Box >
                <Divider />
                <Box my={4} align="center">
                    <Button
                        as={NextLink}
                        href="/"
                        p={8}
                        fontSize={"xl"}
                        fontWeight={"bold"}
                        rounded={"2xl"}
                        bg={"transparent"}
                        border={"1px solid"}
                        borderColor={useColorModeValue("gray.300", "gray.700")}
                    >
                        homepage
                    </Button>
                </Box>
            </Container >
        </Layout >
    );
};

export default Support;
