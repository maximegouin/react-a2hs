# react-a2hs

> Quickly show an installable button for your React PWA

[![NPM](https://img.shields.io/npm/v/react-a2hs.svg)](https://www.npmjs.com/package/react-a2hs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-a2hs
```
```bash
yarn add react-a2hs
```

## Usage

```jsx
import { A2HSProvider } from  'react-a2hs'

const App = () => (
	<A2HSProvider
		title={title}
		position={position}
		titleColor={titleColor}
		buttonIcon={buttonIcon}
	>
		{children}
	</A2HSProvider>
)
```
## Props
| name                  | type    | default     | info                                                            |
|-----------------------|---------|-------------|-----------------------------------------------------------------|
| title                 | string  |             |                                                                 |
| titleSize             | string  | h2          | Options: h1, h2, h3, h4, h5, h6                                 |
| titleColor            | string  | black       |                                                                 |
| text                  | string  |             |                                                                 |
| textSize              | int     | 14          | Size in px                                                      |
| textColor             | string  | black       |                                                                 |
| position              | string  | bottom-left | Options: bottom_left, bottom_right, top_left, top_right         |
| icon                  | string  |             | List of icons: https://react.semantic-ui.com/elements/icon/     |
| iconSize              | string  | big         | Options: mini, tiny, small, large, big, huge, massive           |
| iconColor             | string  | black       |                                                                 |
| buttonText            | string  | Yes         |                                                                 |
| buttonTextColor       | string  | black       |                                                                 |
| buttonBackgroundColor | string  | white       |                                                                 |
| forceShow             | boolean | false       | Use in development mode to display button without prerequisites |


## License

MIT © [maximegouin](https://github.com/maximegouin)
