import axios from "../utils/request";
import path from "./path"
const api={
    //成品详情地址
    getChengPin(){
        // 模拟跨域
        return axios.get("/s?wd=%E4%B8%AD%E5%9B%BD%E5%A4%96%E8%B4%B8%E5%90%91%E5%A5%BD%E5%8F%91%E5%B1%95&sa=fyb_n_homepage&rsv_dl=fyb_n_homepage&from=super&cl=3&tn=baidutop10&fr=top1000&rsv_idx=2&hisfilter=1")
        // return axios.get(path.baseUrl+path.chengpin)
    }
}
export default api