import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from "../..";
import router from '../../../router'

@Module({
    namespaced: true,
    stateFactory: true,
    dynamic: true,
    name: "LoginStore",
    store,
})
export default class LoginStore extends VuexModule {
    public username:String = 'admin'; //state
    public password:String = '';

    @Action({ commit: 'success' })
    public async login() {       
        this.setUsername("英雄！");
        //router.push({path: '/manager'})
    }

    @Mutation
    private setUsername(data: String) {
        this.username = data;
    }

    @Mutation
    private setPassword(data: String) {
        this.password = data;
    }

    @Mutation
    private success() {
       
    }
}
