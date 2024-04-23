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
                width="container.lg"
            >
                <Heading as="h1">support me</Heading>
                <Box display={{ md: "flex" }} style={{ marginTop: "5%" }} width="container.xl">
                    <br />
                    <Section delay={0.4}>
                        <Box display={{ md: "flex" }}>
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
                            >
                                bc1q5qmnzhxlv9dn6pjzc4nv9w76scyn64wcm5ur0x
                            </Text>
                        </Box>
                        <Box display={{ md: "flex" }}>
                            <Heading as="h3"
                                variant="section-title"
                                fontSize="1.5rem"
                                color={useColorModeValue("black", "purple.400")}
                            >
                                # ETH:
                            </Heading>
                            <Text
                                // copy on click
                                onClick={() => navigator.clipboard.writeText("0xd5e3E7e717Ad5e2728b64d3D23D3a2132cAB9564")}

                                fontSize="1.2rem"
                                color={useColorModeValue("black", "white")}
                                p={2}
                                align="center"
                                alignSelf={"center"}
                            >
                                0xd5e3E7e717Ad5e2728b64d3D23D3a2132cAB9564
                            </Text>
                        </Box>
                        <Box display={{ md: "flex" }}>
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
                            >
                                CrC1AVxNddg74GJHjJBZzfnDNoM4JFGjWwVwZAFBpeYD
                            </Text>
                        </Box>
                        <Box display={{ md: "flex" }}>
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
                            >
                                EQCmxr8QYpdow8O-gM2P9t4xnkdQCoQnypLx17hpNx3IqzA0
                            </Text>
                        </Box>
                        <Box display={{ md: "flex" }}>
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
                            >
                                TTP5DX9gdy1ihBphuSF9nGy5pKzEvD7nkT
                            </Text>
                        </Box>
                        <Box display={{ md: "flex" }}>
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
                            >
                                <NextLink href="https://ko-fi.com/kenjitheman" target="_blank">
                                    ko-fi.com/kenjitheman
                                </NextLink>
                            </Text>
                        </Box>
                    </Section>
                </Box>
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
            </Container>
        </Layout >
    );
};

export default Support;
