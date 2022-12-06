
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";
import { Homes } from "../components/home/inicio";
import { Botao } from "../components/home/inicio/botao";
import { Header } from "../components/home/header";
import { MenuNav } from "../components/home/header/navmenu";
import { Identidade } from "../components/home/sobre";


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <Flex flexDirection={'column'} bg='gray.300'>
        <Box>

          <Flex justify='center' align='center' id='Homes'>
            <Homes/>
            <Box position='absolute' display={'flex'} justifyItems='center'>
              <Botao id="menu" />
            </Box>
          </Flex>
          
        </Box>

        <Box id='menu'>
          <Header>
              <MenuNav children="sobre" title="Sobre"/>
              <MenuNav children="da" title="Habilidades"/>
              <MenuNav children="das" title="Projetos"/>
            </Header>
        </Box>
        <Flex>
          <section id='sobre'>
            <Identidade/>
          </section>
        </Flex>
            
        
          

      </Flex>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
