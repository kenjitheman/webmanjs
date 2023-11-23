import {
    Box,
    Button,
    chakra,
    Container,
    Heading,
    Link,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react";
import { MdAlternateEmail } from "react-icons/md";
import Paragraph from "../components/paragraph";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Image from "next/image";
import { FaGithub, FaTelegram } from "react-icons/fa6";

const ProfileImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
    <Layout
        title="kenjitheman"
        description="software developer"
    >
        <Container
            maxW="container.md"
        >
            <Box
                borderRadius="xl"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
                css={{ backdropFilter: "blur(10px)" }}
            >
                ¯\_(ツ)_/¯ | ( ゜-゜) | (º _ º)
            </Box>

            <Box display={{ md: "flex" }} style={{ marginBottom: "5%" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        kenjitheman
                    </Heading>
                    <p>software developer</p>
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
                    Curious about my tech expertise and preferences? Well, here's a glimpse into my world:
                </Paragraph>
                <Paragraph>
                    In my toolbox, i have a dynamic array of languages, frameworks and libraries, each serving a unique purpose of course.
                    Btw I have a sleek neovim setup that's nothing short of a work of art
                    and, as a devoted arch linux user. I've meticulously curated my dotfiles for optimal performance and aesthetics.
                </Paragraph>
                <br />
                <Paragraph>
                    My days are filled with lines of code, debugging sessions, and the exhilarating satisfaction of solving problems and of course learning and exploring more and more.
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
                <Heading as="h3" variant="section-title">
                    大好きです：
                </Heading>
                <Paragraph
                    fontSize="1.3rem"
                >
                    <Link
                        href="https://github.com/kenjitheman"
                        target="_blank"
                        color={useColorModeValue("black", "purple.400")}
                    >
                        coding, neovim, programming, linux, software engineering, software, CS, software development, dotfiles
                    </Link>
                    ,{"  "}
                    <Link
                        href="https://myanimelist.net/profile/kenjitheman"
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
                    me on the web:
                </Heading>
                <List style={{ textAlign: "center" }}>
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
                        <Link href="mailto:kenjith3man@gmail.com" target="_blank">
                            <Button
                                variant="ghost"
                                color={useColorModeValue("black", "purple.400")}
                                p={7}
                                rounded="2xl"
                                leftIcon={<MdAlternateEmail size={30} />}
                                fontSize="1.2rem"
                            >
                                mail2me
                            </Button>
                        </Link>
                    </ListItem>
                </List>

            </Section>
        </Container>
    </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
