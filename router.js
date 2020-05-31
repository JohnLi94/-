
import Home from '../components/Home';
import User from '../components/User';
    import UserList from '../components/User/UserList';
    import UserAdd from '../components/User/UserAdd';
    import UserEdit from '../components/User/UserEdit';
import Shop from '../components/Shop';
import News from '../components/News';


let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    {
      path: "/shop",
      component: Shop
    },
    {
      path: "/user",
      component: User,  
      routes:[   /*嵌套路由*/
        {
          path: "/user/",
          component: UserList
        },
        {
          path: "/user/add",
          component: UserAdd
        },
        {
          path: "/user/edit",
          component: UserEdit
        }
      ]
    },
    {
      path: "/news",
      component: News
    }
];

export default routes;