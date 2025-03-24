import { _decorator, Button, Component, Node,EventMouse, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SettingController')
export class SettingController extends Component {
    @property({type: String})
    targetScene1:string="Start";
    @property(Node)
    down:Node=null;
    @property(Node)
    up:Node=null;
    onLoad(){
       const button1=this.node.getComponent(Button);
       button1.node.on(Button.EventType.CLICK,this.switchScene1,this);
    }
    switchScene1(){
        director.loadScene(this.targetScene1);
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


