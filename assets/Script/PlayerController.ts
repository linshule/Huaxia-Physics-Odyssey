import { _decorator, Component, Node, EventTarget, Input, input, EventKeyboard, KeyCode, RigidBody, Vec3, RigidBody2D, Vec2, Animation, Collider2D, Contact2DType, PhysicsSystem2D, IPhysics2DContact } from 'cc';
import { curLevel, LevelManager } from './LevelManager';
const { ccclass, property } = _decorator;

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

    @property({ type: Node })
    private backGround: Node | null = null;

    public levelCtrl: LevelManager | null = null;

    start() {
        this.levelCtrl = this.backGround.getComponent(LevelManager);
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

        this.node.setPosition(new Vec3(-8320, -800, 0));
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
            }
            if (this.jumpProgress == 3) {
                this.maxJumpCount = 2;
            }
            selfCollider.body.enabledContactListener = true;
        }
        if (otherCollider.group === PhysicsSystem2D.PhysicsGroup.DOOR) {
            if (this.jumpProgress == 3) {
                curLevel.setValue(curLevel.value + 1);
                this.levelCtrl.toNewLevel();
            }
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
    }
}


