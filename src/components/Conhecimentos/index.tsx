import {ReactNode} from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import {SiTypescript, SiJavascript} from 'react-icons/si'
import {FaCss3Alt, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {TbBrandNextjs} from 'react-icons/tb'
import { SectionTitle } from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';

import {Container} from './styles';

function Conhecimentos() {
  return (
   <Container>
        <SectionTitle  title="Conhecimentos" />
     <section>
         <ConhecimentoItem title="HTML" icon={<AiFillHtml5/>} />
         <ConhecimentoItem title="CSS" icon={<FaCss3Alt/>} />
         <ConhecimentoItem title="JS" icon={<SiJavascript/>} />
         <ConhecimentoItem title="TS" icon={<SiTypescript/>} />
         <ConhecimentoItem title="REACT" icon={<FaReact/>} />
         <ConhecimentoItem title="NEXTJS" icon={<TbBrandNextjs/>} />
     </section>
   </Container>
  )
}

export default Conhecimentos