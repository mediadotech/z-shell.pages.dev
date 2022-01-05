// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const TwitterSvg =
	'<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '❮ ZI ❯',
	tagline: 'A Swiss Army Knife for Zsh - Unix shell',
	url: 'https://z-shell.pages.dev/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	favicon: 'img/favicon.svg',
	organizationName: 'z-shell',
	projectName: 'z-shell.pages.dev',
	stylesheets: [
		{
			href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
			type: 'text/css',
			integrity:
				'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
			crossorigin: 'anonymous',
		},
	],
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				debug: true, // force debug plugin usage
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl:
						'https://github.com/z-shell/z-shell.pages.dev/tree/main',
					remarkPlugins: [math, [npm2yarn, {sync: true}]],
					rehypePlugins: [katex],
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				blog: false,
			}),
		],
	],
	plugins: [
		'@docusaurus/plugin-content-blog',
		'@docusaurus/theme-live-codeblock',
		/** https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image */
		'@docusaurus/plugin-ideal-image',
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			announcementBar: {
				id: 'zi-announce-1', // Increment on change
				content: `⭐️ If you like ZI, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/z-shell/zi">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zshell_zi" >Twitter</a> ${TwitterSvg}`,
			},
			hideableSidebar: false,
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
				switchConfig: {
					darkIcon: '🌙',
					lightIcon: '\u2600',
					darkIconStyle: {
						marginLeft: '2px',
					},
					lightIconStyle: {
						marginLeft: '1px',
					},
				},
			},
			algolia: {
				appId: '4FTAL4NR6O',
				apiKey: '9ec9227571a8499464ac9389f1ab1616',
				indexName: 'dev-z-shell',
			},
			navbar: {
				title: '❮ ZI ❯',
				logo: {
					alt: 'ZI Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Wiki',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Wiki',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Github Discussions',
								href: 'https://github.com/z-shell/zi/discussions',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/z-shell',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Z-Shell ZI, Community.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
		}),
};

module.exports = config;
