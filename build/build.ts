import {
	stat,
	rm,
	mkdir,
	link,
	readdir,
	writeFile,
	copyFile,
} from 'node:fs/promises'
import { join } from 'node:path'

const FUNCTION_NAME = 'cli'
const WORK_DIR = process.cwd()
const VERCEL_OUT_DIR = join(WORK_DIR, '.vercel', 'output', 'functions')
const FUNCTION_DIR = join(VERCEL_OUT_DIR, 'api', `${FUNCTION_NAME}.func`)

await rm(VERCEL_OUT_DIR, { recursive: true, force: true })

await mkdir(FUNCTION_DIR, { recursive: true })

// // save config
// await writeFile(
// 	join(VERCEL_OUT_DIR, 'config.json'),
// 	JSON.stringify({ version: 3 }, null, 2),
// )

await Bun.build({
	entrypoints: [join(WORK_DIR, 'api', 'cli.tsx')],
	outdir: FUNCTION_DIR,
	packages: 'external',
	external: ['yoga-wasm-web'],
	target: 'node',
	minify: true,
})

await writeFile(
	join(FUNCTION_DIR, '.vc-config.json'),
	JSON.stringify(
		{
			runtime: 'nodejs22.x',
			entrypoint: 'index.js',
		},
		null,
		2,
	),
)

// await copyFile(
// 	join(WORK_DIR, 'node_modules/yoga-wasm-web/dist/yoga.wasm'),
// 	join(FUNCTION_DIR, 'yoga.wasm'),
// )
