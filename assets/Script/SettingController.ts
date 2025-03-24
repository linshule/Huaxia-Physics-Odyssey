import { _decorator, Button, Component, Node,EventMouse, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SettingController')
export class SettingController extends Component {
    @property({type: String})
    targetScene:string="Start";
    onLoad(){
       const button=this.node.getComponent(Button);
       button.node.on(Button.EventType.CLICK,this.switchScene,this);
    }
    switchScene(){
        director.loadScene(this.targetScene);
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


