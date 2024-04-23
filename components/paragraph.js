import styled from "@emotion/styled";

const Paragraph = styled.p`
    text-align: justify;
    font-size: 1.2rem;
    hyphens: auto;
    word-break: break-word;
    font-family: 'Inter', sans-serif;
    color: ${(props) => (props.color ? props.color : "inherit")};
`;

export default Paragraph;
