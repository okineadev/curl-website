import { Box, Text, type BoxProps } from 'ink'
import Link from 'ink-link'

interface MediumPostProps {
	/**
	 * The title of the post, displayed inside the component.
	 */
	title: string

	/**
	 * The description of the post, shown below the title.
	 */
	description: string

	/**
	 * Link to the post
	 */
	link: string

	/**
	 * The minimum width of the post box (in characters).
	 * @default 30
	 */
	minWidth?: string

	/**
	 * Additional properties passed to the `Box` component from the `ink` library.
	 */
	boxProps?: BoxProps
}

const MediumPost: React.FC<MediumPostProps> = ({
	title,
	description,
	link,
	minWidth = 30,
	boxProps,
}) => (
	<Box
		flexDirection="column"
		padding={1}
		borderStyle="round"
		borderColor="cyan"
		flexGrow={1}
		width={minWidth}
		{...boxProps}
	>
		<Link url={link} fallback={false}>
			<Text color="blue" bold>
				{title}
			</Text>
		</Link>
		<Text dimColor>{description}</Text>
	</Box>
)

export default MediumPost
