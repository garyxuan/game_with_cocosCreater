cc.Class({
    extends: cc.Component,
    properties: {
        knife: {
            default: null,
            type: cc.Node
        }
    },
    onLoad() {
        const manager = cc.director.getCollisionManager();
        manager.enabled = true;
        const physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.debugDrawFlags = 1;
        this.knifeMotionS = this.knife.getComponent(cc.MotionStreak);
    },
    start() {
        this.knifeMove();
    },
    knifeMove() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.startEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveEvent, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.endEvent, this);
    },
    offKnifeMove() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.startEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.moveEvent, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.endEvent, this);
    },
    startEvent(e) {
        let pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
        this.knife.setPosition(pos);
        this.knife.group = 'knife';
        this.knifeMotionS.reset();
    },
    moveEvent(e) {
        let pos = this.node.convertToNodeSpaceAR(new cc.Vec2(e.getLocation()));
        this.knife.setPosition(pos);
    },
    endEvent(e) {
        this.knife.group = 'default';
    },
    backStart() {
        console.log(111)
    }
});