define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'views/home.html',
                dependencies: [
                    'controllers/sample',
                    'directives/sample'
                ]
            },
            '/list/': {
                templateUrl: 'views/list.html',
                dependencies: [
                    'controllers/sample',
                    'directives/sample'
                ]
            },
            '/detail/:id?/': {
                templateUrl: 'views/list.html',
                dependencies: [
                    'controllers/sample',
                    'directives/sample'
                ]
            },
        }
    };
});