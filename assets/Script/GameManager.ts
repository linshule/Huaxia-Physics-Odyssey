import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

enum GameState {
    GS_INIT,
    GS_PLAYING,
    GS_END,
}


@ccclass('GameManager')
export class GameManager extends Component {
    start() {
        this.setCurGameState(GameState.GS_INIT);
    }

    setCurGameState(value: GameState) {
        switch (value) {
            case GameState.GS_INIT:
                this.gameStart();
                break;
            case GameState.GS_PLAYING:
                break;
            case GameState.GS_END:
                break;
        }
    }

    gameStart() {
        director.loadScene('Start');
    }

    update(deltaTime: number) {

    }
}


