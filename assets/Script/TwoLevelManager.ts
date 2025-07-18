import { _decorator, CCInteger, Component, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { createDialogTextNode } from './DialogueUtil';
@ccclass('TwoLevelManager')
export class TwoLevelManager extends Component {
    @property({ type: Prefab })
    public boxPrefab1: Prefab | null = null;
    @property({ type: Prefab })
    public boxPrefab2: Prefab | null = null;
    @property({ type: Prefab })
    public boxPrefab3: Prefab | null = null;
    @property({ type: Prefab })
    public boxPrefab4: Prefab | null = null;
    @property({ type: Prefab })
    public boxPrefab5: Prefab | null = null;
    @property({ type: Prefab })
    public doorstar: Prefab | null = null;
    @property(Prefab)
    public doorend: Prefab | null = null;
    @property(Prefab)
    public tool: Prefab | null = null;
    @property(Prefab)
    public fire: Prefab | null = null;
    @property(Prefab)
    public citie: Prefab | null = null;
    @property(Prefab)
    public jian: Prefab | null = null;
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
        setTimeout(() => {
            let nt = createDialogTextNode(new Vec3(0, 200, 0), '玩家控制的角色进入一个充满磁力干扰和共振现象的古代实验室，这里的机关和谜题需要运用“磁偏角”和“纸人共振”的知识来解决。')
            this.bg.addChild(nt);
            setTimeout(() => {
                nt = createDialogTextNode(new Vec3(0, 200, 0), '“沈括，这位古代的智者，发现了磁针并不完全指向南方的秘密，以及声音如何使物体振动。只有掌握这些智慧的勇者，才能揭开这些秘密。”');
                this.bg.addChild(nt);
                setTimeout(() => {
                    nt = createDialogTextNode(new Vec3(0, 200, 0), '“我必须学会如何运用这些古老的物理知识，才能继续我的旅程。”');
                    this.bg.addChild(nt);
                    setTimeout(() => {
                        nt = createDialogTextNode(new Vec3(0, 200, 0), '本关开始跳跃能力可能会失效。');
                        this.bg.addChild(nt);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 0);
    }
    generateMap1() {
        const manualBlocks = [
            { x: -535, y: 144, prefab: this.boxPrefab1 },
            { x: -332, y: 144, prefab: this.boxPrefab1 },
            { x: 212, y: -138, prefab: this.boxPrefab1 },
            { x: 68, y: -242, prefab: this.boxPrefab1 },
            { x: -82, y: 229, prefab: this.boxPrefab1 }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
            }
        }
    } generateMap2() {
        const manualBlocks = [
            { x: 160, y: 230, prefab: this.boxPrefab2 },
            { x: 585, y: 229, prefab: this.boxPrefab2 },
            { x: 424, y: 36, prefab: this.boxPrefab2 },
            { x: 596, y: -258, prefab: this.boxPrefab2 }
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
            { x: -108, y: 45, prefab: this.boxPrefab3 },
            { x: -545, y: -63, prefab: this.boxPrefab3 },
            { x: -409, y: -252, prefab: this.boxPrefab3 }
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
            { x: -204, y: -143, prefab: this.boxPrefab4 }
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
            { x: 629, y: -194, prefab: this.doorend }
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
            { x: -164, y: -65, prefab: this.fire },
            { x: -101, y: 113, prefab: this.fire },
            { x: 482, y: 113, prefab: this.fire }
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
            { x: -332, y: 85, prefab: this.jian },
            { x: 117, y: 176, prefab: this.jian },
            { x: 610, y: 176, prefab: this.jian },
            { x: 445, y: -23, prefab: this.jian },
            { x: 195, y: -202, prefab: this.jian }
        ];

        for (const blockInfo of manualBlocks) {
            if (blockInfo.prefab) {
                const block = instantiate(blockInfo.prefab);
                block.setPosition(blockInfo.x, blockInfo.y, 0);
                block.parent = this.node;
                //      console.log(block.worldPosition);
            }
        }
    }
    generateMap8() {
        const manualBlocks = [
            { x: -432, y: -10, prefab: this.citie },
            { x: -22, y: 84, prefab: this.tool }

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


