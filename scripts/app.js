// Copyright (c) 2010-2012 Turbulenz Limited

/*global TurbulenzEngine: false*/
/*exported appCreate*/

var appDestroyCallback;
function appCreate()
{
    console.log("app create");
    printVersion();

    var intervalID;

    var gd = TurbulenzEngine.createGraphicsDevice({});
    var md = TurbulenzEngine.createMathDevice({});
    var pd = Physics2DDevice.create();

    var draw2d = Draw2D.create({
        graphicsDevice: gd
    });
    var debugDraw = Physics2DDebugDraw.create({
        graphicsDevice: gd
    });
    var timer = makeTimer();

    var world = createWorld(pd);
    var brickmap = new BrickMap({width: 100, height: 100});
    brickmap.setLine(0, 10, new Brick());

    brickmap.setLine(2, 10, new Brick());
    var stage = makeStage(draw2d, debugDraw);
    var physicsMaterials = createPhysicsMaterials(pd);
    var shapes = createShapes(pd, physicsMaterials);
    var border = createWorldBorder(pd, stage);
    world.addRigidBody(border);

    var mainLoop = function mainLoopFn()
    {
        if (!gd.beginFrame()) { return; }

    	clearFrame(gd);
        timer.tick();
        while(world.simulatedTime < timer.realTime) {
            world.step(1.0/60.0);
        }

        debugPhysics(debugDraw, draw2d, world);
    };

    intervalID = TurbulenzEngine.setInterval(mainLoop, 1000 / 60);
    TurbulenzEngine.onunload = (appDestroyCallback = destroyApp(intervalID));
}

function createWorldBorder(pd, stage) {
    var sw = stage[0],
        sh = stage[1];
    
    var tickness = 0.01;
    var border = pd.createRigidBody({
        type: 'static',
        shapes: [
            pd.createPolygonShape({
                vertices: pd.createRectangleVertices(0, 0, tickness, sh)}),
            pd.createPolygonShape({
                vertices: pd.createRectangleVertices(0, 0, sw, tickness)}),
            pd.createPolygonShape({
                vertices: pd.createRectangleVertices((sw - tickness), 0, sw, sh)}),
            pd.createPolygonShape({
                vertices: pd.createRectangleVertices(0, (sh - tickness), sw, sh)})
        ]
    });
    return border;
};

function createPhysicsMaterials(pd) {
    return {
        brick: pd.createMaterial({
            density: 3
        })
    }
}

function createShapes(pd, materials) {
    return {
        brick: pd.createPolygonShape({
            vertices: pd.createBoxVertices(0.5, 0.5),
            material: materials.brick
        })
    }
}

function makeTimer() {
    function Timer() {
        if (!(this instanceof Timer)) {
            return new Timer();
        }
        this.curTime = 0.0;
        this.prevTime = 0.0;
        this.maxDelta = 1.0 / 20.0;
        this.delta = 0.0;
        this.realTime = 0.0;
    }

    Timer.prototype.tick = function() {
        this.curTime = TurbulenzEngine.time;
        this.delta = this.curTime - this.prevTime;
        if (this.delta > this.maxDelta) {
            this.delta = this.maxDelta;
        }
        this.prevTime = this.curTime;
        this.realTime += this.delta;
    };

    return Timer();
}

function debugPhysics(debugDraw, draw2d, world) {
    debugDraw.setScreenViewport(draw2d.getScreenSpaceViewport());
    debugDraw.showRigidBodies = true;
    debugDraw.showContacts = true;

    debugDraw.begin();
    debugDraw.drawWorld(world);
    debugDraw.end();
}

function makeStage(draw2d, debugdraw) {
    var stageSize = [30, 22];
    draw2d.configure({
        viewportRectangle: [0, 0, stageSize[0], stageSize[1]],
        scaleMode: 'scale'
    });
    debugdraw.setPhysics2DViewport([0.0, 0.0, stageSize[0], stageSize[1]]);
    return stageSize;
};

function createWorld(pd) {
    var world = pd.createWorld({
        gravity: [0.0, 10.0]
    });
    return world;
}

function clearFrame(gd) {
	if (gd.beginFrame()) {
		gd.clear([0.5, 0.5, 1.0, 1.0], 1.0, 0.0);
		gd.endFrame();
	}
}

function printVersion() {
    var versionElem = document.getElementById("engine_version");
    if (versionElem)
    {
        versionElem.innerHTML = TurbulenzEngine.version;
    }
}

function destroyApp(intervalID) {
    return function() {
        TurbulenzEngine.clearInterval(intervalID);

	console.log("app destroy");

        TurbulenzEngine.flush();
    }
}
