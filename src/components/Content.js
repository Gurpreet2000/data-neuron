import React, { useEffect, useState } from 'react';
import content from '../api/content';

const Content = ({ children, contentId }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [text, setText] = useState(children);
	const [method, setMethod] = useState('get');
	const [count, setCount] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await content.get(`/${contentId}`);
			setCount(data.count);
			setText(data.data);
		};
		fetchData();
	}, [contentId]);

	return (
		<div className="content">
			{isEditing ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<textarea value={text} onChange={e => setText(e.target.value)} />
					<button
						className="btn bg-success"
						onClick={async () => {
							await content[method]('/', {
								id: contentId,
								data: text,
								count,
							});
							setIsEditing(false);
							setCount(count + 1);
						}}
					>
						Submit
					</button>
				</div>
			) : (
				text
			)}
			<div>
				<button
					className="btn bg-primary"
					onClick={() => {
						setIsEditing(true);
						setMethod('post');
					}}
					disabled={isEditing ? true : false}
				>
					Add
				</button>
				<button
					className="btn bg-warning"
					onClick={() => {
						setIsEditing(true);
						setMethod('put');
					}}
					disabled={isEditing ? true : false}
				>
					Update
				</button>
				<div style={{ textAlign: 'center' }}>Count: {count}</div>
			</div>
		</div>
	);
};

export default Content;
