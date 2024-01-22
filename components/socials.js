import React from "react";
import { Button, Container, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaTelegram, FaTwitter, FaLinkedin, FaRedditAlien } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const SocialLinks = () => (
    <Container>
        <List
            style={{
                display: "flex",
                flexDirection: { base: "column", md: "row" },
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: { base: "center", md: "space-around" },
                width: "100%",
                margin: "auto"
            }}
        >
            <List style={{ width: { base: "100%", md: "48%" }, margin: "auto" }}>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://github.com/kenjitheman" target="_blank">
                        <Button
                            variant="ghost"
                            p={7}
                            color={useColorModeValue("black", "purple.400")}
                            leftIcon={<FaGithub size={30} />}
                            rounded="2xl"
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://t.me/kenjitheman" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            leftIcon={<FaTelegram size={30} />}
                            fontSize="1.2rem"
                            rounded="2xl"
                            p={7}
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://twitter.com/kenjitheman" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaTwitter size={30} />}
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
            </List>

            <List style={{ width: { base: "100%", md: "48%" }, margin: "auto" }}>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.reddit.com/user/kenjitheman" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaRedditAlien size={30} />}
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.linkedin.com/in/kenjitheman/" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaLinkedin size={30} />}
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="mailto:btwdesu@gmail.com" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<MdAlternateEmail size={30} />}
                            fontSize="1.2rem"
                        >
                            email
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </List>
    </Container>
);

export default SocialLinks;
