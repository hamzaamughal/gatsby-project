import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import styles from '../components/product.module.css'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const ComponentName = ({ data }) => {
  const { allContentfulProduct: { nodes: products } } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map((product) => {
          return <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title}></Image>
            <h3>{product.title} <span>${product.price}</span></h3>
            <Link to={`/product/${product.slug}`}>More Details</Link>
          </article>
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
