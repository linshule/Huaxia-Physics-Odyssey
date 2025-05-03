import { _decorator, Component, Node, Animation, Label, Vec3, EventMouse, input, Input, EventTouch, UITransform } from 'cc';
import { createDialogTextNode } from './DialogueUtil';
const { ccclass, property } = _decorator;

@ccclass('StartController')
export class StartController extends Component {
    @property(Animation)
    BodyAnim: Animation = null;
    @property(Animation)
    BodyAnim1: Animation = null;
    @property(Node)
    tipsPanel: Node = null;
    @property(Node)
    Settings: Node = null;
    onLoad() {
        this.tipsPanel.active = false;
        this.Settings.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.Settings.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    }
    private onMouseEnter() {
        this.tipsPanel.active = true;
    }
    private onMouseLeave() {
        this.tipsPanel.active = false;
    }
    start() {
        this.BodyAnim.play('oneStep');
        this.BodyAnim1.play('tStep');
    }

    update(deltaTime: number) {

    }
}


