import { Button, Col, Form, Row } from "antd"
import React from "react";

interface IFormAdd {
	onOk: Function,
	onCancel: Function
}

export const FormAdd = ({ onOk, onCancel }: IFormAdd): JSX.Element => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
		alert('Користува успішно добавлено')
		onOk();
	};

	const onFinishFailed = (errorInfo: any) => {
		alert(errorInfo.errorFields[0].errors[0])
		console.log('Failed:', errorInfo);
	};


	return (
		<Form
			className="form"
			name="basic"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Група"
						name="group"
						rules={[
							{ required: true, message: 'Будь ласка, введіть групу!' },
							{ min: 3, message: 'Назва має містити не мешне 3 символів', },
						]}
					>
						<input className="my-input" type="text" name='group' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Назва організації"
						name="organization"
						rules={[
							{ required: true, message: 'Будь ласка, введіть назву організації!' },
							{ min: 3, message: 'Назва має містити не мешне 5 символів', },
						]}
					>
						<input className="my-input" type='text' name='organization' />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Прізвище"
						name="surname"
						rules={[
							{ required: true, message: 'Будь ласка, введіть прізвище!' },
							{ min: 3, message: 'Назва має містити не мешне 5 символів', },
						]}
					>
						<input className="my-input" type='text' name='surname' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Телефон робочий"
						name="work-tel"
						rules={[
							{ required: true, message: 'Будь ласка, введіть номер робочого телефона!' },
							{ min: 3, message: 'Номер має містити не мешне 3 символів' },
						]}
					>
						<input className="my-input" type='tel' name='work-tel' />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Ім'я"
						name="name"
						rules={[
							{ required: true, message: 'Будь ласка, введіть ім\'я!' },
							{ min: 3, message: 'Ім\'я має містити не мешне 3 символів', },
						]}
					>
						<input className="my-input" type='text' name='name' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Телефон мобільний"
						name="tel"
						rules={[
							{ required: true, message: 'Будь ласка, введіть номер мобільного телефона!' },
							{ pattern: /^\+380\d{10}$/, message: 'Будь ласка, введіть коректний номер телефону', },
						]}
					>
						<input className="my-input" type="tel" name="tel" defaultValue={'+380'} maxLength={14} />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="По-батькові"
						name="fatherly"
						rules={[
							{ required: true, message: 'Будь ласка, введіть по-батькові!' },
							{ min: 3, message: 'Назва має містити не мешне 3 символів', },
						]}
					>
						<input className="my-input" type="tel" name="fatherly" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Електронна пошта"
						name="email"
						rules={[{ required: true, message: 'Будь ласка, введіть електронну пошту!' }]}
					>
						<input className="my-input" type="email" name="email" placeholder="email@gmail.com" />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="ІПН"
						name="cods"
						rules={[
							{ required: true, message: 'Будь ласка, введіть ІПН!' },
							{ min: 3, message: 'ІПН має містити не мешне 3 символів' }
						]}
					>
						<input className="my-input" type="text" name="cods" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Посада"
						name="position"
						rules={[
							{ message: 'Будь ласка, введіть посаду!' },
							{ min: 3, message: 'Назва має містити не мешне 3 символів', }
						]}
					>
						<input className="my-input" type="text" name="position" />
					</Form.Item>
				</Col>
			</Row>
			<Form.Item className="form__footer">
				<Button className="button white" key="back" onClick={() => onCancel()}>
					Return
				</Button>
				<Button className="button" htmlType="submit" key="submit" type="primary">
					Submit
				</Button>
			</Form.Item>
		</Form >
	)
}