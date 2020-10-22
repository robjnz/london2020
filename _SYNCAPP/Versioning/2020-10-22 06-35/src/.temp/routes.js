const c1 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\websites\\london2020\\src\\templates\\Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-visit-vue" */ "D:\\websites\\london2020\\src\\pages\\visit.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-test-vue" */ "D:\\websites\\london2020\\src\\pages\\test.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-theatres-vue" */ "D:\\websites\\london2020\\src\\pages\\theatres.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-rugby-vue" */ "D:\\websites\\london2020\\src\\pages\\rugby.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-nightclubs-vue" */ "D:\\websites\\london2020\\src\\pages\\nightclubs.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-football-vue" */ "D:\\websites\\london2020\\src\\pages\\football.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-footballresults-vue" */ "D:\\websites\\london2020\\src\\pages\\footballresults.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\websites\\london2020\\src\\pages\\contact.vue")
const c10 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\websites\\london2020\\src\\pages\\About.vue")
const c11 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\websites\\london2020\\node_modules\\gridsome\\app\\pages\\404.vue")
const c12 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\websites\\london2020\\src\\pages\\Index.vue")

export default [
  {
    path: "/posts/covid19/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--posts-covid-19-md" */ "D:\\websites\\london2020\\posts\\covid19.md")
    }
  },
  {
    path: "/visit/",
    component: c2
  },
  {
    path: "/test/",
    component: c3
  },
  {
    path: "/theatres/",
    component: c4
  },
  {
    path: "/rugby/",
    component: c5
  },
  {
    path: "/nightclubs/",
    component: c6
  },
  {
    path: "/football/",
    component: c7
  },
  {
    path: "/footballresults/",
    component: c8
  },
  {
    path: "/contact/",
    component: c9
  },
  {
    path: "/about/",
    component: c10
  },
  {
    name: "404",
    path: "/404/",
    component: c11
  },
  {
    name: "home",
    path: "/",
    component: c12
  },
  {
    name: "*",
    path: "*",
    component: c11
  }
]
