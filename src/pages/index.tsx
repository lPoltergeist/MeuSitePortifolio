import {HomeContainer} from '../styles/HomeStyles'
import HomeHero from '../components/HomeHero';
import Header  from '../components/Header'
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import { Footer } from '../components/Footer';

import { GetStaticProps } from 'next';
import Head from 'next/head'

import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

interface Projects {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
  }
  
  interface HomeProps {
    projects: Projects[]
  }

export default function Home({projects}: HomeProps) {
useEffect(() => {
  Aos.init({duration: 1500});
}, []);

  return (
  <HomeContainer>
 <Head>
   <title>Gabriel | Home</title>
   <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        /> 

 </Head>

     <Header/>

   <main className="container">
     <HomeHero />
     <Projetos projects={projects}/>
     <Conhecimentos/>
     <FormContato/>
     <Footer/>
   </main>
  </HomeContainer>
   );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'meu-portifolio')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
