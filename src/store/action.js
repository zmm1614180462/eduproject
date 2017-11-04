import axios from 'assets/js/http'
import {
  ADD_SUBACCOUNT
} from './mutation-types'

export default {
  add_subaccount({
    commit,
    state
  }) {
    axios.post('/api/user/account/show').then(function(res){
        if(res.status==200){
            if(res.data.data){
              commit('ADD_SUBACCOUNT',{data:res.data})
            }

        }
    })
  }
}
