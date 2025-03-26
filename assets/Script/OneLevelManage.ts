import { _decorator, CCInteger, Component, instantiate, Node, Prefab} from 'cc';
const { ccclass, property } = _decorator;
enum BlockType{
    BT_NONE,
    BT_STONE,
};
@ccclass('Level1Manage')
export class Level1Manage extends Component {
    @property({type:Prefab})
    public boxPrefab1:Prefab|null=null;
    @property({type:Prefab})
    public boxPrefab2:Prefab|null=null;
    @property({type:Prefab})
    public boxPrefab3:Prefab|null=null;
    start() {
        this.generateMap1();
        this.generateMap2();
        this.generateMap3();
        this.generateMap4();
        this.generateMap5();
        this. generateMap6();
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
            { x: 200, y:-188, prefab: this.boxPrefab2 },
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
            { x: 30, y:-100, prefab: this.boxPrefab2 },
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
            { x: 555, y:250, prefab: this.boxPrefab2 },
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
    update(deltaTime: number) {
        
    }

}