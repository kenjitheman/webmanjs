import Head from "next/head";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelDogLoader from "../model_loader";

const LazyVoxelDog = dynamic(() => import("../model"), {
    ssr: false,
    loading: () => <VoxelDogLoader />
});

const description = "Hey there! I’m just a guy, software engineer, tech enthusiast, weeaboo guy, life enjoyer, a quest to elevate my developer workflow, build high-performance projects, explore the intricacies of memory, and craft remarkable software.";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={description} />
                <meta name="author" content="kenjitheman" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="kenjitheman" />
                <meta name="og:title" content="kenjitheman" />
                <meta property="og:type" content="website" />
                <title>kenjitheman</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.xl" pt={14}>
                <LazyVoxelDog />

                <AnimatePresence initial={true} mode="wait">
                    {children}
                </AnimatePresence>

                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
