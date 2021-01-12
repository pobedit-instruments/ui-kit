import React from 'react';
import {linkTo} from '@storybook/addon-links';

import {
    Card,
    Col,
    Divider,
    Row,
    Typography
} from 'antd';

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

import style from './components.less';

type Components = Array<{
    title: string;
    items: Array<{
        name: string;
        icon: string;
    }>
}>;

const components: Components = [
    {
        title: Component.BASIC_ELEMENTS,
        items: [
            {
                name: BasicElement.TYPOGRAPHY,
                icon: './stories/system/components/typography.svg'
            },
            {
                name: BasicElement.ICON,
                icon: './stories/system/components/icon.svg'
            },
            {
                name: BasicElement.BUTTON,
                icon: './stories/system/components/button.svg'
            },
            {
                name: BasicElement.RADIO,
                icon: './stories/system/components/radio.svg'
            },
            {
                name: BasicElement.CHECKBOX,
                icon: './stories/system/components/checkbox.svg'
            },
            {
                name: BasicElement.SWITCH,
                icon: './stories/system/components/switch.svg'
            },
            {
                name: BasicElement.TEXT_FIELD,
                icon: './stories/system/components/input.svg'
            },
            {
                name: BasicElement.SELECT,
                icon: './stories/system/components/select.svg'
            },
            {
                name: BasicElement.SLIDER,
                icon: './stories/system/components/slider.svg'
            }
        ]
    },

    {
        title: Component.CONTENT,
        items: [
            {
                name: Content.TABLE,
                icon: './stories/system/components/table.svg'
            },
            {
                name: Content.LIST,
                icon: './stories/system/components/list.svg'
            },
            {
                name: Content.CARD,
                icon: './stories/system/components/card.svg'
            },
            {
                name: Content.COUPON,
                icon: './stories/system/components/coupon.svg'
            },
            {
                name: Content.ACCORDION,
                icon: './stories/system/components/collapse.svg'
            },
            {
                name: Content.PANEL,
                icon: './stories/system/components/drawer.svg'
            },
            {
                name: Content.MODAL,
                icon: './stories/system/components/modal.svg'
            }
        ]
    },

    {
        title: Component.LAYOUT,
        items: [
            {
                name: Layout.GRID,
                icon: './stories/system/components/grid.svg'
            },
            {
                name: Layout.LAYOUT,
                icon: './stories/system/components/layout.svg'
            },
            {
                name: Layout.DIVIDER,
                icon: './stories/system/components/divider.svg'
            },
            {
                name: Layout.SPACE,
                icon: './stories/system/components/space.svg'
            }
        ]
    },

    {
        title: Component.INDICATORS,
        items: [
            {
                name: Indicator.PROGRESS,
                icon: './stories/system/components/progress.svg'
            },
            {
                name: Indicator.SPINNER,
                icon: './stories/system/components/spin.svg'
            },
            {
                name: Indicator.SKELETON,
                icon: './stories/system/components/skeleton.svg'
            },
            {
                name: Indicator.TIMELINE,
                icon: './stories/system/components/timeline.svg'
            }
        ]
    },

    {
        title: Component.NAVIGATION,
        items: [
            {
                name: Navigation.BREADCRUMBS,
                icon: './stories/system/components/breadcrumb.svg'
            },
            {
                name: Navigation.PAGINATION,
                icon: './stories/system/components/pagination.svg'
            },
            {
                name: Navigation.STEPS,
                icon: './stories/system/components/steps.svg'
            },
            {
                name: Navigation.MENU,
                icon: './stories/system/components/menu.svg'
            },
            {
                name: Navigation.TABS,
                icon: './stories/system/components/tabs.svg'
            }
        ]
    },

    {
        title: Component.INFORMERS,
        items: [
            {
                name: 'Строка оповещения',
                icon: './stories/system/components/alert.svg'
            },
            {
                name: 'Информационное сообщение',
                icon: './stories/system/components/message.svg'
            },
            {
                name: Informers.NOTIFICATION,
                icon: './stories/system/components/notification.svg'
            },
            {
                name: Informers.POPOVER,
                icon: './stories/system/components/popover.svg'
            },
            {
                name: Informers.BADGE,
                icon: './stories/system/components/badge.svg'
            },
            {
                name: Informers.TOOLTIP,
                icon: './stories/system/components/tooltip.svg'
            },
            {
                name: Informers.TAG,
                icon: './stories/system/components/tag.svg'
            }
        ]
    },

    {
        title: Component.OTHER,
        items: [
            {
                name: Other.AFFIX,
                icon: './stories/system/components/affix.svg'
            },
            {
                name: Other.FILE_UPLOADER,
                icon: './stories/system/components/upload.svg'
            }
        ]
    },

    {
        title: Component.WIDGETS,
        items: [
            {
                name: Widget.CALENDAR,
                icon: './stories/system/components/calendar.svg'
            },
            {
                name: Widget.BACK_TOP,
                icon: './stories/system/components/back-top.svg'
            },
            {
                name: Widget.IMAGE_PREVIEW,
                icon: './stories/system/components/image.svg'
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
                <Col span={24}>
                    <Typography.Title level={3}>{title}</Typography.Title>

                    <Row gutter={[20, 20]}>
                        {
                            items.map(({name, icon}) => (
                                <Col span={6} key={name}>
                                    <Card hoverable={true} title={name} onClick={linkTo(`${title}/${name}`)}>
                                        <div className={style.components__card}>
                                            <img src={icon} alt={name} title={name} className={style.components__image} />
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    ));
};

export {Components};
