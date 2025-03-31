
import { _decorator, Button, Component, EventHandler, Node, Vec3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('KnobControl')
export class KnobControl extends Component {

    @property(Node)
    plusButton: Node = null;

    @property(Node)
    minusButton: Node = null;

    @property(Node)
    knobNode: Node = null;

    @property
    moveStep: number = 10;

    @property
    minX: number = 300;

    @property
    maxX: number = 440;

    moveKnob(delta: number) {
        const pos = this.knobNode.getPosition();
        let newX = pos.x + delta;
        newX = Math.max(this.minX, Math.min(newX, this.maxX));
        this.knobNode.setPosition(new Vec3(newX, pos.y, pos.z));
    }

    onPlusClicked() {
        this.moveKnob(this.moveStep);
    }

    onMinusClicked() {
        this.moveKnob(-this.moveStep);
    }

    start() {
        if (this.plusButton) {
            const plusBtnComp = this.plusButton.getComponent(Button);
            const plusHandler = new EventHandler();
            plusHandler.target = this.node;
            plusHandler.component = "KnobControl"; // 👈 必须与你类名一致
            plusHandler.handler = "onPlusClicked";
            plusBtnComp.clickEvents.push(plusHandler);
        }

        if (this.minusButton) {
            const minusBtnComp = this.minusButton.getComponent(Button);
            const minusHandler = new EventHandler();
            minusHandler.target = this.node;
            minusHandler.component = "KnobControl";
            minusHandler.handler = "onMinusClicked";
            minusBtnComp.clickEvents.push(minusHandler);
        }
    }

}
