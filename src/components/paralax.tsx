import { Box } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import {useRef} from 'react'




export function Paralax({children, ...rest}:any) {

    const ref = useRef(null)
    const isInView = useInView(ref) 

    return (
        <Box ref={ref} style={{
            position: 'relative',
            transition: 'all ease 1.3s',
            opacity: isInView ? '1' : '0',
            transform: isInView ? "translateY(-40px)" : "translateY(200px)"
        }}
        {...rest} >
            {children}
        </Box>
    )
}