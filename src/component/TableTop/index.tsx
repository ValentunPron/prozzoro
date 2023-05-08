import React from "react";
import { Button, Modal } from 'antd';
import { UserAdd } from "../UserAdd";

export const TableTop = () => {
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
		<>
			<div className="table__top table-top">
				<h2 className="table-top__title">Інформація про користувачів</h2>
				<div className="table-top__action">
					<Button className="table-top__button button" type="primary" onClick={showModal}>
						<span className="table-top__button-span">+</span>Додати
					</Button>
				</div>
			</div>
			<Modal className="modal" title="Новий користувач" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
				<UserAdd onOk={handleOk} onCancel={handleCancel} />
			</Modal >
		</>
	);
}