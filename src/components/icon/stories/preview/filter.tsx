import React from 'react';
import {Radio, Space} from 'antd';
import {RadioChangeEvent} from 'antd/lib/radio/interface';

import Icon from '@ant-design/icons';

import {
    FilledIcon,
    OutlinedIcon,
    TwoToneIcon
} from './icons';

import style from './preview.module.less';

enum ThemeType {
    OUTLINED = 'Outlined',
    FILLED = 'Filled',
    TWO_TONE = 'TwoTone'
}

type Props = {
    onChange: ({target}: RadioChangeEvent) => void
};

const Filter: React.FunctionComponent<Props> = ({onChange}): JSX.Element => {
    return (
        <div className={style.search}>
            <Radio.Group
                onChange={onChange}
                defaultValue={ThemeType.OUTLINED}
                buttonStyle="solid"
                size="large"
            >
                <Radio.Button value={ThemeType.OUTLINED}>
                    <Space>
                        <Icon component={OutlinedIcon} />
                        С очертанием
                    </Space>
                </Radio.Button>

                <Radio.Button value={ThemeType.FILLED}>
                    <Space>
                        <Icon component={FilledIcon} />
                        С заливкой
                    </Space>
                </Radio.Button>

                <Radio.Button value={ThemeType.TWO_TONE}>
                    <Space>
                        <Icon component={TwoToneIcon} />
                        Два тона
                    </Space>
                </Radio.Button>
            </Radio.Group>

        </div>
    );
};

export {
    Filter,
    ThemeType
};
