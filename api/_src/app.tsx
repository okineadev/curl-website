import { Box, Newline, Text, type BoxProps } from 'ink'
import Divider from 'ink-divider'
import Link from 'ink-link'

import SafariNavbar from './components/SafariNavbar/index.js'
import MediumPost from './components/MediumPost.js'

import socials from './socials.js'
import projects from './projects.js'
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'

// Constants
const BORDER_STYLE: BoxProps['borderStyle'] = 'round'
const PADDING = 1
const BORDER_COLOR: BoxProps['borderColor'] = 'gray'

interface AppProps {
	countryCode?: string
}

const App: React.FC<AppProps> = ({ countryCode }) => (
	<Box
		borderStyle={BORDER_STYLE}
		borderColor={BORDER_COLOR}
		paddingLeft={PADDING}
		paddingRight={PADDING}
		flexDirection="row"
		alignSelf="flex-start"
		gap={4}
		width={95}
	>
		<Box flexDirection="column">
			<SafariNavbar countryCode={countryCode} />
			<Divider />

			<Text>
				Hello 👋, my name is <Text bold>Yura</Text>, I'm 16 years old,
				programmer, designer, I create cool websites, amazing CLI applications
				and I also write posts on Medium from time to time :)
				<Newline />
			</Text>
			<Text>
				I work on open source projects, create my own and help others. I am the
				(ex) maintainer of the{' '}
				<Link
					url="https://github.com/material-extensions/vscode-material-icon-theme"
					fallback={false}
				>
					<Text bold>Material Icon Theme</Text>
				</Link>{' '}
				extension for VS Code, Co-founder of{' '}
				<Link url="https://github.com/ZGalera" fallback={false}>
					<Text bold>Zgalera Inc</Text>
				</Link>
				.
				<Newline />
			</Text>

			{/* Projects Section */}
			<Box flexDirection="column" alignItems="center">
				<Text bold>📁 Projects</Text>
			</Box>

			<Box flexDirection="column" marginTop={1}>
				<Box flexDirection="column" alignItems="center">
					<Box
						flexDirection="row"
						gap={1}
						flexWrap="wrap"
						justifyContent="center"
					>
						{projects.map((project) => (
							<Link
								key={project.repo}
								url={`https://github.com/${project.repo}`}
								fallback={false}
							>
								<Text color="green">{project.repo.split('/')[1]}</Text>
							</Link>
						))}
					</Box>
				</Box>
			</Box>

			{/* Socials Section */}
			<Box flexDirection="column" alignItems="center" marginTop={1}>
				<Text bold>🌍 Socials</Text>
			</Box>

			<Box flexDirection="column" marginTop={1}>
				<Box flexDirection="column" alignItems="center">
					<Box flexDirection="row" gap={1} flexWrap="wrap">
						{Object.entries(socials).map(([key, value]) => (
							<Link key={key} url={value} fallback={false}>
								<Text color="red">{key}</Text>
							</Link>
						))}
					</Box>
				</Box>
			</Box>

			<Box flexDirection="column" alignItems="center" marginTop={1}>
				<Text bold>
					📰 My posts on{' '}
					<Text backgroundColor="greenBright" color="black">
						{' '}
						Medium{' '}
					</Text>
				</Text>
			</Box>

			<Box flexDirection="column" marginTop={1}>
				<Box flexDirection="row" alignItems="stretch" flexWrap="wrap" gap={1}>
					<MediumPost
						title="How to get a free macOS machine for testing?"
						description="if you have created a program and want to test it on different operating systems (including macOS), but if..."
						link="https://medium.com/@okineadev/how-to-get-a-free-macos-machine-for-testing-b2f6c72415fd"
					/>
					<MediumPost
						title="How to set up VNC on a headless Raspberry Pi..."
						description="If you have Ubuntu Server installed on your Raspberry Pi and you want to connect to its interface without a monitor or mouse?"
						link="https://medium.com/@okineadev/how-to-set-up-vnc-on-a-headless-raspberry-pi-with-ubuntu-server-24-04-96cc8ddf65bc"
					/>
				</Box>
			</Box>
		</Box>
	</Box>
)

export default App
