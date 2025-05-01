import { _decorator, Component, director, Node, EventTarget } from 'cc';
const { ccclass, property } = _decorator;
const eventTarget = new EventTarget();

enum LevelState {
    Level_INIT,
    Level_PLAYING,
    Level_END,
}


export let curLevel = {
    value: 0,
    setValue(newValue: number) {
        this.value = newValue;
    }
};

@ccclass('LevelManager')
export class LevelManager extends Component {
    start() {
        this.setCurLevelNumber(1);
    }

    setCurLevelNumber(value: number) {
        curLevel.value = value;
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
        let nowLevel: string = 'Level' + curLevel.value.toString();
        console.log(nowLevel);
        eventTarget.emit('changeLevel', curLevel.value);
        director.loadScene(nowLevel);
    }

    update(deltaTime: number) {

    }
}


