import React, { useState } from 'react'
import { extractEndpoints } from '../helpers'
import styled from 'styled-components'

const StyledJumplinkGenerator = styled.div`
	border-radius: 20px;
	background-color: #1f2937;
	padding: 2em;

	h1 {
		padding-bottom: 0.25em;
        font-size: 3em;
		color: #4adf86;
        text-align: center;
	}

	h2 {
		font-size: 1.5rem;
		padding-bottom: 0.5em;
	}

	textarea {
		resize: none;
		overflow: auto;
		width: 100%;
		min-height: 150px;
		padding: 0.5em 1em;
		margin-bottom: 2em;
		background-color: #273549;
		color: #55f991;
	}

	button {
		text-transform: uppercase;
		padding: 0.25em 1em;
		margin: 1em 0;
		border: none;
		border-radius: 20px;
		background-color: #10b981;
		transistion: transform 0.2s ease-in-out;
	}

	button:active {
		transform: scale(0.95);
	}

	.clear {
		margin-left: 1em;
		background-color: #1f2937;
		border: 1px solid #10b981;
		color: #ffffff;
	}
`

function Generator() {
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

	function handleClear() {
		setAnchors('')
		setHeaders('')
		setResult('')
	}

	return (
		<StyledJumplinkGenerator>
			<h1>
				Jumplink <span>Generator</span>
			</h1>
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
			<textarea
				value={result}
				onChange={(e) => setResult(e.target.value)}
			/>
			<button onClick={handleSubmit}>Submit</button>
			{result && (
				<button className='clear' onClick={handleClear}>
					Clear all
				</button>
			)}
		</StyledJumplinkGenerator>
	)
}

export default Generator
