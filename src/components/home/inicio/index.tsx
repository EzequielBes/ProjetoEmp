import { Flex, Box, Image, Button, calc, position } from "@chakra-ui/react";
import { useMovieContextHook } from "../../../context/movies";


interface eventProps {
  handletrans: () => void;
}

export function Homes() {
  
  return (
    <Flex justify="center" align="center" flexDirection={"column"} h='100vh'>
      <Box background="rgba(000,222,999,0.9)">
        <Image
          src="https://i.gifer.com/HCfC.gif"
          objectFit="cover"
          width="100vw"
          height="100vh"
          filter="auto"
          blur="4px"
          brightness="50%"
        />
        
      </Box>
    </Flex>
  );
}
