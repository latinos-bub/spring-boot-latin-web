// created by util.you.com@gmail.com

import axios from 'axios';
import {Message, MessageBox} from 'element-ui';
import {getToken} from '@/utils/auth';
import store from '../store';


// 创建 axios 实例
const service = axios.create({
    baseURL: process.env.BASE_URL,   // api 的 base_url
    timeout: 15000      // 请求超时时延
});


service.interceptors.request.use(config => {
    return config;
}, error => {
    // Do something with request error
    console.error(error); // for debug
    Promise.reject(error);
});


// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code == '1000') {
            return res;
        }
        if (res.code == '100') {
            return res.info;
        } else if (res.code == '20011') {
            Message({
                showClose: true,
                message: res.msg,
                type: 'error',
                duration: 500,
                onClose: () => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload();    // 为了重新实例化 vue-router 对象，避免 bug
                    });
                }
            });
            return Promise.reject('未登录');
        } else {
            Message({
                message: res.msg,
                type: 'error',
                duration: 3 * 1000
            });

            return Promise.reject(res);
        }
    },

    error => {
        console.error('error' + error);   // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        });

        return Promise.reject(error);
    }
);


export default service;
