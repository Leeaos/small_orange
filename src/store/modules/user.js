import api from "../../request/api";
import { post,get } from "../../request//index";


export default {
    namespaced: true,
    state: {

    },
    actions: {

    },
    mutations: {
        //   发送验证码
        async requestCode(context) {
            let  data  = await get(api.SEND_CODE_API,{value});
            console.log('触发了', data);
            // let newData = data.map(({ id, name }) => ({ id, name }));
            // context.commit("setCategoryMapData", newData);
        },
    }

}