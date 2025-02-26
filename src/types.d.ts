/**
 * Represents a project with its metadata.
 */
export type Project = {
	/**
	 * The GitHub repository of the project in the format "username/repo".
	 * @example "okineadev/dotload"
	 */
	repo: string

	/**
	 * A short description of the project, often with emojis for context.
	 * @example "🌠 Simple tool for installing dotfiles on any machine!"
	 */
	description: string
}
