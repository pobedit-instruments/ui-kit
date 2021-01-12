import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Panel
} from 'src/components'

import {PanelProps} from 'src/components/panel';

const Template: Story<PanelProps> = ({...props}): JSX.Element => {
    const [visible, setVisible] = React.useState(false);

    const showPanel = () => {
        setVisible(true);
    };

    const hidePanel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showPanel}>
                Открыть
            </Button>

            <Panel
                title="Основная пенель"
                placement="right"
                closable={false}
                onClose={hidePanel}
                visible={visible}
                {...props}
            >
                <p>Умом — Россию не понять,</p>
                <p>Аршином общим не измерить.</p>
                <p>У ней особенная стать —</p>
                <p>В Россию можно только верить.</p>
            </Panel>
        </>
    );
};

const PanelStory = Template.bind({});

PanelStory.storyName = 'Базовое использование';

export {PanelStory};
