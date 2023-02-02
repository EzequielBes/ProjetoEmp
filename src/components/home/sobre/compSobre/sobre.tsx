import { Flex, Box, Text, Img, Image, Stack } from "@chakra-ui/react";

export function Sobre() {
  let dataAtual = new Date();
  let nascimento = new Date("09/13/2003");

  let timedif = Math.abs(dataAtual.getTime() - nascimento.getTime());
  let diffDays = Math.ceil(timedif / (1000 * 3600 * 24));
  let idade = Math.floor(diffDays / 365);

  return (
    <Flex
      justifyContent={["center  ", "space-between"]}
      flexDirection={["column", "row"]}
      w="80%"
      alignItems={"center"}
    >
      <Flex
        flexDirection="column"
        w={["90%", "50%"]}
        justifyContent="center"
        align={["center", "normal"]}
      >
        <Box mb="10px">
          <Text
            fontFamily="Orbitron"
            fontSize={["1.2rem", "2xl"]}
            fontWeight={"bold"}
            color="purple.600"
          >
            Sobre mim
          </Text>
        </Box>
        <Flex
          flexDirection={"column"}
          justifyContent="center"
          fontFamily={"Roboto"}
          fontWeight="400"
          fontSize={["0.9rem", "20px"]}
          color="gray.800"
          h={["50%", "100%"]}
        >
          <Text mb="10px" borderBottom={"1px solid black"}>
            <strong>Hello!</strong>
          </Text>
          <Stack justify={'center'}>
            
            <Text fontSize={14} fontFamily='Roboto'>
              Meu nome é Ezequiel e tenho {idade} anos. Estou cursando Ciências da
              Computação e sou um desenvolvedor web focado em Front End com
              ReactJS. Além disso, tenho algum conhecimento em NodeJS e trabalho
              com bancos de dados relacionais, tais como MySQL e PostgreSQL.
            </Text>
            <Text fontSize={14} fontFamily='Roboto'>
              Com a minha paixão por tecnologia e desenvolvimento de software,
              tenho trabalhado duro para aperfeiçoar minhas habilidades e
              conhecimentos. Acredito que o conhecimento é poder e estou sempre
              procurando aprender algo novo e desafiante.
            </Text>
            <Text fontSize={14} fontFamily='Roboto'>
              Meu objetivo é construir soluções inovadoras e de alta qualidade
              para ajudar empresas a alcançarem seus objetivos de negócios e
              melhorar a experiência dos usuários.
            </Text>
            <Text fontSize={14} fontFamily='Roboto'>
              Estou animado para trabalhar em projetos interessantes e
              desafiantes, e estou sempre disposto a colaborar e aprender com
              colegas de equipe.
            </Text>
            <Text fontSize={14} fontFamily='Roboto'>
              Obrigado por seu tempo e consideração. Estou ansioso por colaborar
              com vocês!
            </Text>
          </Stack>
        </Flex>
      </Flex>

      <Box w={["100px", "150px"]} borderRadius="full">
        <Image
          src="https://avatars.githubusercontent.com/u/113632597?s=400&u=353f610858d97c1a17be0449048212bb176b7914&v=4"
          borderRadius="full"
        />
      </Box>
    </Flex>
  );
}
