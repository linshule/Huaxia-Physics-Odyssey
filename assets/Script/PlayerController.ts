import { _decorator, Component, Node, EventTarget, Input, input, EventKeyboard, KeyCode, RigidBody, Vec3, RigidBody2D, Vec2, Animation, Collider2D, Contact2DType, PhysicsSystem2D, IPhysics2DContact, director } from 'cc';
import { curLevel, LevelManager } from './LevelManager';
const { ccclass, property } = _decorator;
import { createDialogTextNode } from './DialogueUtil';

const eventTarget = new EventTarget();
@ccclass('PlayerController')
export class PlayerController extends Component {
    private rigidPlayer: RigidBody2D | null = null;
    private isMove: number = 0;
    private isJump: boolean = false;
    private moveSpeed: number = 3;
    private maxJumpCount = 1;
    private isGrounded: boolean = false;
    private jumpCount: number = 0;
    private playAnim: Animation | null = null;
    private jumpForce: number = 10;
    private jumpProgress: number = 0;
    private isBlack: boolean = false;
    private isCitie: boolean = false;
    private fireCount: number = 3;
    private forceMagnitude: number = 1; // 作用力大小
    @property({ type: Node })
    bg: Node | null = null;
    @property({ type: Number })
    private Level: Number = 0;

    @property({ type: Node })
    private backGround: Node | null = null;

    public levelCtrl: LevelManager | null = null;

    start() {
        this.levelCtrl = this.backGround.getComponent(LevelManager);
        curLevel.setValue(Number(this.Level));
        console.log(curLevel.value);
        this.init();
    }

