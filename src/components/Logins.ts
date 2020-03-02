
import { Component, Vue, Model, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import LoginStore from '../store/modules/login/loginStore';

@Component({
    computed: {
        username: {
            get: () => {
                return this.username
            },
            set: (data) => { 
                this.username = data;
            }
        }
    }
})
export default class Login extends Vue {
    private store: any;
    constructor() {
        super();
        this.store = getModule(LoginStore)
    }
    get username(): String {
        return this.store.username
    }
    set username(data: String) {
        this.store.setUsername(data)
    }
    public login() {        
        this.store.login();  
    }
}
