import { _decorator, Component, Node ,Animation} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartController')
export class StartController extends Component {
    @property(Animation)
    BodyAnim:Animation=null;
    start() {
        this.BodyAnim.play('oneStep');
    }

    update(deltaTime: number) {
        
    }
}


