import App from '../App'
//../components/head/Head'
const NotFoundComponent = r => require.ensure([], () => r(require('../page/404')), 'NotFoundComponent')
const Login = r => require.ensure([], () => r(require('../page/teach/FindProblem')), 'Login')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
      {
        path: "/login",
        component: Login,
        name: "",
      },
      {
        path: "/teach",
      },

      {
        path:"/student",
      },

      {
        path:"/parent",
      },
      {
        path: '*',
        component: NotFoundComponent
      }
    ]
  },

]
