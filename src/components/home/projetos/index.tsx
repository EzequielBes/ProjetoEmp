import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
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
        <Grid
          templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
          gap={6}
          alignContent={["center", "normal"]}
        >
          {projet.map((item, index) => (
            <Flex
              key={index}
              bg="gray.600"
              height="150px"
              w="150px"
              align="center"
              justify="center"
              color="blue.300"
              borderRadius="20px"
            >
              <Link href={item.url} w="100%" h="100%">
                {item.logo !== null && (
                  <Image
                    src={item.logo}
                    w="100%"
                    h="100%"
                    borderRadius="10px"
                    alt="Projetos"
                  />
                )}{" "}
                {item.logo === null && (
                  <Link
                    href=""
                    display="flex"
                    alignItems="center"
                    justifyContent={"center"}
                    h="100%"
                    w="100%"
                  >
                    Em breve!
                  </Link>
                )}
              </Link>
            </Flex>
          ))}
        </Grid>
      </Paralax>
    </Flex>
  );
}
