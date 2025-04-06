import { _decorator, Button, Component, EventHandler, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KnobControl')
export class KnobControl extends Component {

    @property(Node)
    plusButton: Node = null;

    @property(Node)
    minusButton: Node = null;

    @property(Node)
    knobNode: Node = null;

    @property(Node)
    sliderNode: Node = null;

    @property
    moveStep: number = 10;

    private minX: number;
    private maxX: number;
    private volume: number = 0;

    start() {
        this.calculateRange();
        this.clampKnobToRange();
        this.setupButtons();
    }

    calculateRange() {
        const sliderTrans = this.sliderNode.getComponent(UITransform);
        const knobTrans = this.knobNode.getComponent(UITransform);

        const sliderPosX = this.sliderNode.getPosition().x;
        const sliderWidth = sliderTrans.width * this.sliderNode.scale.x;
        const knobWidth = knobTrans.width * this.knobNode.scale.x;

        const halfSlider = sliderWidth / 2;
        const halfKnob = knobWidth / 2;

        this.minX = sliderPosX - halfSlider + halfKnob;
        this.maxX = sliderPosX + halfSlider - halfKnob;
    }

    clampKnobToRange() {
        const pos = this.knobNode.getPosition();
        let clampedX = Math.max(this.minX, Math.min(pos.x, this.maxX));
        this.knobNode.setPosition(new Vec3(clampedX, pos.y, pos.z));
    }

    setupButtons() {
        if (this.plusButton) {
            const plusBtnComp = this.plusButton.getComponent(Button);
            plusBtnComp.clickEvents = []; // 清空旧的
            const plusHandler = new EventHandler();
            plusHandler.target = this.node;
            plusHandler.component = "KnobControl";
            plusHandler.handler = "onPlusClicked";
            plusBtnComp.clickEvents.push(plusHandler);
        }

        if (this.minusButton) {
            const minusBtnComp = this.minusButton.getComponent(Button);
            minusBtnComp.clickEvents = []; // 清空旧的
            const minusHandler = new EventHandler();
            minusHandler.target = this.node;
            minusHandler.component = "KnobControl";
            minusHandler.handler = "onMinusClicked";
            minusBtnComp.clickEvents.push(minusHandler);
        }
    }

    moveKnob(delta: number) {
        const pos = this.knobNode.getPosition();
        let newX = pos.x + delta;
        newX = Math.max(this.minX, Math.min(newX, this.maxX));
        this.knobNode.setPosition(new Vec3(newX, pos.y, pos.z));

        this.updateVolume(newX);
    }

    updateVolume(knobX: number) {
        const ratio = (knobX - this.minX) / (this.maxX - this.minX);
        this.volume = Math.round(ratio * 100);
        console.log("当前音量:", this.volume);
    }

    onPlusClicked() {
        this.moveKnob(this.moveStep);
    }

    onMinusClicked() {
        this.moveKnob(-this.moveStep);
    }
}
