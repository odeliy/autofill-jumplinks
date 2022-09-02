import React, { useState } from 'react'
import StyledApp from './styles/StyledApp'
import { extractEndpoints } from './helpers'
import StyledJumplinkGenerator from './styles/StyledJumplinkGenerator'
import StyledExplainer from './styles/StyledExplainer'

function App() {
	const [anchors, setAnchors] = useState('')
	const [headers, setHeaders] = useState('')
	const [result, setResult] = useState('')

	function handleSubmit() {
		let endpoints = extractEndpoints(anchors)
		let counter = 0

		let newHeaders = headers.split(/(<h3>)/)

		for (let i = 0; i < newHeaders.length; i++) {
			if (i % 2 !== 0) {
				newHeaders[i] = '<h3 id="' + endpoints[counter] + '">'
				counter++
			}
		}

		newHeaders = newHeaders.join('')

		setResult(newHeaders)
	}

	return (
		<StyledApp>
			<StyledJumplinkGenerator>
				<h1>Jumplink Generator</h1>
				<h2>Paste li section:</h2>
				<textarea
					value={anchors}
					onChange={(e) => setAnchors(e.target.value)}
				/>
				<h2>Paste h3 section:</h2>
				<textarea
					value={headers}
					onChange={(e) => setHeaders(e.target.value)}
				/>
				<h2>Result:</h2>
				<textarea value={result} onChange={(e) => setResult(e.target.value)} />
				<button onClick={handleSubmit}>Submit</button>
			</StyledJumplinkGenerator>
			<StyledExplainer>
				<h1>Explainer</h1>
				<h2>{`<li> section:`}</h2>
				<p>
					{`Paste all the <li>...</li> tags that contain the jumplink endpoints. Do not paste the surrounding <ul>...</ul> tags.`}
				</p>
				<p>
					{`The program is looking specifically for the # symbol to know where the endpoint starts. If for some reason there are extraneous # symbols the result will break.`}
				</p>
        <h2>{`<h3> section:`}</h2>
        <p>
          {`Paste all the contents that contains the <h3> tags. MUST start with the <h3> tag. You should be able to paste anything in here after that (shortcode, other tags, etc) and nothing will be touched except the <h3>s. After hitting submit the <h3>s should now look like <h3 id="ENDPOINT"> with no other changes to the original text.`}
        </p>
			</StyledExplainer>
		</StyledApp>
	)
}

export default App
