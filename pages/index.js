import { Box, Button, chakra, Text, Container, Heading, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Image from "next/image";
import { FaGithub, FaTelegram, FaXTwitter, FaLinkedin, FaRedditAlien } from "react-icons/fa6";
import Socials from "../components/socials";

const ProfileImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
});

const Home = () => (
    <Layout
        title="kenjitheman"
        description="Software Engineer, Tech Enthusiast, Weeaboo, Life Enjoyer"
    >
        <Container
            maxW="container.md"
        >
            <Box
                borderRadius="xl"
                mb={6}
                p={3}
                textAlign="center"
                bg={"transparent"}
                fontSize={"xl"}
                fontWeight={"bold"}
                rounded={"2xl"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.900")}
                css={{ backdropFilter: "blur(10px)" }}
                color={useColorModeValue("black", "white")}
            >
                ¯\_(ツ)_/¯ | ( ゜-゜) | (º _ º)
            </Box>

            <Box display={{ md: "flex" }} style={{ marginBottom: "5%" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" color={useColorModeValue("black", "white")}>
                        # kenjitheman
                    </Heading>
                    <Text color={useColorModeValue("black", "gray.200")}>
                        ["Software Engineer", "Tech Enthusiast", "Weeaboo", "Life Enjoyer" ]
                    </Text>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="3xl"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/man.jpeg"
                            alt="profile image"
                            borderRadius="3xl"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Paragraph color={useColorModeValue("black", "gray.200")}>
                    Hey there! I’m just a guy, software engineer, tech enthusiast, weeaboo guy, life enjoyer, a quest to elevate my developer workflow, build high-performance projects, explore the intricacies of memory, and craft remarkable software.
                </Paragraph>
                <br />
                <Paragraph color={useColorModeValue("black", "gray.200")}>
                    Try to live by the philosophy of “Do what you love, love what you do.” I’m passionate about technology, and I’m always eager to learn and grow. I’m a software engineer, and I’m constantly striving to improve my skills and knowledge. I’m a big fan of open-source software and the Linux ecosystem. I’m also a huge fan of the Rust programming language and the Go programming language. I’m always looking for ways to improve my workflow and make my life easier.
                </Paragraph>
                <br />
                <Paragraph color={useColorModeValue("black", "gray.200")}>
                    Love my neovim (btw) setup on Arch Linux (btw), and I’m always tweaking my dotfiles to make them perfect for both performance and aesthetics. My days are filled with the rhythm of lines of code, debugging/anime watching/manga reading sessions, and the satisfaction of solving problems. I approach software with passion, finding joy and fun in every aspect.
                </Paragraph>
                <Paragraph color={useColorModeValue("black", "gray.200")}>
                    I’m always looking for new challenges and new ways to improve myself and continue this endless cycle of self-improvement.
                </Paragraph>
            </Section>
            <Section delay={0.2}>
                <Container maxW="70%">
                    <a href="https://github.com/ryo-ma/github-profile-trophy">
                        <img
                            mx="auto"
                            width="100%"
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=kenjitheman&hide_border=false&layout=compact&hide_progress=false&hide=jupyter%20notebook&langs_count=20&theme=${useColorModeValue("white", "radical")}`}
                            alt="most used languages"
                        />
                    </a>
                </Container>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" color={useColorModeValue("black", "white")}>
                    # 大好きです
                </Heading>
                <Paragraph
                    fontSize="1.3rem"
                    color={useColorModeValue("black", "gray.200")}
                >
                    <Link
                        href="https://github.com/kenjitheman"
                        target="_blank"
                        color={useColorModeValue("black", "purple.400")}
                    >
                        Coding, neovim, programming, linux, software engineering, CS, dotfiles, weeaboo stuff
                    </Link>
                    ,{"  "}
                    <Link
                        href="https://myanimelist.net/profile/plastiey"
                        target="_blank"
                        color={useColorModeValue("black", "purple.400")}
                    >
                        anime
                    </Link>
                    , knowledge
                </Paragraph>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3"
                    variant="section-title"
                    fontSize="1.5rem"
                    color={useColorModeValue("black", "purple.400")}
                >
                    # Me on the web
                </Heading>
                <Socials />
            </Section>
        </Container>
    </Layout >
);

export default Home;
export { getServerSideProps } from "../components/chakra";
