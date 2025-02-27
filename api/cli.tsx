import React from 'react'
import type { VercelRequest, VercelResponse } from '@vercel/node'

import { render } from 'ink-testing-library'

import App from '../src/App.js'

const config = { runtime: 'nodejs' }

export default async function handler(req: VercelRequest, res: VercelResponse) {
	try {
		const countryCodeHeader = req.headers['x-vercel-ip-country']
		const countryCode: string | undefined =
			typeof countryCodeHeader === 'string'
				? countryCodeHeader
				: Array.isArray(countryCodeHeader)
					? countryCodeHeader[0]
					: undefined

		// Use the ink-testing-library's render function
		const { lastFrame } = render(<App countryCode={countryCode} />)

		const renderedText = lastFrame()

		// Set the content type to plain text
		res.setHeader('Content-Type', 'text/plain; charset=utf-8')
		res.setHeader('Cache-Control', 'public, max-age=86400')

		// Send the rendered output
		res.status(200).send(renderedText)
	} catch (error) {
		console.error('Error rendering Ink component:', error)
		// @ts-ignore
		res.status(500).send(`Error: ${error.message}`)
	}
}
