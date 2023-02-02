import {IconType} from 'react-icons'
import {DiJavascript1,} from 'react-icons/di'
import {SiTypescript, SiStyledcomponents,SiHtml5,SiReact,SiCss3,SiChakraui} from 'react-icons/si'

interface HabilityProps  {
  id: number,
  title: string,
  conhecimentos: string,
  show:boolean,
  icone:IconType
}

export const Hability:HabilityProps[] = [
  {
    id: 1,
    title: 'Javascript',
    conhecimentos: 'Desenvolvimento web com javascript. Dom, Refatoração etc',
    show:false,
    icone:DiJavascript1
  },
  {
    id: 2,
    title: 'Typescript',
    conhecimentos: 'Criado para facilitar a manutenção e impedir possiveis erros',
    show:false,
    icone:SiTypescript
  },
  {
    id: 3,
    title: 'Reactjs',
    conhecimentos: 'Hooks, Componentização',
    show:false,
    icone:SiReact
  },
  {
    id: 4,
    title: 'Css3',
    conhecimentos: 'Estilização',
    show:false,
    icone:SiCss3
  },
  {
    id: 5,
    title: 'Html5',
    conhecimentos: 'Estrutura organizada e semantica',
    show:false,
    icone:SiHtml5
  },
  {
    id: 6,
    title: 'Styled-componets',
    conhecimentos: 'Estilização dinamica',
    show:false,
    icone:SiStyledcomponents
  },
  {
    id: 7,
    title: 'chakra-Ui',
    conhecimentos: 'Estilização inline, Pratica e funcional',
    show:false,
    icone:SiChakraui
  },
]

