import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/Home.vue';

/**  菜单目录
 * 1、alarmMonitor      预警监控
 * 2、analysisTool      分析工具
 * 3、businessAudit     操作日志审计
 * 4、earlyWarning      预警管理
 * 5、homePage          首页
 * 6、knowledgeBase     知识库
 * 7、marketStability   舆情监测
 * 8、marketSupervise   市场运行监测
 * 9、publicSupervise   业务审计
 * 10、sensation        工作统计
 * 11、superviseTask    监察任务
 * 12、systemManage     系统管理
 // * 13、workStatistics   系统管理-模块管理
  **/

import AlarmMonitorIndexChildren from './alarmMonitor/index'; // 预警监控

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: '首页',
            // 不常用的方法
            // component: () => import( /* webpackChunkName: "about" */
            // '@/views/Home.vue'), // 首页  
            // 常用的方法
            component: function (resolve) {
                require(['@/views/Home'], resolve);
            },
        },
        {
            path: '/Home',
            name: '首页',
            component: function (resolve) {
                require(['@/views/Home'], resolve);
            }
        },
        {
            path: '/about',
            name: '介绍',
            component: function (resolve) {
                require(['@/views/About'], resolve);
            }
        },
        {
            path: '/alarmMonitor',
            name: '预警监控',
            component: function (resolve) {
                require(['@/views/alarmMonitor'], resolve);
            }
            // children: []
        },

        AlarmMonitorIndexChildren,
        {
            path: '/analysisTool',
            name: '分析工具',
            component: function (resolve) {
                require(['@/views/analysisTool'], resolve);
            }
        },
        {
            path: '/businessAudit',
            name: '操作日志审计',
            component: function (resolve) {
                require(['@/views/businessAudit'], resolve);
            }
        },
        {
            path: '/earlyWarning',
            name: '预警管理',
            component: function (resolve) {
                require(['@/views/earlyWarning'], resolve);
            }
        },
        {
            path: '/homePage',
            name: '首页',
            component: function (resolve) {
                require(['@/views/homePage'], resolve);
            }
        },
        {
            path: '/knowledgeBase',
            name: '知识库',
            component: function (resolve) {
                require(['@/views/knowledgeBase'], resolve);
            }
        },
        {
            path: '/marketStability',
            name: '舆情监测',
            component: function (resolve) {
                require(['@/views/marketStability'], resolve);
            }
        },
        {
            path: '/marketSupervise',
            name: '市场运行监测',
            component: function (resolve) {
                require(['@/views/marketSupervise'], resolve);
            }
        },
        {
            path: '/publicSupervise',
            name: '业务审计',
            component: function (resolve) {
                require(['@/views/publicSupervise'], resolve);
            }
        },
        {
            path: '/sensation',
            name: '工作统计',
            component: function (resolve) {
                require(['@/views/sensation'], resolve);
            }
        },
        {
            path: '/superviseTask',
            name: '监察任务',
            component: function (resolve) {
                require(['@/views/superviseTask'], resolve);
            }
        },
        {
            path: '/systemManage',
            name: '系统管理',
            component: function (resolve) {
                require(['@/views/systemManage'], resolve);
            }
        },
        {
            path: '/workStatistics',
            name: '系统管理-模块管理',
            component: function (resolve) {
                require(['@/views/workStatistics'], resolve);
            }
        },
    ]
});