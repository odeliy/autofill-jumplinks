import styled from 'styled-components'

const StyledExplainer = styled.div`
	border-radius: 20px;
	padding: 1em 2em;
	background-color: #1f2937;
	margin-top: 80px;

	h1 {
		font-size: 3em;
		color: #4adf86;
		padding-top: 1em;
		padding-bottom: 0.5em;
	}

	h2 {
		font-size: 1.5rem;
		text-decoration: underline;
		padding-top: 1em;
		padding-bottom: 0.5em;
	}

	p {
		font-size: 1rem;
		padding-bottom: 1em;
		line-height: 1.25;
	}
`

function Explainer() {
	return (
		<StyledExplainer>
			<h1>~~ Explainer ~~</h1>
			<h2>{`<li> section:`}</h2>
			<p>
				{`Paste all the <li>...</li> tags that contain the jumplink endpoints. Do not paste the surrounding <ul>...</ul> tags.`}
			</p>
			<h2>{`<h3> section:`}</h2>
			<p>
				{`Paste all the contents that contains the <h3> tags. You must start with the <h3> tag. Nothing before it.`}
			</p>
			<p>
				{`
				After hitting submit the <h3>s should now look like <h3 id="ENDPOINT"> with no other changes to the original text.
				`}
			</p>
		</StyledExplainer>
	)
}

export default Explainer
