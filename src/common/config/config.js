'use strict';
/**
 * config
 */
export default {
    //key: value
    // host: "127.0.0.1", //禁止端口访问，如 http://115.29.109.30:8361；删除则不限制。
    port: 5500,
    pagesize: 10,
    route_on: true,
    encoding: "utf-8",
    OSS: {
        on: false, //true上传oss服务器，false上传应用服务器
        domain: "", //例：http://statics.jsout.com
        img_url: "static/upload/pics/",
        region: '', //例：oss-cn-shanghai
        accessKeyId: '', //id
        accessKeySecret: '', //key
        bucket: '' //jsout
    },
    geetest: {
        //极验验证码配置，申请地址：http://www.geetest.com，请改成自己帐号！
        geetest_id: 'f0b4f8344cb5566554457863e4cf70d5',
        geetest_key: 'd7cbdd1c37b7d99cf95e263aa982d12b'
    },
    point: {
        addcollect: 1,
        addtopic: 5,
        addcomment: 3
    },
    resource_reg: /^(static\/|theme\/|[^\/]+\.(?!js|html|xml)\w+$)/,
};