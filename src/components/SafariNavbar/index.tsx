import type React from 'react'
import { Box, Text, Spacer } from 'ink'

import SearchBar from './SearchBar.js'

const macOSControlButtons = (
	<Text>
		<Text color="red">●</Text> <Text color="yellow">●</Text>{' '}
		<Text color="green">●</Text>
	</Text>
)

interface SafariNavbarProps {
	countryCode?: string
}

const SafariNavbar: React.FC<SafariNavbarProps> = ({ countryCode }) => (
	<Box>
		{macOSControlButtons}
		<Box columnGap={3} marginLeft={3}>
			<Text>⯇</Text>
			<Text dimColor={true}>⯈</Text>
		</Box>
		<SearchBar />
		<Spacer />
		<Text>
			{countryCode && `${countryCode} `}
			<Text bold>+</Text>
		</Text>
	</Box>
)

export default SafariNavbar
