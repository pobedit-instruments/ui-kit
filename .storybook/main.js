module.exports = {
    stories: [
        '../src/**/*.stories.@(ts|tsx|mdx)'
    ],
    addons: [
        // '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/preset-create-react-app',
            options: {
                scriptsPackageName: 'react-scripts',

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
                            modules: {
                                // Для файлов index.less собираем Ant Design и переменные Less, которые его кастомизируют
                                // Во всех остальных случаях используем CSS Modules
                                auto: (resourcePath) => !resourcePath.endsWith('index.less'),
                                // localIdentName: '[name]__[local]___[hash:base64:5]',
                            },
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]);

        return config;
    }
};
