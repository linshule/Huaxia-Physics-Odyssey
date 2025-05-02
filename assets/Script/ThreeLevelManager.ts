import { _decorator, CCInteger, Component, instantiate, Node, Prefab, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TwoLevelManager')
export class TwoLevelManager extends Component {
    @property({ type: Prefab })
    public boxPrefab1: Prefab | null = null;
    @property({ type: Prefab })
    public door: Prefab | null = null;

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
    }
    generateMap1() {
        const manualBlocks = [
            { x: -600, y: -285, prefab: this.boxPrefab1 },
            { x: -377, y: -285, prefab: this.boxPrefab1 },
            { x: -188, y: -285, prefab: this.boxPrefab1 },
            { x: -17, y: -285, prefab: this.boxPrefab1 },
            { x: 158, y: -285, prefab: this.boxPrefab1 },
            { x: 350, y: -285, prefab: this.boxPrefab1 },
            { x: 521, y: -285, prefab: this.boxPrefab1 },
            { x: 602, y: -40, prefab: this.door },
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


