import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SiGmail,SiGithub } from 'react-icons/si'
export function Footer() {

  return (
    <Flex height='200px' bg='gray.600' justifyContent={'center'}>
      <Flex w='80vw' justifyContent='center' flexDir={'column'}>
        <Box>
          <Text fontWeight='bold'>Criado por Ezequiel</Text>
        </Box>
        <Box>
          <Text color='blue.400'>Contato:</Text>
          <Flex align={'center'} gap='10px'>
            <Icon as={SiGmail}/>
            <Text fontFamily='Roboto' fontWeight='500' fontSize='17px'>ezequieltdbeserra@gmail.com</Text>
          </Flex>
          <Flex align={'center'} gap='10px'>
            <Icon as={SiGithub}/>
            <Text fontFamily='Roboto' fontWeight='500' fontSize='17px'>https://github.com/EzequielBes</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}