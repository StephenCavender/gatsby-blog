import React from 'react'
import { Link, graphql } from 'gatsby'
import { SEO } from '../components/seo'
import Bio from '../images/bio.jpg'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import GitHub from '../svg/github.svg'
import Biolink from '../svg/biolink.svg'
import LinkedIn from '../svg/linkedin.svg'
import Card from '../components/card'
import Mail from '../svg/mail.svg'

const Index = ({ data }) => {
  const { githubUrl, linkedInUrl, biolinkUrl } = useSiteMetadata()

  return (
    <>
      <div className="mb-8">
        <img
          alt="bio"
          src={Bio}
          className="float-right w-[180px] rounded-full"
        />
        <h2 className="mb-6 text-4xl">Hi</h2>
        <p className="my-2">My name is Steve.</p>
        <p className="my-2">
          Senior software engineer at <Link to="https://tele.vet">Televet</Link>
          .
        </p>
        <p className="my-2">
          I enjoy coding, guitar, crossfit, video games, whiskey, and{' '}
          <Link to="https://strenuouslife.co">doing hard things</Link>.
        </p>
        <div className="mt-12 flex h-12 justify-around">
          <a className="flex-1" href={githubUrl}>
            <GitHub alt="github link" className="h-full w-full fill-current" />
          </a>
          <a className="flex-1" href={linkedInUrl}>
            <LinkedIn
              alt="linked in link"
              className="h-full w-full fill-current"
            />
          </a>
          <a className="flex-1" href={biolinkUrl}>
            <Biolink
              alt="biolink link"
              className="h-full w-full fill-current"
            />
          </a>
          <a className="flex-1" href="mailto:dev@cavender.io">
            <Mail alt="email link" className="h-full w-full" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-bold">Recent Posts</h3>
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
            ({ id, excerpt, frontmatter, fields: { slug } }) => (
              <li key={id}>
                <Card
                  link={`/posts${slug}`}
                  title={frontmatter.title}
                  thumbnail={frontmatter.featuredImage?.path?.childImageSharp}
                  date={frontmatter.date}
                  excerpt={excerpt}
                />
              </li>
            )
          )}
        </ul>

        <div className="my-6 text-center">
          <Link to="/posts">More posts...</Link>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "post" } } }
      limit: 5
    ) {
      nodes {
        fields {
          slug
        }
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          featuredImage {
            path {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`

export default Index

export const Head = () => <SEO />
