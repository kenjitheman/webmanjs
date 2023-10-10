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
import { EmailIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import {
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        sup, i&apos;m kenjitheman
      </Box>

      <Box display={{ md: "flex" }} style={{ marginBottom: "5%" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            kenjitheman
          </Heading>
          <p>software developer/backend developer</p>
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
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/man.jpeg"
              alt="profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Paragraph>
          curious about my tech expertise and preferences? well, here's a glimpse into my world:
        </Paragraph>
        <Paragraph>
          in my toolbox, i have a dynamic array of languages, frameworks and libraries, each serving a unique purpose of course,
          also i have a sleek neovim setup that's nothing short of a work of art
          and, as a devoted arch linux user, I've meticulously curated my dotfiles for optimal performance and aesthetics
        </Paragraph>
        <br />
        <Paragraph>
          my days are filled with lines of code, debugging sessions, and the exhilarating satisfaction of solving problems and of course learning and exploring more and more
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <BioSection style={{ marginBottom: "10px" }}>
          <p style={{ textAlign: "center" }}>
            <a href="https://github.com/ryo-ma/github-profile-trophy">
              <img
                style={{ width: "90%" }}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=kenjitheman&hide_border=false&theme=radical&layout=compact&hide_progress=false&hide=jupyter%20notebook&langs_count=20"
                alt="most used langs"
              />
            </a>
          </p>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </Heading>
        <Paragraph style={{ textAlign: "center" }}>
          <Link href="https://github.com/kenjitheman" target="_blank">
            coding, neovim, programming, linux, software engineering, software, CS, software development, dotfiles
          </Link>
          ,{"  "}
          <Link
            href="https://myanimelist.net/profile/shikigayomi"
            target="_blank"
          >
            anime
          </Link>
          , knowledge
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          me on the web:
        </Heading>
        <List style={{ textAlign: "center" }}>
          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="https://github.com/kenjitheman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoGithub />}
              >
                @kenjitheman
              </Button>
            </Link>
          </ListItem>
          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="https://t.me/kenjitheman" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<FaTelegram />}
              >
                @kenjitheman
              </Button>
            </Link>
          </ListItem>

          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="mailto:kenjith3man@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<EmailIcon />}
              >
                mail_me
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
