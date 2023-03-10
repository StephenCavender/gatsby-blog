import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import Card from '../components/card'

const Projects = ({ data }) => {
  return (
    <>
      <div>
        <h2 className="mb-6 text-4xl">Projects</h2>
        <ul
          className="mb-4"
          style={{
            listStyleType: 'none',
            padding: 0,
            display: 'grid',
            gap: '2rem',
          }}
        >
          {data.allMdx.nodes.map(
            ({
              id,
              excerpt,
              frontmatter: { teaser, title },
              fields: { slug },
            }) => (
              <li key={id}>
                <Card
                  link={`/projects${slug}`}
                  title={title}
                  thumbnail={teaser?.childImageSharp}
                  excerpt={excerpt}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </>
  )
}

export default Projects

export const Head = () => <SEO />

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { frontmatter: { displayOrder: DESC } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        fields {
          slug
        }
        frontmatter {
          title
          teaser {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`
