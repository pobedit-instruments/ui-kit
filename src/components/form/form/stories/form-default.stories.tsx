import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Form,
    TextField,
    Checkbox
} from 'src/components';

import {FormProps} from 'src/components/form';

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

const Template: Story<FormProps> = ({...props}): JSX.Element => {
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Введите имя пользователя!'
                    }
                ]}
            >
                <TextField />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль!'
                    }
                ]}
            >
                <TextField.Password />
            </Form.Item>

            <Form.Item {...tailLayout}
                       name="remember"
                       valuePropName="checked"
            >
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary"
                        htmlType="submit"
                >
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    );
};

const FormStory = Template.bind({});

FormStory.storyName = 'Базовое использование';

export {FormStory};
