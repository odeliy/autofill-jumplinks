import styled from 'styled-components'

const StyledFooter = styled.div`
	font-size: 1rem;
	margin-top: 40px;
	display: flex;
	justify-content: space-around;

	a {
		color: #10b981;
		font-weight: bold;
	}

	a:hover {
		color: #fff;
	}
`

function Footer() {
	return (
		<StyledFooter>
			<p>For the Dreamteam! ✨</p>
			<p>
				<a
					href='https://github.com/odeliy/autofill-jumplinks'
					target='_blank'
					rel='noreferrer'
				>
					github repo
				</a>
			</p>
		</StyledFooter>
	)
}

export default Footer
