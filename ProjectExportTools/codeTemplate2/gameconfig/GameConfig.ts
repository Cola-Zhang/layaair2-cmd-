/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
{!importStr!}
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number={!designWidth!};
    static height:number={!designHeight!};
    static scaleMode:string="{!scaleMode!}";
    static screenMode:string="{!screenMode!}";
    static alignV:string="{!alignV!}";
    static alignH:string="{!alignH!}";
    static startScene:any="{!startScene!}";
    static sceneRoot:string="{!sceneRoot!}";
    static debug:boolean={!debug!};
    static stat:boolean={!stat!};
    static physicsDebug:boolean={!physicsDebug!};
    static exportSceneToJson:boolean={!exportSceneToJson!};
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
{!regStr!}
    }
}
GameConfig.init();