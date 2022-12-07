import { Hability } from "../../../../api/habil";
import { useContext, useState } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useMovieContextHook } from "../../../../context/movies";
import { Button } from "react-scroll";
import { Paralax } from "../../../paralax";

export function Habilidades() {
  const [habili, setHabili] = useState(Hability);

  function renderConhecimentos(item: any) {
    const showHabilidades = item.show;
    const habilidades = habili.map((habilidade) => {
      if (item.id === habilidade.id) {
        item.show = !showHabilidades;
      } else {
        habilidade.show = false;
      }
      return habilidade;
    });
    setHabili(habilidades);
  }

  return (
    <Paralax>
      <Grid templateColumns={['repeat(2,1fr)','repeat(3, 1fr)']} gap={[2,6]} height="100vh" alignContent='center' justifyContent={'center'}>
          <Text fontFamily='Roboto' mb='20px' fontSize={[15,20]} fontWeight='700'>Conhecimentos/Habilidades</Text>
          {habili.map((item: any, index) => (
            <Box
              onClick={() => renderConhecimentos(item)}
              key={index}
              marginBottom="20px"
              fontSize={[15,20]}
            >
              <Flex flexDirection='column' w={['40vw','20vw']}h='20vh' align='center'justify={'center'} bg='gray.600' borderRadius='0.25rem'>
                <Box color='purple.500'>{item.title}</Box>
                <Box fontSize='40px' cursor='pointer' color='blue.500'>{<item.icone />}</Box>
                <Box>{item.show && item.conhecimentos}</Box>
              </Flex>
            </Box>
          ))}
      </Grid>
      </Paralax>
    
  );
    
    
}
