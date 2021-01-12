import dedent from 'ts-dedent';

const dataSource = [
    {
        key: '1',
        property: 'itemRender',

        description: dedent `
            Функция кастомизации навигационных пунктов
            <br />
            <br />

            <pre>
            import {Link} from 'react-router';

            const routes = [
              {
                path: 'index',
                breadcrumbName: 'Домой'
              },
              {
                path: 'basic,
                breadcrumbName: 'Базовые элементы',
                children: [
                  {
                    path: '/basic',
                    breadcrumbName: 'Базовые элементы'
                  }
                ]
              }
            ];

            const itemRender = ({breadcrumbName}, params, routes, paths) => {
              const last = routes.indexOf(route) === routes.length - 1;

              return last ? breadcrumbName : (
                &lt;Link to={paths.join('/')}&gt;{breadcrumbName}&lt;/Link&gt;
              );
            };

            return &lt;Breadcrumb itemRender={itemRender} routes={routes} /&gt;;
            </pre>
        `,
        type: 'routes[]',
        value: '-'
    },
    {
        key: '2',
        property: 'params',
        description: 'Параметры роутинга',
        type: 'Object',
        value: '-'
    },
    {
        key: '3',
        property: 'routes',
        description: dedent `
            Маршруты
            <br />
            <br />

            <pre>
            type Route = {
              path: string;
              breadcrumbName: string;
              children: Array<{
                path: string;
                breadcrumbName: string;
              }>;
            }
            </pre>
        `,
        type: 'routes[]',
        value: '-'
    },
    {
        key: '4',
        property: 'separator',
        description: 'Разделитель',
        type: 'React.ReactNode',
        value: '/'
    }
];

export {dataSource};
