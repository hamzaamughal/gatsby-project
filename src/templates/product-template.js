import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from 'gatsby-image'
import "../components/layout.css";

const ComponentName = ({ data: { product: { price, title, image: { fixed }, info: { info } } } }) => {

    return <Layout>
        <div style={{ textAlign: "center" }}>
            <Link to="/product">Back to products</Link>
            <h2>Single Product : {title}</h2>
        </div>
        <section className="single-product">
            <article>
                <Image fixed={fixed} alt={title} />
            </article>
            <article>
                <h1>{title}</h1>
                <h3>${price}</h3>
                <p>{info}</p>
                <button>Add to Cart</button>
            </article>
        </section>
    </Layout>
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: {eq: $slug}) {
      price
      title
      image {
        fixed (width:300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
