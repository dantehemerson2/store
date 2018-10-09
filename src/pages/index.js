import React from 'react'

import Footer from '../components/Footer'
import Layout from '../components/Layouts/Default'
import Carousel from '../components/HomeCarousel'
import Discover from '../components/Discover'

export default () => (
	<Layout>
		<Carousel/>
		<Discover/>
		<Footer/>
	</Layout>
)
