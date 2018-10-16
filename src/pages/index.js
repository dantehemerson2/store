import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layouts/Default'
import Carousel from '../components/HomeCarousel'
import Discover from '../components/Discover'

class Index extends React.Component {	
	render() {
		return (
			<Layout>
				<Carousel images={this.props.data}/>				
				<Discover/>
			</Layout>
		)		
	}
} 

export default Index

export const pageQuery = graphql`
	query Carousel{	
		carousel1: file(relativePath: { eq: "images/home_carousel/carousel1.jpg" }) {
	    childImageSharp {
	      fluid(maxWidth: 1920, quality: 100){
	        ...GatsbyImageSharpFluid
	      }
	    }
		}
		carousel2: file(relativePath: { eq: "images/home_carousel/carousel2.jpg" }) {
	    childImageSharp {
	      fluid(maxWidth: 1920, quality: 100){
	        ...GatsbyImageSharpFluid
	      }
	    }
		}
		carousel3: file(relativePath: { eq: "images/home_carousel/carousel3.jpeg" }) {
	    childImageSharp {
	      fluid(maxWidth: 1920, quality: 100){
	        ...GatsbyImageSharpFluid
	      }
	    }
		}
		carousel4: file(relativePath: { eq: "images/home_carousel/carousel4.jpg" }) {
	    childImageSharp {
	      fluid(maxWidth: 1920, quality: 100){
	        ...GatsbyImageSharpFluid
	      }
	    }
		}
		carousel5: file(relativePath: { eq: "images/home_carousel/carousel5.jpg" }) {
	    childImageSharp {
	      fluid(maxWidth: 1920, quality: 100){
	        ...GatsbyImageSharpFluid
	      }
	    }
		}	
	}
`