import { _decorator, CCInteger, Component, instantiate, Node, Prefab, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { createDialogTextNode } from './DialogueUtil';
@ccclass('TwoLevelManager')
export class TwoLevelManager extends Component {
    @property({ type: Prefab })
    public boxPrefab1: Prefab | null = null;
    @property({ type: Prefab })
    public door: Prefab | null = null;
    @property({ type: Node })
    bg: Node | null = null;
    @property(Node)
    public playerBase: Node | null = null;

    public _road;
    public roadHeight = 10;
    public roadLength = 10;
    public BLOCK_SIZE = 2000;
    start() {
        this.init();
        setTimeout(() => {
            let nt = createDialogTextNode(new Vec3(0, 200, 0), '“盖十二律黄钟为始，应钟为终，终而复始，循环无端……是故各律皆以黄钟正数为法。”')
            this.bg.addChild(nt);
            setTimeout(() => {
                nt = createDialogTextNode(new Vec3(0, 200, 0), '请你触碰音块观察十二平均律的规律。');
                this.bg.addChild(nt);
            }, 5000);
        }, 0);

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


