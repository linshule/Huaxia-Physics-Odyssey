import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

enum LevelState {
    Level_INIT,
    Level_PLAYING,
    Level_END,
}

export let curLevel: number = 0;

@ccclass('LevelManager')
export class LevelManager extends Component {
    start() {
        this.setCurLevelNumber(1);
    }

    setCurLevelNumber(value: number) {
        curLevel = value;
    }

    setCurLevelState(event: Event, value: string) {
        let cur: LevelState;
        if (value == 'INIT') cur = LevelState.Level_INIT;
        if (value == 'PLAYING') cur = LevelState.Level_PLAYING;
        if (value == 'END') cur = LevelState.Level_END;
        if (value == 'Setting') director.loadScene('Setting');
        if (value == 'Start') director.loadScene('Start');
        switch (cur) {
            case LevelState.Level_INIT:
                this.toNewLevel();
                break;
            case LevelState.Level_PLAYING:
                break;
            case LevelState.Level_END:
                break;
        }
    }

    toNewLevel() {
        let nowLevel: string = 'Level' + curLevel.toString();
        console.log(nowLevel);
        director.loadScene(nowLevel);
    }

    update(deltaTime: number) {

    }
}


