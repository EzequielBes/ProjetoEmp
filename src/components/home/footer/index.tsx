import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { SiGmail,SiGithub,SiLinkedin } from 'react-icons/si'
export function Footer() {

  return (
    <Flex height='200px' bg='gray.600' justifyContent={'center'}>
      <Flex w='80vw' justifyContent='center' flexDir={'column'}>
        <Box>
          <Text fontWeight='bold'>Criado por Ezequiel</Text>
        </Box>
        <Box color='white'>
          <Text color='blue.400'>Contato:</Text>
          <Flex align={'center'} gap='10px'>
            <Icon as={SiGmail}/>
            <Text fontFamily='Roboto' fontWeight='500' fontSize='17px'>ezequieltbeserra00@gmail.com</Text>
          </Flex>
          <Flex align={'center'} gap='10px'>
            <Icon as={SiGithub}/>
            <Text fontFamily='Roboto' fontWeight='500' fontSize='17px'><a href='https://github.com/EzequielBes'>https://github.com/EzequielBes</a></Text>
          </Flex>
          <Flex align={'center'} gap='10px'>
            <Icon as={SiLinkedin}/>
            <Text fontFamily='Roboto' fontWeight='500' fontSize='17px'><a href='linkedin.com/in/ezequieltb'>linkedin.com/in/ezequieltb</a></Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}