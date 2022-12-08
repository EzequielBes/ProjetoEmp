import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { Habilidades } from "./sobre/compSobre/habilidades";
import { Header } from "./header";
import { MenuNav } from "./header/navmenu";
import { Homes } from "./inicio";
import { Botao } from "./inicio/botao";
import { Identidade } from "./sobre";
import { useEffect, useState, useRef } from "react";
import { useScroll, useInView } from "framer-motion";
import { Projetos } from "./projetos";
import { Footer } from "./footer";

export function CoHome() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <Box overflow="hidden">
      <Box id="initial" ref={ref} h="100vh">
        <Flex  flexDirection="column" justify="center" align="center">
          <Homes />
          <Box position="absolute">
            <Botao ide="sobre" />
          </Box>
        </Flex>
      </Box>

      <Box h={[0,0,'100px']} overflow="hidden">
        <Flex
          style={{
            position: isInView ? "static" : "fixed",
            top: isInView ? "" : "0",
            zIndex: isInView ? "-1" : "999",
            display: isInView ? "" : "block",
            transition: "all ease 0.5s",
            opacity: isInView ? "0" : "1",
            width: "120vw",
            transform: isInView ? "translateX(-200px)" : "none",
            backgroundColor: isInView ? "" : "black",
          }}
        >
          <Header>
            <MenuNav fore="sobre" title="Sobre"></MenuNav>
            <MenuNav fore="habilidades" title="Habilidades"></MenuNav>
            <MenuNav fore="projetos" title="Projetos"></MenuNav>
            <MenuNav fore="contato" title="Contato"></MenuNav>
          </Header>
        </Flex>
      </Box>

      <Box>
        <Flex flexDirection="column" w="80vw" margin="0 auto">
          <Box id="sobre">
            <Identidade />
          </Box>
          <Box
            id="habilidades"
            w="80vw"
            margin=" auto"
            height="100vh"
            textAlign={"center"}
          >
            <Habilidades />
          </Box>
          <Box id="projetos">
            <Projetos />
          </Box>
        </Flex>
      </Box>
      <Box id="contato">
        <Footer />
      </Box>
    </Box>
  );
}
