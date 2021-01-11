import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/Dashboard.vue'
import Test from '../components/Test.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
]
const router =  new VueRouter({
    routes
})
export default router
