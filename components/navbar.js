import { forwardRef } from "react";
import Logo from "./logo";
import NextLink from "next/link";
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme_toggle_button";

const LinkItem = ({ href, target, children, ...props }) => {
    return (
        <Link
            as={NextLink}
            href={href}
            fontWeight="regular"
            fontSize="lg"
            color={useColorModeValue("black", "white")}
            scroll={false}
            p={2.5}
            target={target}
            {...props}
        >
            {children}
        </Link>
    );
};

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
));

const Navbar = (props) => {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("transparent", "transparent")}
            css={{ backdropFilter: "blur(10px)" }}
            justifyContent="space-between"
            borderBottom="1px solid"
            borderBottomColor={useColorModeValue("gray.200", "gray.900")}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.lg"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center">
                    <Heading as="h1" size="lg" color={useColorModeValue("black", "white")}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="https://github.com/kenjitheman?tab=repositories" path={path}>
                        &projects
                    </LinkItem>
                    <LinkItem href="https://t.me/kenjitheman" path={path}>
                        &contact
                    </LinkItem>
                    <LinkItem href="support" path={path}>
                        &support_me
                    </LinkItem>
                    <LinkItem href="https://github.com/kenjitheman/cv/blob/main/cv.pdf" path={path}>
                        &cv
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                                size="lg"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="https://github.com/kenjitheman?tab=repositories">
                                    &projects
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://t.me/kenjitheman">
                                    &contact
                                </MenuItem>
                                <MenuItem
                                    as={MenuLink}
                                    href="support"
                                >
                                    &support_me
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/kenjitheman/cv/blob/main/cv.pdf"
                                >
                                    &cv
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
