import { Box, Button, chakra, Container, Heading, Link, List, ListItem, useColorModeValue } from "@chakra-ui/react";
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
        title="btwkenji"
        description="Software Developer"
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
            >
                ¯\_(ツ)_/¯ | ( ゜-゜) | (º _ º)
            </Box>

            <Box display={{ md: "flex" }} style={{ marginBottom: "5%" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        btwkenji
                    </Heading>
                    <p>Software developer</p>
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
                <Paragraph>
                    Just a guy, an enthusiast on a mission to elevate my developer workflow, construct high-performance projects, delve into the intricacies of memory, and ultimately engineer remarkable software. Wondering about my tech expertise and preferences? Here's a glimpse into my realm:
                </Paragraph>
                <br />
                <Paragraph>
                    My toolkit is a dynamic amalgamation of various languages, frameworks, and libraries, each meticulously selected for its distinct purpose. Notably, btw, my Neovim setup on Arch Linux is a sleek masterpiece, with dotfiles curated to perfection for both optimal performance and aesthetics.
                </Paragraph>
                <br />
                <Paragraph>
                    My days unfold with the rhythm of lines of code, debugging sessions, and the gratification of solving challenges, all while continually learning and exploring new horizons. I approach technology with passion, finding joy and fun in every aspect.
                </Paragraph>
                <Paragraph>
                    — Member of the #no_js club.
                </Paragraph>
            </Section>
            <Section delay={0.2}>
                <Container maxW="70%">
                    <a href="https://github.com/ryo-ma/github-profile-trophy">
                        <img
                            mx="auto"
                            width="100%"
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=btwkenji&hide_border=false&layout=compact&hide_progress=false&hide=jupyter%20notebook&langs_count=20&theme=${useColorModeValue("white", "radical")}`}
                            alt="most used languages"
                        />
                    </a>
                </Container>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    大好きです：
                </Heading>
                <Paragraph
                    fontSize="1.3rem"
                >
                    <Link
                        href="https://github.com/btwkenji"
                        target="_blank"
                        color={useColorModeValue("black", "purple.400")}
                    >
                        Coding, neovim, programming, linux, software engineering, software, CS, software development, dotfiles
                    </Link>
                    ,{"  "}
                    <Link
                        href="https://myanimelist.net/profile/btwkenji"
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
                    Me on the web:
                </Heading>
                <Socials />
            </Section>
        </Container>
    </Layout >
);

export default Home;
export { getServerSideProps } from "../components/chakra";
