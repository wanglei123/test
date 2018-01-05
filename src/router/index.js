import Vue from 'vue'
import Router from 'vue-router'
//引入相应的组件
import home from '@/components/home'
import about from '@/components/about'
import document from '@/components/document'
import renderTest from '@/components/renderTest'
import work from '@/components/about/work'
import study from '@/components/about/study'
import hobby from '@/components/about/hobby'
import user from '@/components/user'

import silder from '@/components/silder'
import notFound from '@/components/404'

Vue.use(Router)  //Vue.use 安装相关插件

let router = new Router({
  /*
  * vue-router默认是hash模式。设置参数-mode: 'history'，可以改为history模式，这时对应的html应该改为 <router-link to="/about">about</router-link>
  * 因为原生的<a>标签会导致页面刷新
  * */
  mode: 'history',
  linkActiveClass: 'is-active',  //全局设置--被选中的导航的class,默认是router-link-active
  scrollBehavior(to, from, savePosition) {  //切换导航或者浏览器前进，后退时触发  ,记录滚动位置，也可以定位hash
    console.log(to);
    console.log(from);
    console.log(savePosition);  //滚动条的坐标，只有浏览器前进，后退时才有值

    // if (savePosition) {
    //   return savePosition;
    // } else {
    //   return {x: 0, y: 0}
    // }

    if (to.hash){
      return {selector:to.hash};
    }

  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: home,
      alias: '/index'   //当前路由的别名
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias: '/home'  //当前路由的别名
    },
    {
      path: '/about',
      component: about,
      children: [
        {
          path: '',  //置为空的话，默认子路由；打开之后，默认是被选中状态,不写"/",以"/"开头的都是对应的根路径
          name: 'study',
          component: study
        },
        {
          path: '/work',  // /work 嵌套路径，显示时按根路径显示
          name: 'work',
          component: work
        },
        {
          path: '/hobby',   // /work
          name: 'hobby',
          component: hobby
        }
      ]
    },
    {
      path: '/document',
      //一个路由配置多个组件，组件是同级的
      components: {
        default: document,
        silder: silder
      }
    },
    {
      path: '/user',
      name:'user',
      component: user
    },
    {
      path: '/render',
      component: renderTest
    },
    {
      path: '*',
      // component: notFound
      // redirect:'/home'   //重定向
      // redirect:{path:'/home'}
      // redirect:{name:'Home'}  用name来指定路由
      redirect: (to) => {
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/456') {
          return '/about'
        }
      }
    }
  ]
})
export default router
