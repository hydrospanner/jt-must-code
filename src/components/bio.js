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
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

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
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div>
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
        </p>
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
