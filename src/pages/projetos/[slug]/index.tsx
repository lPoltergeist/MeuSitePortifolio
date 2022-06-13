import Header from '../../../components/Header'
import { ProjetoContainer } from '../../../styles/ProjetoContainer'
import { BannerProjeto } from '../../../components/BannerProjeto'
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../../services/prismic';
import Prismic from '@prismicio/client';
import Loading from '../../../components/Loading';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface Projects {
    slug: string;
    title: string;
    type: string;
    description: string;
    link: string;
    thumbnail: string;
    }
    
    interface HomeProps {
      projects: Projects;
    }

export default function Projeto({projects}: HomeProps) {

    const router = useRouter();
    
if(router.isFallback) {
    return <Loading/>
}

    return (
        <ProjetoContainer>
            <Head>
                <title>Gabriel | {projects.title}</title>

                <meta
          name="description"
          content={projects.description}
        />
        <meta property="og:image" content={projects.thumbnail} />
        <meta property="og:image:secure_url" content={projects.thumbnail} />
        <meta name="twitter:image" content={projects.thumbnail} />
        <meta name="twitter:image:src" content={projects.thumbnail} />
        <meta
          property="og:description"
          content={projects.description}
        /> 
            </Head>
         <Header />
            <BannerProjeto 
         
            title={projects.title}
            type={projects.type}
            imgUrl={projects.thumbnail}/>
            <main>
                <p>{projects.description}</p>
   
                    <button type="button">
                        <a target="_blank" href={projects.link}>Ver projeto online</a>
                    </button>
                </main>
    
        </ProjetoContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const prismic = getPrismicClient();
    const projects = await prismic.query([
        Prismic.predicates.at('document.type', 'meu-portifolio')
    ]);

    const paths = projects.results.map(project => ({
        params: {
            slug: project.uid,
        }
    }))

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const prismic = getPrismicClient();
    const {slug} = context.params
  
    const response = await prismic.getByUID('meu-portifolio', String(slug), {});
  
    console.log(response);
  
    const projects = {
        slug: response.uid,
        title: response.data.title,
        type: response.data.type,
        description: response.data.description,
        link: response.data.projectLink.url,
        thumbnail: response.data.thumbnail.url,
    };
    console.log(projects)
  
    return {
      props: { projects }, 
      revalidate: 86400
    }
  }