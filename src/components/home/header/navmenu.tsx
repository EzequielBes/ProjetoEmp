import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-scroll";

interface menuNavProps {
  fore: string;
  title: string;
}

export function MenuNav({ title,fore }: menuNavProps) {
  return (
    <List display={"flex"}>
      <ListItem
        width={"180px"}
        display="flex"
        justifyContent={"center"}
        gap="20px"
        border={"1px solid black"}
        margin="0 2px"
        padding="5px"
        borderRadius='10px'
        bg="blue.900"
        color="white"
        cursor="pointer"
        fontSize="20px"
        transition={"all ease 0.2s"}
        fontFamily="Orbitron"
        _hover={{
          color: "purple.400",
        }}
      >
        <Link
          smooth={true}
          spy={true}
          duration={500}
          offset={-70}
          to={fore}
        >
          {title}
        </Link>
      </ListItem>
    </List>
  );
}
