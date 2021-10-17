/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/john.jpg"
        width={150}
        height={150}
        quality={95}
        alt="Profile picture"
      />
      <div>
        <p>
          Written by
          &nbsp;
          <a href={`/about`}>
            <strong>{author.name}</strong>
          </a>
        </p>
        <div className="authorSummary">
          {author?.summary || null}
        </div>
        <div className="social">
          <ul>
            <li>
              <a href={`https://github.com/${social?.github || ``}`}>
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              </a>
            </li>
            <li>
              <a href={`https://linkedin.com/in/${social?.linkedin || ``}`}>
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"  />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Bio
