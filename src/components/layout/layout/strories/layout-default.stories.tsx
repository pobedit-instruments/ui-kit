import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Space,
    Layout
} from 'src/components';

import {LayoutProps} from 'src/components/layout';
import style from './layout.stories.less';

const {
    Header,
    Content,
    Footer,
    Sider
} = Layout;

const Template: Story<LayoutProps> = ({...props}): JSX.Element => (
    <Space size="large"
           direction="vertical"
           className={style.layout}
    >
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>

        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>

        <Layout>
            <Header>Header</Header>
            <Layout>
                <Content>Content</Content>
                <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>

        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </Space>
);

const LayoutStory = Template.bind({});

LayoutStory.storyName = 'Спецификация';

export {LayoutStory};
