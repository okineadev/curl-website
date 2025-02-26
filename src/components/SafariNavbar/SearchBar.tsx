import { Box, Text } from 'ink'
import Link from 'ink-link'

const SearchBar = () => (
	<Box width="100%" justifyContent="center" position="absolute">
		<Text>
			<Text dimColor={true}>【</Text>
			{'         '}
			<Text color="whiteBright">
				<Link url="https://okinea.dev" fallback={false}>
					okinea.dev
				</Link>
			</Text>
			{'      '}
			<Text>
				↻{'  '}
				<Text dimColor={true}>】</Text>
			</Text>
		</Text>
	</Box>
)

export default SearchBar
