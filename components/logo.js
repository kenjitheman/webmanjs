import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import FootprintIcon from "./icons/footprint";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 30px;
display: inline-flex;
align-items: center;
> svg {
    transition: 200ms ease;
}

    &:hover > svg {
        transform: rotate(360deg);
    }
`;

const Logo = () => {
    return (
        (<Link href="/" scroll={false}>

            <LogoBox>
                <FootprintIcon />
                <Text
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    fontWeight="bold"
                    mr={2}
                >
                    btwkenji
                </Text>
            </LogoBox>

        </Link>)
    );
};

export default Logo;
