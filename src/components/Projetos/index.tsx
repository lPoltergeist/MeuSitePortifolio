import Link from 'next/link'
import React from 'react'
import { SectionTitle } from '../SectionTitle'
import ProjetoItem from './ProjetoItem'
import { Container } from './styles'

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

function Projetos({projects}: HomeProps) {
console.log(projects);

  return (
      <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
          {projects.slice(0, 3).map(project => (
              <ProjetoItem 
              key={project.slug}
              img={project.thumbnail}
              slug={project.slug}
              title={project.title}
              type={project.type}
              />
          ))}
          </section>

          <button type="button">
              <Link href="/projetos" >
                  <a>
                      Ver todos os projetos
                  </a>
              </Link>
          </button>
      </Container>
  )
}

export default Projetos