import React from 'react';
import Split from 'react-split';
import Content from './Content';

const App = () => {
	const splitProps = {
		sizes: [50, 50],
		minSize: 250,
		expandToMin: false,
		gutterSize: 10,
		gutterAlign: 'center',
	};
	return (
		<Split
			{...splitProps}
			direction="vertical"
			cursor="row-resize"
			className="split-row"
		>
			<Split
				{...splitProps}
				direction="horizontal"
				cursor="col-resize"
				className="split-col"
			>
				<Content contentId="a">A</Content>
				<Content contentId="b">B</Content>
			</Split>
			<Content contentId="c">C</Content>
		</Split>
	);
};

export default App;
