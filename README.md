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
| name                 | default            |
|----------------------|--------------------|
| title                | Add to home screen |
| position             | bottom-left        |
| titleColor           | white              |
| buttonIcon           | download           |
| buttonColor          | black              |
| buttonSize           | medium             |
| buttonIconColor      | white              |
| closeButtonSize      | small              |
| closeButtonIcon      | close              |
| closeButtonIconColor | gray               |
| closeButtonColor     | gray               |


## License

MIT © [maximegouin](https://github.com/maximegouin)
