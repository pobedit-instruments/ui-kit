import React from 'react';
import {Story} from '@storybook/react/types-6-0';

import {
    Button,
    Panel
} from 'src/components'

import {PanelProps} from 'src/components/panel';

const Template: Story<PanelProps> = ({...props}): JSX.Element => {
    const [parentVisible, setParentVisible] = React.useState(false);
    const [childrenVisible, setChildrenVisible] = React.useState(false);

    const showParentPanel = () => {
        setParentVisible(true);
    };

    const hideParentPanel = () => {
        setParentVisible(false);
    };

    const showChildrenPanel = () => {
        setChildrenVisible(true);
    };

    const hideChildrenPanel = () => {
        setChildrenVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showParentPanel}>
                Открыть
            </Button>

            <Panel
                title="Первый уровень"
                closable={false}
                onClose={hideParentPanel}
                visible={parentVisible}
                {...props}
            >
                <Button type="primary" onClick={showChildrenPanel}>
                    Открыть
                </Button>

                <Panel
                    title="Второй уровень"
                    closable={false}
                    onClose={hideChildrenPanel}
                    visible={childrenVisible}
                    {...props}
                >
                    <p>Умом — Россию не понять,</p>
                    <p>Аршином общим не измерить.</p>
                    <p>У ней особенная стать —</p>
                    <p>В Россию можно только верить.</p>
                </Panel>
            </Panel>
        </>
    );
};

const MultiPanelStory = Template.bind({});

MultiPanelStory.storyName = 'Многоуровневая панель';

export {MultiPanelStory};
