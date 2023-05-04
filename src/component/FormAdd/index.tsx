import { Col, Form, Row } from "antd"
import { MyInput, MyPoput } from "../index"
import { Button } from "antd/es/radio";

const arrayGroup = ['Член HTP', 'Експерт', 'Керівник НПІ', 'Організатор експертизи', 'Консультант з розвитку бізнесу', 'Керівник проекту', 'Аналітик даних', 'Фінансовий аналітик']

export const FormAdd = (): JSX.Element => {
	const onFinish = (values: any) => {
		console.log('Received values from form: ', values);
		// зробіть щось зі значеннями
	};

	return (
		<Form
			className="form"
			name="basic"
			onFinish={onFinish}
			//onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Група"
						name="group"
						rules={[{ required: true, message: 'Будь ласка, введіть група!' }]}
					>
						<MyPoput arrayInfo={arrayGroup} name='group' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Назва організації"
						name="organization"
						rules={[{ required: true, message: 'Будь ласка, введіть групe!' }]}
					>
						<MyInput type="text" name="organization" />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Прізвище"
						name="surname"
						rules={[{ required: true, message: 'Будь ласка, введіть прізвище!' }]}
					>
						<MyInput type="text" name="surname" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Телефон робочий"
						name="work-tel"
						rules={[{ required: true, message: 'Будь ласка, введіть номер робочого телефона!' }]}
					>
						<MyInput type="tel" name="work-tel" />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="Ім'я"
						name="name"
						rules={[{ required: true, message: 'Будь ласка, введіть ім\'я!' }]}
					>
						<MyInput type="text" name="name" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Телефон мобільний"
						name="tel"
						rules={[
							{ required: true, message: 'Будь ласка, введіть номер мобільного телефона!' },
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
						rules={[{ required: true, message: 'Будь ласка, введіть по-батькові!' }]}
					>
						<MyInput type="text" name="fatherly" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Електронна пошта"
						name="email"
						rules={[{ required: true, message: 'Будь ласка, введіть електронну пошту!' }]}
					>
						<MyInput type="email" name="email" placeholder="email@gmail.com" />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={24}>
				<Col span={12}>
					<Form.Item
						label="ІПН"
						name="cods"
						rules={[{ required: true, message: 'Будь ласка, введіть ІПН!' }]}
					>
						<MyInput type="text" name="cods" />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Посада"
						name="position"
						rules={[{ message: 'Будь ласка, введіть посаду!' }]}
					>
						<MyInput type="text" name="position" />
					</Form.Item>
				</Col>
			</Row>
		</Form >
	)
}