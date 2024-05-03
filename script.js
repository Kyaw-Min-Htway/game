const { init } = require("express/lib/application");

let slot_screen = document.getElementById("slot-screen");
let reel = document.getElementsByClassName("reel");
let reels = document.getElementsByClassName("reels");
let stop_btn = document.getElementsByClassName("stop-btn");
let start_btn = document.getElementById("start-btn");

let sec = 100;
let stopReelFlag = [];
let reelCounts = [];
let slotFrameheight;
let slotReelsHeight;
let slotReelitemHeight;
let slotReelStartheight;

//initialization

let slot = {
    init:function({
        stopReelFlag[0] = stopReelFlag[1] = stopReelFlag[1] = false;
        reelCounts[0] = reelCounts={}
    })
}