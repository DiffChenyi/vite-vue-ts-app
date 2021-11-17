import Axios from 'axios';
const axios = Axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
    }
});

// 请求拦截
axios.interceptors.request.use(
    config => {
        // JTW规范请求头中添加令牌 Authorization: Bearer <token>
        // config.headers['Authorization'] = `Bearer ${Cookie.get('webyi_jwt_token')}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
export default axios;