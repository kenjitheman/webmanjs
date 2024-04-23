import React from "react";
import { Button, Container, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import { FaXTwitter, FaTelegram, FaReddit, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import { SiMyanimelist } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

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
                    <Link href="https://twitter.com/kenjitheman_" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaXTwitter size={30} />}
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
                    <Link href="https://myanimelist.net/profile/plastiey" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<SiMyanimelist size={30} />}
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
            </List>

            <List style={{ width: { base: "100%", md: "48%" }, margin: "auto" }}>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.reddit.com/user/tsundere_dawg" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={8}
                            rounded="2xl"
                            leftIcon={<FaReddit size={30} />}
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.linkedin.com/in/kenjitheman" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaLinkedinIn size={30} />}
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="https://www.instagram.com/plastiey" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={7}
                            rounded="2xl"
                            leftIcon={<FaInstagram size={30} />}
                            fontSize="1.2rem"
                        >
                            @kenjitheman
                        </Button>
                    </Link>
                </ListItem>
                <ListItem style={{ paddingBottom: "1%" }}>
                    <Link href="mailto:im@kenjitheman.dev" target="_blank">
                        <Button
                            variant="ghost"
                            color={useColorModeValue("black", "purple.400")}
                            p={6}
                            rounded="2xl"
                            leftIcon={<MdOutlineMail size={30} />}
                            fontSize="0.9rem"
                        >
                            im@kenjitheman.dev
                        </Button>
                    </Link>
                </ListItem>
            </List>
        </List>
    </Container>
);

export default SocialLinks;
