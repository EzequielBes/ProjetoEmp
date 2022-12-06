import { Flex, Box, Image, Button, position } from "@chakra-ui/react";
import Head from "next/head";
import { Homes } from "../components/home/inicio";
import { Botao } from "../components/home/inicio/botao";
import { Header } from "../components/home/header";
import { MenuNav } from "../components/home/header/navmenu";
import { Identidade } from "../components/home/sobre";

import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { Habilidades } from "../components/home/sobre/compSobre/habilidades";



export default function Home() {
  const [menuNav, setMenuNav] = useState(0);
  const [pos, setPos] = useState(0);
  const [active, setActive] = useState(false);

  const getHeadPos = () => {
    let p = document.getElementById("menu")?.getBoundingClientRect();
    let local = p?.y;
    return local;
  };

  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      console.log("Page scroll: ", latest);
    });
  }, []);

  

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Flex flexDirection={"column"} bg="gray.300">
        <Box>
          <Flex justify="center" align="center" id="Homes">
            <Homes />
            <Box position="absolute" display={"flex"} justifyItems="center">
              <Botao ide="menu" />
            </Box>
          </Flex>
        </Box>

        
          <section id="menu">
            <Header>
              <MenuNav children="sobre" title="Sobre" />
              <MenuNav children="habilidades" title="Habilidades" />
              <MenuNav children="das" title="Projetos" />
            </Header>
          </section>
        

        <Flex flexDirection={"column"}>
          <section id="sobre">
            <Identidade />
          </section>
          <section id="habilidades">
            <Habilidades/>
          </section>
        </Flex>
      </Flex>
    </div>
  );
}
