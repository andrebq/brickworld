/*{# Copyright (c) 2014 André Moraes - Full Notice at NOTICE.txt #}*/

/*{{ javascript('jslib/aabbtree.js') }}*/
/*{{ javascript('jslib/assettracker.js') }}*/
/*{{ javascript('jslib/camera.js') }}*/
/*{{ javascript('jslib/draw2d.js') }}*/
/*{{ javascript('jslib/effectmanager.js') }}*/
/*{{ javascript('jslib/fontmanager.js') }}*/
/*{{ javascript('jslib/forwardrendering.js') }}*/
/*{{ javascript('jslib/geometry.js') }}*/
/*{{ javascript('jslib/indexbuffermanager.js') }}*/
/*{{ javascript('jslib/light.js') }}*/
/*{{ javascript('jslib/loadingscreen.js') }}*/
/*{{ javascript('jslib/material.js') }}*/
/*{{ javascript('jslib/observer.js') }}*/
/*{{ javascript('jslib/renderingcommon.js') }}*/
/*{{ javascript('jslib/requesthandler.js') }}*/
/*{{ javascript('jslib/resourceloader.js') }}*/
/*{{ javascript('jslib/scene.js') }}*/
/*{{ javascript('jslib/scenenode.js') }}*/
/*{{ javascript('jslib/shadermanager.js') }}*/
/*{{ javascript('jslib/shadowmapping.js') }}*/
/*{{ javascript('jslib/soundmanager.js') }}*/
/*{{ javascript('jslib/texturemanager.js') }}*/
/*{{ javascript('jslib/utilities.js') }}*/
/*{{ javascript('jslib/vertexbuffermanager.js') }}*/
/*{{ javascript('jslib/vmath.js') }}*/

/*{{ javascript('jslib/services/gamesession.js') }}*/
/*{{ javascript('jslib/services/mappingtable.js') }}*/
/*{{ javascript('jslib/services/turbulenzbridge.js') }}*/
/*{{ javascript('jslib/services/turbulenzservices.js') }}*/

/*{{ javascript("jslib/physics2ddevice.js") }}*/
/*{{ javascript("jslib/physics2ddebugdraw.js") }}*/
/*{{ javascript("jslib/boxtree.js") }}*/

/*{{ javascript('protolib/debugdraw.js') }}*/
/*{{ javascript('protolib/duimanager.js') }}*/
/*{{ javascript('protolib/jqueryextend.js') }}*/
/*{{ javascript('protolib/protolib.js') }}*/
/*{{ javascript('protolib/sceneloader.js') }}*/
/*{{ javascript('protolib/simplefonts.js') }}*/
/*{{ javascript('protolib/simplesceneloader.js') }}*/
/*{{ javascript('protolib/simplesprite.js') }}*/
/*{{ javascript('protolib/soundsourcemanager.js') }}*/

/*{# Game code javascript includes #}*/
/*{{ javascript("scripts/app.js") }}*/
/*{{ javascript("scripts/brickmap.js") }}*/

/*global TurbulenzEngine: false*/
/*global appCreate: false */

TurbulenzEngine.onload = function onloadFn()
{
    appCreate();
};
