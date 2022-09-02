import React from 'react'
import Explainer from './components/Explainer'
import Generator from './components/Generator'
import styled from 'styled-components'
import Footer from './components/Footer'

const StyledApp = styled.div`
	max-width: 550px;
	margin-inline: auto;
	margin-block: 50px;
`

function App() {
	return (
		<StyledApp>
			<Generator />
			<Explainer />
			<Footer />
		</StyledApp>
	)
}

export default App
