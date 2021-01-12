import {addons} from '@storybook/addons';
import {themes} from '@storybook/theming';
import {create} from '@storybook/theming/create';

addons.setConfig({
    // theme: themes.light,
    theme: create({
        base: themes.light.base,
        brandTitle: 'UI Kit им. А.С. Пушкина',
        // brandImage: '',
        brandUrl: '/',
        gridCellSize: 8,
    }),

    showPanel: true,
    panelPosition: 'bottom'
});
