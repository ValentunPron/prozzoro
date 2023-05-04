import { Button, Modal } from 'antd';
import React from 'react';

export const FormsPages = (): JSX.Element => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<h2 className="notFound">
			Тут форми
		</h2>
	)
}