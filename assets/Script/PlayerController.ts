import { _decorator, Component, Node, EventTarget, Input, input, EventKeyboard, KeyCode, RigidBody, Vec3, RigidBody2D, Vec2, Animation, Collider2D, Contact2DType, PhysicsSystem2D, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

const eventTarget = new EventTarget();
@ccclass('PlayerController')
export class PlayerController extends Component {
    private rigidPlayer: RigidBody2D | null = null;
    private isMove: number = 0;
    private isJump: boolean = false;
    private moveSpeed: number = 2;
    private maxJumpCount = 2;
    private isGrounded: boolean = false;
    private jumpCount: number = 0;
    private playAnim: Animation | null = null;
    private jumpForce: number = 10;

    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        // input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        this.rigidPlayer = this.node.getComponent(RigidBody2D);
        this.playAnim = this.node.getComponent(Animation);

        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        this.node.setPosition(new Vec3(-6800, -1000, 0));
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact) {
        if (otherCollider.group === PhysicsSystem2D.PhysicsGroup.DEFAULT) {
            const normal = contact.getWorldManifold().normal;
            if (normal.y < 0.5) {
                this.isGrounded = true;
                this.jumpCount = 0;
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
    onKeyPressing(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.playAnim.play('playerRun');
                this.node.setScale(-1, 1);
                this.isMove = -1;
                break;
            case KeyCode.KEY_D:
                this.playAnim.play('playerRun');
                this.node.setScale(1, 1);
                this.isMove = 1;
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

            this.rigidPlayer.applyLinearImpulse(new Vec2(0, this.jumpForce), Vec2.ZERO, true);
            this.jumpCount++;
            this.isGrounded = false;
        }
        if (this.node.getPosition().x < -7000 || this.node.getPosition().y < -4100 || this.node.getPosition().x > 5800) {
            this.node.setPosition(new Vec3(-6800, -1000, 0));
        }
    }
}