    init() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.rigidPlayer = this.node.getComponent(RigidBody2D);
        this.playAnim = this.node.getComponent(Animation);

        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
        if (curLevel.value == 1) {
            this.node.setPosition(new Vec3(-8320, -800, 0));
            this.maxJumpCount = 1;
            this.jumpProgress = 0;
            this.isBlack = false;
        } else if (curLevel.value == 2) {
            this.node.setPosition(new Vec3(-8320, -800, 0));
            this.jumpProgress = 3;
            this.maxJumpCount = 2;
            this.isBlack = true;
            this.fireCount = 3;
        } else if (curLevel.value == 3) {
            this.node.setPosition(new Vec3(-8320, -800, 0));
            this.jumpProgress = 5;
            this.maxJumpCount = 2;
            this.isBlack = true;
            input.on(Input.EventType.KEY_DOWN, this.onCitieDown, this);
            input.on(Input.EventType.KEY_UP, this.onCitieUp, this);
        } else if (curLevel.value == 4) {
            this.node.setPosition(new Vec3(-8320, -800, 0));
            this.jumpProgress = 5;
            this.maxJumpCount = 2;
            this.isBlack = true;
            input.on(Input.EventType.KEY_DOWN, this.onCitieDown, this);
            input.on(Input.EventType.KEY_UP, this.onCitieUp, this);
        }

    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        if (otherCollider.group === PhysicsSystem2D.PhysicsGroup.GROUND) {
            const normal = contact.getWorldManifold().normal;
            if (normal.y < 0.5) {
                this.isGrounded = true;
                this.jumpCount = 0;
            }
        }
        if (otherCollider.group === PhysicsSystem2D.PhysicsGroup.BLACK) {
            if (this.isBlack) {
                selfCollider.body.enabledContactListener = false;
                let blackAnim = otherCollider.node.getComponent(Animation);
                let xkcx1 = selfCollider.node.getChildByName('xkcx1');
                let xkcx2 = selfCollider.node.getChildByName('xkcx2');
                xkcx1.active = true;
                xkcx2.active = true;
                xkcx1.getComponent(Animation).play('xkcx');
                xkcx2.getComponent(Animation).play('xkcxrw');
                blackAnim.play('black');
                setTimeout(() => {
                    otherCollider.node.active = false;
                    selfCollider.body.enabledContactListener = true;
                    xkcx1.active = false;
                    xkcx2.active = false;
                }, 501);
            }
        }
        if (otherCollider.group === PhysicsSystem2D.PhysicsGroup.SCROLL) {
            selfCollider.body.enabledContactListener = false;
            otherCollider.node.active = false;
            this.jumpProgress++;
            if (this.jumpProgress == 1) {
                this.isBlack = true;
                setTimeout(() => {
                    let nt = createDialogTextNode(new Vec3(0, 200, 0), '“《墨子·经说下》记载：‘光之人，煦若射。’此卷轴蕴含着小孔成像的智慧。”')
                    this.bg.addChild(nt);
                    setTimeout(() => {
                        nt = createDialogTextNode(new Vec3(0, 200, 0), '“小孔成像卷轴，让我明白了光的直线传播。我将用这个知识，找到正确的方向。”');
                        this.bg.addChild(nt);
                        setTimeout(() => {
                            nt = createDialogTextNode(new Vec3(0, 200, 0), '请你前进，尝试利用小孔成像原理照亮黑暗。');
                            this.bg.addChild(nt);
                        }, 5000);
                    }, 5000);
                }, 0);
            }
            if (this.jumpProgress == 2) {
                setTimeout(() => {
                    let nt = createDialogTextNode(new Vec3(0, 200, 0), '《墨子·经说下》曰：‘衡而必正，说在所得。’此卷轴蕴含着杠杆原理的智慧。')
                    this.bg.addChild(nt);
                }, 0);
            }
            if (this.jumpProgress == 3) {
                this.maxJumpCount = 2;
                setTimeout(() => {
                    let nt = createDialogTextNode(new Vec3(0, 200, 0), '“杠杆原理卷轴，让我学会了如何用小力撬动重物。我将用这个知识，解决更多的难题。”')
                    this.bg.addChild(nt);
                    setTimeout(() => {
                        nt = createDialogTextNode(new Vec3(0, 200, 0), '请你尝试在空中再次按下W，利用杠杆原理跳得更高。');
                        this.bg.addChild(nt);
                    }, 5000);
                }, 0);
            }
            if (this.jumpProgress == 4) {
                input.on(Input.EventType.KEY_DOWN, this.onCitieDown, this);
                input.on(Input.EventType.KEY_UP, this.onCitieUp, this);
                setTimeout(() => {
                    let nt = createDialogTextNode(new Vec3(0, 200, 0), '“沈括在《梦溪笔谈》中记载：‘磁针之偏，非正指南，偏东者为磁偏角。’”')
                    this.bg.addChild(nt);
                    setTimeout(() => {
                        nt = createDialogTextNode(new Vec3(0, 200, 0), '“磁偏角的基础卷轴，让我明白了磁针的指向并非绝对。我将用这个知识，找到正确的方向。”');
                        this.bg.addChild(nt);
                        setTimeout(() => {
                            nt = createDialogTextNode(new Vec3(0, 200, 0), '请你长按J，尝试用磁铁吸附到最近的磁铁。');
                            this.bg.addChild(nt);
                        }, 5000);
                    }, 5000);
                }, 0);
            }
            if (this.jumpProgress == 5) {
                this.fireCount = 0;
                setTimeout(() => {
                    let nt = createDialogTextNode(new Vec3(0, 200, 0), '“沈括观察到，当纸人与特定频率的声音共振时，会发生不可思议的现象。”')
                    this.bg.addChild(nt);
                    setTimeout(() => {
                        nt = createDialogTextNode(new Vec3(0, 200, 0), '“纸人共振的原理卷轴，让我学会了如何利用共振。我将用这个知识，解决更多的难题。”');
                        this.bg.addChild(nt);
                        setTimeout(() => {
                            nt = createDialogTextNode(new Vec3(0, 200, 0), '请你尝试利用纸人共振原理毁坏屏障。请注意，你最多只能毁坏2面屏障。');
                            this.bg.addChild(nt);
                        }, 5000);
                    }, 5000);
                }, 0);
            }
            selfCollider.body.enabledContactListener = true;
        }
        if (otherCollider.group === PhysicsSystem2D.PhysicsGroup.DOOR) {
            if (this.jumpProgress == 3) {
                selfCollider.body.enabledContactListener = false;
                curLevel.setValue(curLevel.value + 1);
                this.levelCtrl.toNewLevel();
                selfCollider.body.enabledContactListener = true;
            }
            else if (this.jumpProgress == 5) {
                selfCollider.body.enabledContactListener = false;
                curLevel.setValue(curLevel.value + 1);
                this.levelCtrl.toNewLevel();
                selfCollider.body.enabledContactListener = true;
            }
        }
        if (otherCollider.group === PhysicsSystem2D.PhysicsGroup.FIRE) {
            if (this.fireCount <= 1) {
                selfCollider.body.enabledContactListener = false;
                otherCollider.node.getComponent(Animation).play('pzxs');
                otherCollider.sensor = true;
                otherCollider.group = PhysicsSystem2D.PhysicsGroup.NOFIRE;
                this.fireCount++;
                selfCollider.body.enabledContactListener = true;
            }
        }
    }
    onCitieDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_J:
                this.isCitie = true;
                break;
        }
    }
    onCitieUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_J:
                this.isCitie = false;
                break;
        }
    }
    onEndContact() {
        this.isGrounded = false;
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.node.setScale(-1, 1);
                this.isMove = -1;
                this.playAnim.play('playerRun');
                break;
            case KeyCode.KEY_D:
                this.node.setScale(1, 1);
                this.isMove = 1;
                this.playAnim.play('playerRun');
                break;
            case KeyCode.KEY_W:
                this.isJump = true;
                break;
            case KeyCode.KEY_P:
                director.loadScene('TheEnd');
                break;
        }
    }
    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.isMove = 0;
                this.playAnim.stop();
                break;
            case KeyCode.KEY_D:
                this.isMove = 0;
                this.playAnim.stop();
                break;
            case KeyCode.KEY_W:
                this.isJump = false;
                break;
        }
    }

    update(deltaTime: number) {
        if (this.rigidPlayer) {
            const curVelocity = this.rigidPlayer.linearVelocity;
            const newVelocity = new Vec2(this.isMove * this.moveSpeed, curVelocity.y);
            this.rigidPlayer.linearVelocity = newVelocity;
        }
        if (this.isJump && (this.isGrounded || this.jumpCount < this.maxJumpCount)) {
            this.isJump = false;
            const velocity = this.rigidPlayer.linearVelocity;
            velocity.y = 0;
            this.rigidPlayer.linearVelocity = velocity;
            if (this.jumpCount == 1) {
                let ggyl = this.node.getChildByName('ggyl');
                ggyl.active = true;
                ggyl.getComponent(Animation).play('ggyl');
                setTimeout(() => {
                    ggyl.active = false;
                }, 501);
            }
            this.rigidPlayer.applyLinearImpulse(new Vec2(0, this.jumpForce), Vec2.ZERO, true);
            this.jumpCount++;
            this.isGrounded = false;
        }
        if (this.node.getPosition().x < -8630 || this.node.getPosition().y < -4710 || this.node.getPosition().x > 7400) {
            this.node.setPosition(new Vec3(-8320, -800, 0));
        }
        if (this.isCitie) {
            this.isGrounded = false;
            this.jumpCount = 0;
            const manualBlocks = [
                { x: 308, y: 445 },
                { x: 757, y: 536 },
                { x: 1085, y: 337 },
                { x: 835, y: 158 },
                { x: 1250, y: 536 }
            ];
            let tax = -332;
            let tay = 85;
            let curx = this.node.worldPosition.x;
            let cury = this.node.worldPosition.y;
            let md = 1000000000;
            for (const blockInfo of manualBlocks) {
                let d = Math.sqrt((curx - blockInfo.x) * (curx - blockInfo.x) + (cury - blockInfo.y) * (cury - blockInfo.y));
                if (d < md) {
                    md = d;
                    tax = blockInfo.x;
                    tay = blockInfo.y;

                }
            }
            const targetPos = new Vec2(tax, tay);
            const currentPos = new Vec2(curx, cury);
            const direction = new Vec2();
            //       console.log(currentPos);
            //        console.log(targetPos);
            Vec2.subtract(direction, targetPos, currentPos);
            const force = direction.multiplyScalar(this.forceMagnitude)
            this.rigidPlayer.applyForceToCenter(force, true);
            this.node.getChildByName('citie').active = true;
        } else {
            this.node.getChildByName('citie').active = false;
        }
    }
}


