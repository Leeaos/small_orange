export default {
    path: '/logins',
    component: () => import('../pages/common/login/Loginpage.vue'),
    children: [
        {
            path: 'login',
            component: () => import('../pages/common/login/Login.vue'),
        },
        {
            path: 'register',
            component: () => import('../pages/common/login/Register.vue'),
        }
    ]
}