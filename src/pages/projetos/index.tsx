import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { getPrismicClient } from '../../services/prismic';
import {ProjetosContainer} from '../../styles/ProjetosStyles';
import Prismic from '@prismicio/client';
import Head from 'next/head'

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

export default function Projetos({projects}: HomeProps) {
    return (
        <ProjetosContainer>
<Head>
  <title>Gabriel | Projetos </title>
</Head>


        <Header/>
        <main className="container">
         {projects.map(project => (
             <ProjectItem 
             key={project.slug}
             title={project.title}
             type={project.type}
             slug={project.slug}
             imgUrl={project.thumbnail}
             
             />
         ))}
        </main>
        </ProjetosContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
  
    const projectResponse = await prismic.query([
      Prismic.predicates.at('document.type', 'meu-portifolio')
    ], { 
      orderings : '[document.first_publication_date desc]'
  }
    );
  
    console.log(projectResponse.results);
  
    const projects = projectResponse.results.map(projetos => ({
      slug: projetos.uid,
      title: projetos.data.title,
      type: projetos.data.type,
      description: projetos.data.description,
      link: projetos.data.projectLink.url,
      thumbnail: projetos.data.thumbnail.url,
      
      
    
    }))
    console.log(projects)
  
    return {
      props: { projects }, 
      revalidate: 86400
    }
  }
  