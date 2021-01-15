import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import {
    Tooltip,
    Grid,
    Notification
} from 'src/components';

import {
    generate
    // presetPalettes
} from '@ant-design/colors';

import style from './colors.less';

const {Message} = Notification;
const {Column, Row} = Grid;

const handleCopyColor = (value: string) => {
    Message.success(`Значение цвета "${value}" скопировано в буфер обмена`);
};

const DEFAULT_COLOR = '#ccc';

const PaletteGenerator: React.FunctionComponent<void> = (): JSX.Element => {
    // const {blue} = presetPalettes;
    const palette = generate(DEFAULT_COLOR);

    return (
        <Row>
            {
                palette.map((color, index) => {
                    const name = `color-${index + 1}`;

                    return (
                        <CopyToClipboard key={index}
                                         text={name}
                                         onCopy={handleCopyColor}
                        >
                            <Tooltip title={color}>
                                <Column flex="auto"
                                     className={style.neutral_palette__color}
                                     style={{backgroundColor: color}}
                                >
                                    {name}
                                </Column>
                            </Tooltip>
                        </CopyToClipboard>
                    );
                })
            }
        </Row>
    );
};

export {PaletteGenerator};
