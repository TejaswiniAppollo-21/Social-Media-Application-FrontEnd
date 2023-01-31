## LoadChildrenCallback

A function that is called to resolve a collection of lazy-loaded routes. Must be an arrow function of the following form: () => import('...').then(mod => mod.MODULE) or () => import('...').then(mod => mod.ROUTES)

## forChild() configuration

forRoot() configuration will be done in the parent routing and in all other child routes forChild() configuration has to be done.

## <router-outlet></router-outlet> inside another component

``` Javascript

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            {
                path: 'signup',
                component: SignUpComponent
            },
            {
                path: 'signin',
                component: SignInComponent
            }
        ]
    }
];

```