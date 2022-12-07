import { Flex, Box, Image, Button, calc, position, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMovieContextHook } from "../../../context/movies";


interface eventProps {
  handletrans: () => void;
}


export function Homes() {

  const [hour,setHour] = useState<any>()
  const [minuts,setMinuts] = useState<any>()

  useEffect(()=>{
    setInterval(hours,1000)
  },[hours])

  function hours(){
    const date = new Date()
    let hour = date.getHours()
    let minut = date.getMinutes()
    
    if(hour < 10){
      setHour('0'+ hour)
    }else{
      setHour(hour)
    }
    if(minut < 10) {
      setMinuts('0' + minut)
    }else{
      setMinuts(minut)
    }
  }
  

  
  return (
    <Flex justify="center" align="center" flexDirection={"column"} h='100vh'>
      <Box background="rgba(000,222,999,0.9)">
        <Image
          src="https://i.gifer.com/HCfC.gif"
          objectFit="cover"
          width="100vw"
          height="100vh"
          filter="auto"
          blur="4px"
          brightness="50%"
        />
      </Box>
      <Box position={'absolute'} zIndex='999' left='20%'><Text fontSize='20px' fontWeight='700' fontFamily='Roboto'>{hour}:{minuts}</Text></Box>
    </Flex>
  );
}
