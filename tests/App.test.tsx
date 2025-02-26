import { expect, test } from 'bun:test'

import { render } from 'ink-testing-library'

// @ts-ignore
import App from '../src/App.tsx'

test('just works', () => {
	const { lastFrame } = render(<App />)

	expect(lastFrame()).toMatchSnapshot()
})
