import { _decorator, Button, Component, Node, EventMouse, director, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import { createDialogTextNode } from './DialogueUtil';

@ccclass('NewComponent')
export class NewComponent extends Component {
    @property({ type: Node })
    bg: Node | null = null;
    onLoad() {
        this.show();
    }
    show() {
        let nt = createDialogTextNode(new Vec3(0, 200, 0), '引擎工程师：林舒乐 匡欣怡 袁瑛凯')
        this.bg.addChild(nt);
        setTimeout(() => {
            nt = createDialogTextNode(new Vec3(0, 200, 0), '原画师：伍婷婷 蔡凌');
            this.bg.addChild(nt);
            setTimeout(() => {
                nt = createDialogTextNode(new Vec3(0, 200, 0), '文案策划：伍婷婷 袁瑛凯 林舒乐');
                this.bg.addChild(nt);
                setTimeout(() => {
                    nt = createDialogTextNode(new Vec3(0, 200, 0), '动画师：匡欣怡 林舒乐');
                    this.bg.addChild(nt);
                    setTimeout(() => {
                        nt = createDialogTextNode(new Vec3(0, 200, 0), '音频工程师：伍婷婷 匡欣怡');
                        this.bg.addChild(nt);
                        setTimeout(() => {
                            nt = createDialogTextNode(new Vec3(0, 200, 0), '关卡策划：伍婷婷 林舒乐');
                            this.bg.addChild(nt);
                            setTimeout(() => {
                                nt = createDialogTextNode(new Vec3(0, 200, 0), '客户端程序员：林舒乐 匡欣怡 袁瑛凯');
                                this.bg.addChild(nt);
                                setTimeout(() => {
                                    nt = createDialogTextNode(new Vec3(0, 200, 0), '技术总监：林舒乐');
                                    this.bg.addChild(nt);
                                    setTimeout(() => {
                                        nt = createDialogTextNode(new Vec3(0, 200, 0), '测试工程师：匡欣怡');
                                        this.bg.addChild(nt);
                                        setTimeout(() => {
                                            nt = createDialogTextNode(new Vec3(0, 200, 0), '感谢你的游玩');
                                            this.bg.addChild(nt);
                                        }, 5000);
                                    }, 5000);
                                }, 5000);
                            }, 5000);
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);

    }
    start() {

    }

    update(deltaTime: number) {

    }
}


