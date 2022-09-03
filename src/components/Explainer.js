import styled from 'styled-components'

const StyledExplainer = styled.div`
	border-radius: 20px;
	padding: 2em;
	background-color: #1f2937;
	margin-top: 80px;

	h1 {
		font-size: 3em;
		color: #4adf86;
	}

	h2 {
		font-size: 1.5rem;
		// text-decoration: underline;
		padding-block: 0.5em;
	}

	p {
		font-size: 1rem;
		padding-bottom: 1em;
		line-height: 1.5;
	}
`

function Explainer() {
	return (
		<StyledExplainer>
			<h1>~~ Explainer ~~</h1>
			<h2>{`<li> section`}</h2>
			<p>
				{`Paste all the <li><a href="#">...</a></li> tags that contain the jumplink URL endpoints. Each must be on it's own line, with no extra carriage returns before, after, or in between. This should be the default if copying over from WP.`}
			</p>
			<h2>{`<h3> section`}</h2>
			<p>
				{`Paste the whole section you want to replace. It must contain all the <h3> headers.`}
			</p>
			<p>
				{`
				After hitting submit the <h3>s should now look like <h3 id="ENDPOINT"> with no other changes to the original text.
				`}
			</p>
			<h2>Demo</h2>
			<p>Click on the "Jumplink Generator" header above to autofill the generator with dummy data.</p>
		</StyledExplainer>
	)
}

export default Explainer
