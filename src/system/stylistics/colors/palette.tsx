import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {presetPalettes} from '@ant-design/colors';

import {
    Tooltip,
    Typography,
    Notification,
    Grid
} from 'src/components';

import style from './colors.stories.less';

const {Title} = Typography;
const {Message} = Notification;
const {Column, Row} = Grid;

const handleCopyColor = (value: string) => {
    Message.success(`Значение цвета "${value}" скопировано в буфер обмена`);
};

const Palette: React.FunctionComponent<void> = (): JSX.Element => {
    const {grey, ...colors} = presetPalettes;
    const palette = Object.entries(colors);

    return (
        <Row gutter={24}>
            {
                palette.map(([name, colors]) => (
                    <Column span={8} key={name}>
                        <Title level={3}
                               className={style.system_palette__title}
                        >
                            {name}
                        </Title>

                        {
                            colors.map((value, index) => {
                                const color = `${name}-${index + 1}`;

                                return (
                                    <CopyToClipboard key={value}
                                                     text={color}
                                                     onCopy={handleCopyColor}
                                    >
                                        <Tooltip title={value}
                                                 placement="right"
                                        >
                                            <div className={style.system_palette__color}
                                                 style={{backgroundColor: value}}
                                            >
                                                {color}
                                            </div>
                                        </Tooltip>
                                    </CopyToClipboard>
                                );
                            })
                        }
                    </Column>
                ))
            }
        </Row>
    );
};

export {Palette};
