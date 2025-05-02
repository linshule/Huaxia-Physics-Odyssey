import { _decorator, CCInteger, Component, instantiate, Node, Prefab, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FourLevelManager')
export class FourLevelManager extends Component {
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
    @property(Node)
    public playerBase: Node | null = null;

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
    }
    generateMap1() {
        const manualBlocks = [
            { x: 280, y: 60, prefab: this.boxPrefab1 },
            { x: 463, y: 51, prefab: this.boxPrefab1 },
            { x: 221, y: -287, prefab: this.boxPrefab1 },
            { x: 5, y: -286, prefab: this.boxPrefab1 }
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
            { x: -408, y: 54, prefab: this.boxPrefab2 },
            { x: -218, y: -275, prefab: this.boxPrefab2 },
            { x: 332, y: -171, prefab: this.boxPrefab2 },
            { x: 550, y: -171, prefab: this.boxPrefab2 }
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
            { x: -169, y: -56, prefab: this.boxPrefab3 },
            { x: -5, y: 60, prefab: this.boxPrefab3 },
            { x: 282, y: -52, prefab: this.boxPrefab3 },
            { x: 2, y: -174, prefab: this.boxPrefab3 }
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
            { x: -503, y: -177, prefab: this.boxPrefab4 }
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


