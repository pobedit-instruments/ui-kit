import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import dedent from 'ts-dedent';

import {
    Affix,
    Button
} from 'src/components';

import {AffixProps} from 'src/components/affix';
import style from './affix.stories.less';

const Template: Story<AffixProps> = ({...props}): JSX.Element => {
    const container = React.useRef<HTMLDivElement>(null);

    return (
        <div className={style.affix__container} ref={container}>
            <div className={style.affix__background}>
                <Affix target={() => container.current} {...props}>
                    <Button type="primary">Скролируйте</Button>
                </Affix>
            </div>
        </div>
    );
};

const AffixStory = Template.bind({});

AffixStory.storyName = 'Базовое использование';

AffixStory.parameters = {
    docs: {
        source: {
            code: dedent`
                const container = React.useRef<HTMLDivElement>(null);

                return (
                    <div ref={container}>
                        <div>
                            <Affix offsetTop={100} target={() => container.current} {...props}>
                                <Button>Скролируйте</Button>
                            </Affix>
                        </div>
                    </div>
                );
            `
        }
    }
};

export {AffixStory};
