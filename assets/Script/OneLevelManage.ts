import { _decorator, CCInteger, Component, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { createDialogTextNode } from './DialogueUtil';
enum BlockType {
    BT_NONE,
    BT_STONE,
};
@ccclass('Level1Manage')
export class Level1Manage extends Component {
    @property({ type: Prefab })
    public boxPrefab1: Prefab | null = null;
    @property({ type: Prefab })
    public boxPrefab2: Prefab | null = null;
    @property({ type: Prefab })
    public boxPrefab3: Prefab | null = null;
    @property({ type: Prefab })
    public doorstar: Prefab | null = null;
    @property(Prefab)
    public doorend: Prefab | null = null;
    @property(Prefab)
    public tool: Prefab | null = null;
    @property(Prefab)
    public black: Prefab | null = null;
    @property(Node)
    public playerBase: Node | null = null;
    @property({ type: Node })
    bg: Node | null = null;

    public _road;
    public roadHeight = 10;
    public roadLength = 10;
    public BLOCK_SIZE = 2000;
    start() {
        this.init();
    }
    init() {
        this.node.removeAllChildren();
        this.generateMap1();
        this.generateMap2();
        this.generateMap3();
        this.generateMap4();
        this.generateMap5();
        this.generateMap6();
        this.generateMap7();
        this.generateMap8();
        this.generateBlack();
    }
    generateBlack() {
        this._road = [];
        for (let i = 1; i <= this.roadHeight; i++) {
            let _roadCur: boolean[] = [];
            for (let j = 1; j <= this.roadLength; j++) {
                _roadCur[j] = true;
            }
            this._road[i] = _roadCur;
        }
        this._road[1][2] = false;
        this._road[1][3] = false;
        for (let i = 1; i <= this.roadHeight; i++) {
            for (let j = 1; j <= this.roadLength; j++) {
                let block: Node | null = instantiate(this.black);
                if (!this._road[i][j]) block = null;
                if (block) {
                    block.setPosition(i * this.BLOCK_SIZE - 9700, j * this.BLOCK_SIZE - 6150, 0);
                    this.playerBase.addChild(block);
                }
            }
        }
        setTimeout(() => {
            let nt = createDialogTextNode(new Vec3(0, 200, 0), '玩家控制的角色站在一个古老的洞穴入口，洞穴内布满了各种平台和障碍物，有些平台上方悬浮着一个卷轴。')
            this.bg.addChild(nt);
            setTimeout(() => {
                nt = createDialogTextNode(new Vec3(0, 200, 0), '“在这片神秘的土地上，隐藏着无数的古籍卷轴。每个卷轴都记载着一段古老的智慧，只有最勇敢和智慧的探险者才能获得它们。”');
                this.bg.addChild(nt);
                setTimeout(() => {
                    nt = createDialogTextNode(new Vec3(0, 200, 0), '“我必须依靠我的技巧和智慧，收集所有的卷轴，揭开古籍的秘密。”');
                    this.bg.addChild(nt);
                    setTimeout(() => {
                        nt = createDialogTextNode(new Vec3(0, 200, 0), '“尝试使用WASD键的不同组合，找到正确的跳跃方式，抓住第一个卷轴。”');
                        this.bg.addChild(nt);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 0);
    }
    generateMap1() {
        const manualBlocks = [
            { x: -345, y: -188, prefab: this.boxPrefab1 },
            { x: -145, y: -188, prefab: this.boxPrefab2 },
            { x: -510, y: -105, prefab: this.boxPrefab3 }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    generateMap2() {
        const manualBlocks = [
            { x: -245, y: -270, prefab: this.boxPrefab1 },
            { x: -260, y: -10, prefab: this.boxPrefab3 },
            { x: -260, y: 74, prefab: this.boxPrefab1 }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    generateMap3() {
        const manualBlocks = [
            { x: -94, y: 150, prefab: this.boxPrefab3 },
            { x: 112, y: 68, prefab: this.boxPrefab2 },
            { x: 598, y: -200, prefab: this.boxPrefab1 }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    generateMap4() {
        const manualBlocks = [
            { x: 240, y: -24, prefab: this.boxPrefab3 },
            { x: 200, y: -188, prefab: this.boxPrefab2 },
            { x: 75, y: 235, prefab: this.boxPrefab1 }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    generateMap5() {
        const manualBlocks = [
            { x: 500, y: -110, prefab: this.boxPrefab2 },
            { x: 40, y: -110, prefab: this.boxPrefab2 },
            { x: 320, y: -110, prefab: this.boxPrefab1 }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    generateMap6() {
        const manualBlocks = [
            { x: 370, y: 155, prefab: this.boxPrefab2 },
            { x: 555, y: 250, prefab: this.boxPrefab2 },
            { x: 430, y: -260, prefab: this.boxPrefab2 }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    generateMap7() {
        const manualBlocks = [
            //   { x: -650, y: -45, prefab: this.doorstar },
            { x: 620, y: -140, prefab: this.doorend }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    generateMap8() {
        const manualBlocks = [
            { x: -490, y: -58, prefab: this.tool },
            { x: -330, y: 50, prefab: this.tool },
            { x: 405, y: 210, prefab: this.tool }

        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    }
    update(deltaTime: number) {

    }

}