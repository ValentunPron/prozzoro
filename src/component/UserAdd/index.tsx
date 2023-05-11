import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd"
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action/user";

interface IFormAdd {
	onOk: Function,
	onCancel: Function
}

const { Option } = Select;

export const UserAdd = ({ onOk, onCancel }: IFormAdd): JSX.Element => {
	const dispatch: Function = useDispatch();
	const [form] = Form.useForm();

	const onFinish = (values: any) => {
		onOk();
		dispatch(addUser(values));
		form.resetFields();
		alert('Користува успішно добавлено');
	};

	const onFinishFailed = (errorInfo: any) => {
		alert(errorInfo.errorFields[0].errors[0])
		console.log('Failed:', errorInfo);
	};


	return (
		<Form
			className="form"
			form={form}
			layout="vertical"
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="ПІБ"
						name="fullName"
						rules={[
							{ required: true, message: 'Будь ласка, введіть ПІБ!' },
							{ min: 3, message: 'Назва має містити не мешне 3 символів', },
						]}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Група"
						name="group"
						rules={[
							{ required: true, message: 'Будь ласка, введіть групу!' },
						]}
					>
						<Select>
							<Option value="Керівник НПІ">Керівник НПІ</Option>
							<Option value="Член HTP">Член HTP</Option>
							<Option value="Експерт">Експерт</Option>
							<Option value="Організатор екзпертизи">Організатор екзпертизи</Option>
							<Option value="Студент">Студент</Option>
						</Select>
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Назва організації"
						name="organization"
						rules={[
							{ required: true, message: 'Будь ласка, введіть назву організації!' },
							{ min: 3, message: 'Назва має містити не мешне 5 символів', },
						]}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Телефон мобільний"
						name="phone"
						rules={[
							{ required: true, message: 'Будь ласка, введіть номер мобільного телефона!' },
							{ pattern: /^\+380\d{9}$/, message: 'Будь ласка, введіть коректний номер телефону', },
						]}
					>
						<Input defaultValue={'+380'} maxLength={13} />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Електронна пошта"
						name="email"
						rules={[{ required: true, message: 'Будь ласка, введіть електронну пошту!' }]}
					>
						<Input placeholder="email@gmail.com" />
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