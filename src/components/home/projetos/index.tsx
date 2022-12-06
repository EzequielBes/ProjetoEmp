import { Box, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Project } from "../../../api/Projetos"
import { Paralax } from "../../paralax"

export function Projetos() {
  const [projet, setProjet] = useState(Project)
  
  function showProject(){
    
  }

  return(
    
    <Flex h='100vh'justifyContent='center' flexDirection='column'>
      <Paralax>
      <Text fontFamily='Roboto' fontWeight='700' fontSize='1.2rem'>Projetos</Text>

      {projet.map((item,index)=>(
        <div key={index}>
          
          <a href={item.url}>{item.title}</a>
        </div>
      ))}
      </Paralax>
    </Flex>
    
  )
}