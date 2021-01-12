import React from 'react';
import {
    Row,
    Col,
    Tooltip,
    Card,
    Space
} from 'antd';

import {
    blue,
    grey,
    generate
} from '@ant-design/colors';

import style from './colors.less';

enum Theme {
    LIGHT = 'default',
    DARK = 'dark'
}

enum BackgroundColor {
    LIGHT = '#FFF',
    DARK = '#141414'
}

const DEFAULT_COLOR = 5;

const getColorPalette = (theme?: Theme): string[] => {
    let backgroundColor = BackgroundColor.LIGHT;

    if (theme === Theme.DARK) {
        backgroundColor = BackgroundColor.DARK;
    }

    let colors = [
        blue.primary,
        grey.primary
    ];

    return colors.map((color) => {
        return generate(color!, {theme, backgroundColor})[DEFAULT_COLOR];
    });
};

const ColorPalette: React.FunctionComponent<{theme: Theme}> = ({theme, ...props}): JSX.Element => {
    const palette = getColorPalette(theme);

    return (
        <Row className={`${style.colorTheme}${theme}`}>
            {
                palette.map((color) => (
                    <Col key={color}>
                        <Tooltip title={color}>
                            <div className={style.colorThemePalette} style={{backgroundColor: color}} />
                        </Tooltip>
                    </Col>
                ))
            }
        </Row>
    );
};

const ColorSchema: React.FunctionComponent<void> = (): JSX.Element => (
    <Space size={40} direction="vertical">
        <Card title="Светлая тема">
            <ColorPalette theme={Theme.LIGHT} />
        </Card>

        <Card title="Темная тема">
            <ColorPalette theme={Theme.DARK} />
        </Card>
    </Space>
);

export {ColorSchema};
