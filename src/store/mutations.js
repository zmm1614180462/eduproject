import {
	LOGIN,
	OUT_LOGIN,
	OpenAlert,
	CloseAlert,
	USER_NAME,
	GET_USERINFO,
	SAVE_USERINFO,
	CHANGE_NAV,
	REMOVE_SUBACCOUNT,
	ADD_SUBACCOUNT

} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

import {localapi, proapi} from 'src/config/env'

export default {
	//登陆
	[LOGIN](state,{
		token,
	}) {
		localStorage.token = token;
		state.token = token
	},

	[USER_NAME](state,{
		username,
	}) {
		state.username = username
	},

	[SAVE_USERINFO](state,{
		data
	}){
		state.userinfo = Object.assign({},state.userinfo,{...data})
	},

	//登出
	[OUT_LOGIN](state) {
		localStorage.removeItem('token')
		state.token = '';
	},

	[OpenAlert](state) {
		state.showAlert = true;
	},

	[CloseAlert](state) {
		state.showAlert = false;
	},
	[CHANGE_NAV](state,{
		url
	}) {
		state.navUrl = url
	},
	[ADD_SUBACCOUNT](state,{data}){
		state.subaccount = data.data.list
	},

	[REMOVE_SUBACCOUNT](state,{
		index,
	}){
		state.subaccount.splice(index,1)

	}

}
