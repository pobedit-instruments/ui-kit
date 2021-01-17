import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import * as AntdIcons from '@ant-design/icons/lib/icons';

import {
    Grid,
    Typography,
    Notification
} from 'src/components';

import {RadioChangeEvent} from 'src/components/radio'

import {
    Filter,
    ThemeType
} from './filter';

import style from './preview.stories.less';

const {Title, Paragraph} = Typography;
const {Message} = Notification;
const {Row, Column} = Grid;

const handleCopyColor = (value: string) => {
    Message.success(`Иконка ${value} скопирована в буфер обмена`);
};

const Preview: React.FunctionComponent<{}> = (): JSX.Element => {
    const icons = Object.entries(AntdIcons);
    const [type, setType] = React.useState(ThemeType.OUTLINED);

    const handleFilter = ({target}: RadioChangeEvent) => {
        setType(target.value);
    };

    return (
        <>
            <Filter onChange={handleFilter} />

            <Row className={style.icons}>
                {
                    icons.filter(([name]) => {
                        return name.includes(type);
                    })
                        .map(([name, Icon]) => (
                            <Column span={6}
                                    key={name}
                                    className={style.icons__item}
                            >
                                <CopyToClipboard text={`<${name} />`}
                                                 onCopy={handleCopyColor}
                                >
                                    <div>
                                        <Title>
                                            <Icon />
                                        </Title>

                                        <Paragraph className={style.name}>{name}</Paragraph>
                                    </div>
                                </CopyToClipboard>
                            </Column>
                        ))
                }
            </Row>
        </>
    );
};

export {Preview};
