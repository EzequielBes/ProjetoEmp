import { Flex, Box, Text, Img, Image } from "@chakra-ui/react";

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
            <strong>Meu nome é Ezequiel Tenho {idade} anos </strong>
          </Text>
          <Text>
            Sou estudante de desenvolvimento Front-end. Buscando sempre evoluir melhorar e expandir meus conhecimentos na area. 
            Procuro sempre ser o mais eficiente e funcional possivel, Pretendo expandir meu conhecimento para o FullStack em um futuro proximo
          </Text>
        </Flex>
      </Flex>

      <Box w={["100px", "150px"]} borderRadius="full">
        <Img src="https://scontent.fgru10-1.fna.fbcdn.net/v/t39.30808-6/288453752_2148782588636503_6166522613233072659_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UzFeWSnN4ZAAX9rMz4s&_nc_ht=scontent.fgru10-1.fna&oh=00_AfB581U1F2_2qqb7yZ4et7H5usaUJK-z3Aal0RS-kl58-A&oe=639C342E" borderRadius='full'/>
      </Box>
    </Flex>
  );
}
