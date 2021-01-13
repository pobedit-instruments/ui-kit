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
                        loader: 'css-loader'
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
