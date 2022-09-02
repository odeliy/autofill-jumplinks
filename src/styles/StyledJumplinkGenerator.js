import styled from 'styled-components'

const StyledJumplinkGenerator = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
	border-radius: 10px;
    margin-bottom: 20px;

	h1 {
		padding-block: 1em;
	}

	textarea {
        width: 80%;
        min-height: 200px;
		padding: 0.25em;
		margin-bottom: 2em;
	}

	button {
		padding: 0.25em 1em;
		margin: 1em 0 2.5em;
	}
`

export default StyledJumplinkGenerator
