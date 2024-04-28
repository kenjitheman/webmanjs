import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import FootprintIcon from "./icons/footprint";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 30px;
display: inline-flex;
cursor: pointer;
padding: 0.4rem;
align-items: center;
justify-content: center;
align-self: center;
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
                    color={useColorModeValue("black", "white")}
                    fontWeight="bold"
                >
                    kenjitheman
                </Text>
            </LogoBox>

        </Link>)
    );
};

export default Logo;
