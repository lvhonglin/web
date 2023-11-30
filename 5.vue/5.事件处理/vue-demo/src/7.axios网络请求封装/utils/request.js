import axios from "axios";
import querystring from "querystring";
import {compile} from "vue";
const instance=axios.create({
    timeout:5000
})
export default instance
instance.interceptors.request.use(
    config=>{
        console.log("interceptor")
        if(config.methods==="post"){
            config.data=querystring.stringify(config.data)
        }
        // config：包含网络请求的所有信息
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)
//获取数据之前
instance.interceptors.response.use(
    response=>{
        return response.status===200?Promise.resolve(response):Promise.reject(response)
    },error => {
        const response=error
        errorHandle((response.status,response.info))
    }
)
const errorHandle=(status,info)=>{
    switch (status){
        case 400:
            console.log("语义有误")
            break
        case 500:
            console.log("服务器遇到意外")
            break
        default:
            console.log(info)
            break
    }
}