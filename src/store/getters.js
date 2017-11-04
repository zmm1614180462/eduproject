export default {
	currentAlert(state){
        return state.showAlert
    },
    getusername(state){
        if(state.userinfo.user_nickname){
            return state.userinfo.user_nickname
        }
    },
    getavatar(state){
        if(state.userinfo.avatar){
            return state.userinfo.avatar
        }else{
            return '/static/avatar.png'
        }
    },
    //获取用户信息
    isLogin(state){
        if(state.token){
            return true
        }else{
            return false
        }
    }
}