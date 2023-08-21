import NextLink from "next/link";
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
  IoLogoLinkedin,
  IoLogoReddit,
  IoLogoTwitter,
} from "react-icons/io5";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
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
        hello, i&apos;m Dimitri, backend developer/software engineer
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            kenjitheman
          </Heading>
          <p>software enginner/backend developer</p>
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
        <Heading as="h3" variant="section-title">
          who_am_i
        </Heading>
        <Paragraph>
          I&apos;m a passionate backend developer. My tech stack these days: Golang,
          Rust, Node.js, JavaScript, TypeScript, Elixir, Python and i also had a
          short experience with c/c++/lua. Also can be full stack developer, but
          i don&apos;t like it, but if i need - i can, I&apos;m interested in backend
          stuff and want to position myself as a backend developer. Below you
          will find my technology stack.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          my stack these days:
        </Heading>
        <BioSection>
          <p style={{ textAlign: "center" }}>
            <a href="https://skillicons.dev">
              <img
                style={{ textAlign: "center", marginTop: "10%" }}
                src="https://skillicons.dev/icons?i=golang,rust,ts,nodejs,js,elixir,bash,lua,py,c,cpp,linux,neovim,git,github,githubactions,html,css,sass,react,nextjs,nestjs,mysql,postgres,sqlite,mongodb,redis,graphql,docker,kubernetes,aws,cloudflare,nginx,postman,rabbitmq,threejs&perline=6"
                alt="tech stack"
              />
            </a>
          </p>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <BioSection style={{ marginBottom: "10px" }}>
          <p style={{ textAlign: "center" }}>
            <a href="https://github.com/ryo-ma/github-profile-trophy">
              <img
                style={{ width: "80%" }}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=kenjitheman&hide_border=false&theme=radical&layout=compact&hide_progress=false&hide=jupyter%20notebook&langs_count=10"
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
            coding, programming, software enginnering
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

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          socials:
        </Heading>
        <List style={{ textAlign: "center" }}>
          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
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
                colorScheme="teal"
                leftIcon={<FaTelegram />}
              >
                @kenjitheman
              </Button>
            </Link>
          </ListItem>

          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="https://twitter.com/kenjith3man" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @kenjith3man
              </Button>
            </Link>
          </ListItem>

          <ListItem style={{ paddingBottom: "1%" }}>
            <Link
              href="https://www.linkedin.com/in/kenjitheman"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @kenjitheman
              </Button>
            </Link>
          </ListItem>

          <ListItem style={{ paddingBottom: "1%" }}>
            <Link
              href="https://www.reddit.com/user/shikigayomi"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoReddit />}
              >
                @kenjitheman
              </Button>
            </Link>
          </ListItem>

          <ListItem style={{ paddingBottom: "1%" }}>
            <Link href="mailto:kenjitheman@proton.me" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                kenjitheman@proton.me
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          <p>
            let&apos;s work !
          </p>
        </Heading>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://t.me/kenjitheman"
            scroll={false}
            leftIcon={<FaTelegramPlane />}
            colorScheme="teal"
          >
            contact me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
