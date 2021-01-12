// const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');

module.exports = {
    typescript: {
        // https://github.com/storybookjs/storybook/issues/8143
        // reactDocgenTypescriptOptions: {
        //     shouldExtractLiteralValuesFromEnum: true,
        //     shouldRemoveUndefinedFromOptional: true
        // }
    },
    stories: [
        '../src/**/*.stories.@(ts|tsx|mdx)'
    ],
    addons: [
        // '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/preset-create-react-app',
            options: {
                // scriptsPackageName: 'react-scripts',
                craOverrides: {
                    fileLoaderExcludes: ['less']
                }
            }
        }
    ],

    webpackFinal: async (config) => {
        [].push.apply(config.module.rules, [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            additionalData: '@import "~antd/lib/style/themes/default.less";',
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]);

        // Резолвит пути из tsconfig.json, но поскольку create-react-app не умеет работать с алиасами,
        // то эта надстройка бесполезна.
        // [].push.apply(config.resolve.plugins, [
        //     new TsconfigPathsPlugin({extensions: config.resolve.extensions})
        // ]);

        // Позволяет обойти ограничение на поиск файлов только в src
        // const scopePluginIndex = config.resolve.plugins.findIndex(({constructor}) => {
        //     return constructor && constructor.name === 'ModuleScopePlugin';
        // })
        //
        // config.resolve.plugins.splice(scopePluginIndex, 1);

        return config;
    }
};
