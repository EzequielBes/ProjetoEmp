import {motion} from 'framer-motion'
import {Box, Flex, FlexProps, GridProps,Grid} from '@chakra-ui/react'

export const animetionFlex = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(255, 255, 255, 0)"
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)"
      }
    };

export const MotionFlex = motion<FlexProps>(Flex)