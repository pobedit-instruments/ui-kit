import React from 'react';
import {linkTo} from '@storybook/addon-links';

import {
    Card,
    Grid,
    Divider,
    Typography
} from 'src/components';

import {
    BasicElement,
    Component,
    Content,
    Indicator,
    Informers,
    Layout,
    Navigation,
    Other,
    Widget
} from 'src/structure';

import style from './components.stories.less';

type Components = Array<{
    title: string;
    items: Array<{
        name: string;
        icon: string;
    }>
}>;

const {Column, Row} = Grid;

const components: Components = [
    {
        title: Component.BASIC_ELEMENTS,
        items: [
            {
                name: BasicElement.TYPOGRAPHY,
                icon: require('./static/typography.svg')
            },
            {
                name: BasicElement.ICON,
                 icon: require('./static/icon.svg')
            },
            {
                name: BasicElement.BUTTON,
                 icon: require('./static/button.svg')
            },
            {
                name: BasicElement.RADIO,
                 icon: require('./static/radio.svg')
            },
            {
                name: BasicElement.CHECKBOX,
                 icon: require('./static/checkbox.svg')
            },
            {
                name: BasicElement.SWITCH,
                 icon: require('./static/switch.svg')
            },
            {
                name: BasicElement.TEXT_FIELD,
                 icon: require('./static/input.svg')
            },
            {
                name: BasicElement.SELECT,
                 icon: require('./static/select.svg')
            },
            {
                name: BasicElement.SLIDER,
                 icon: require('./static/slider.svg')
            }
        ]
    },

    {
        title: Component.CONTENT,
        items: [
            {
                name: Content.TABLE,
                 icon: require('./static/table.svg')
            },
            {
                name: Content.LIST,
                 icon: require('./static/list.svg')
            },
            {
                name: Content.CARD,
                 icon: require('./static/card.svg')
            },
            {
                name: Content.COUPON,
                 icon: require('./static/coupon.svg')
            },
            {
                name: Content.ACCORDION,
                 icon: require('./static/collapse.svg')
            },
            {
                name: Content.PANEL,
                 icon: require('./static/drawer.svg')
            },
            {
                name: Content.MODAL,
                 icon: require('./static/modal.svg')
            }
        ]
    },

    {
        title: Component.LAYOUT,
        items: [
            {
                name: Layout.GRID,
                 icon: require('./static/grid.svg')
            },
            {
                name: Layout.LAYOUT,
                 icon: require('./static/layout.svg')
            },
            {
                name: Layout.DIVIDER,
                 icon: require('./static/divider.svg')
            },
            {
                name: Layout.SPACE,
                 icon: require('./static/space.svg')
            }
        ]
    },

    {
        title: Component.INDICATORS,
        items: [
            {
                name: Indicator.PROGRESS,
                 icon: require('./static/progress.svg')
            },
            {
                name: Indicator.SPINNER,
                 icon: require('./static/spin.svg')
            },
            {
                name: Indicator.PULSAR,
                 icon: require('./static/pulsar.png')
            },
            {
                name: Indicator.SKELETON,
                 icon: require('./static/skeleton.svg')
            },
            {
                name: Indicator.TIMELINE,
                 icon: require('./static/timeline.svg')
            }
        ]
    },

    {
        title: Component.NAVIGATION,
        items: [
            {
                name: Navigation.BREADCRUMBS,
                 icon: require('./static/breadcrumb.svg')
            },
            {
                name: Navigation.PAGINATION,
                 icon: require('./static/pagination.svg')
            },
            {
                name: Navigation.STEPS,
                 icon: require('./static/steps.svg')
            },
            {
                name: Navigation.MENU,
                 icon: require('./static/menu.svg')
            },
            {
                name: Navigation.TABS,
                 icon: require('./static/tabs.svg')
            }
        ]
    },

    {
        title: Component.INFORMERS,
        items: [
            {
                name: 'Строка оповещения',
                 icon: require('./static/alert.svg')
            },
            {
                name: 'Информационное сообщение',
                 icon: require('./static/message.svg')
            },
            {
                name: Informers.NOTIFICATION,
                 icon: require('./static/notification.svg')
            },
            {
                name: Informers.POPOVER,
                 icon: require('./static/popover.svg')
            },
            {
                name: Informers.BADGE,
                 icon: require('./static/badge.svg')
            },
            {
                name: Informers.TOOLTIP,
                 icon: require('./static/tooltip.svg')
            },
            {
                name: Informers.TAG,
                 icon: require('./static/tag.svg')
            }
        ]
    },

    {
        title: Component.OTHER,
        items: [
            {
                name: Other.AFFIX,
                 icon: require('./static/affix.svg')
            },
            {
                name: Other.FILE_UPLOADER,
                 icon: require('./static/upload.svg')
            }
        ]
    },

    {
        title: Component.WIDGETS,
        items: [
            {
                name: Widget.CALENDAR,
                 icon: require('./static/calendar.svg')
            },
            {
                name: Widget.BACK_TOP,
                 icon: require('./static/back-top.svg')
            },
            {
                name: Widget.IMAGE_PREVIEW,
                 icon: require('./static/image.svg')
            }
        ]
    },
];

const Components = (): JSX.Element[] => {
    const cards = Object.values(components);

    return cards.map(({title, items}) => (
        <div key={title}>
            <Divider />

            <Row className={style.components}>
                <Column span={24}>
                    <Typography.Title level={3}>{title}</Typography.Title>

                    <Row gutter={[20, 20]}>
                        {
                            items.map(({name, icon}) => (
                                <Column span={6} key={name}>
                                    <Card hoverable={true}
                                          title={name}
                                          onClick={linkTo(`${title}/${name}`)}
                                    >
                                        <div className={style.components__card}>
                                            <img src={icon}
                                                 alt={name}
                                                 title={name}
                                                 className={style.components__image}
                                            />
                                        </div>
                                    </Card>
                                </Column>
                            ))
                        }
                    </Row>
                </Column>
            </Row>
        </div>
    ));
};

export {Components};
