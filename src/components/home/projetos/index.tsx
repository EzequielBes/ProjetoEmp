import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Project } from "../../../api/Projetos";
import { Paralax } from "../../paralax";

export function Projetos() {
  const [projet, setProjet] = useState(Project);

  function showProject() {}

  return (
    <Flex h="100vh" justifyContent="center" flexDirection="column">
      <Paralax>
        <Text fontFamily="Roboto" fontWeight="700" fontSize="1.2rem">
          Projetos
        </Text>
        <Grid  templateColumns='repeat(3, 1fr)' gap={6}>
        {projet.map((item, index) => (
          <Flex key={index} bg='gray.600' height='150px' w='150px' align='center' justify='center' color='blue.300' borderRadius='20px'>
            <a href={item.url}>{item.title}</a>
          </Flex>
        ))}
         </Grid>
      </Paralax>
    </Flex>
  );
}
