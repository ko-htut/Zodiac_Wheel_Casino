// TODO: wrap this in a self executing function to avoid overriding
// some other global function Config
function Config()
{
    this.reelWidth = 172 ;
    this.reelHeight = 516;
    this.reelSpacing = 17;

    this.numImages = 11;
    this.numReels = 5;
    this.numReelCards = 3;
    this.wildIndex = 8;
    this.linesCount = [1, 2, 3, 4, 5];
    this.fixedLinesCount = true;

    this.coinAnimationCoef = 25;

    this.linesSelectActiveColor = 0xf3c138;
    this.linesSelectInactiveColor = 0xffffff;
    this.linesSelectActiveGlowColor = 0x3169f2;
    this.linesSelectInactiveGlowColor = 0x3b3530;
    this.gameNumberTimeHelpColor = 0xb3914b;
    this.labelsColor = 0xe4bc6a;
    this.bonusPopUpStrokeColor = 0xe4bc6a;
    this.paytableExitColor = 0x0e1d40;

    this.toolTipMainTextColor = 0xFFFFFF;
    this.toolTipUsernameTextColor = 0xe4bc6a;
    this.toolTipWinAmountTextColor = 0xFFFFFF;
    this.toolTipCurrencyTextColor = 0xe4bc6a;
    this.toolTipDateTextColor = 0xbfbfbf;
    this.toolTipNumberOfWinnersTextColor = 0xe4bc6a;

    this.toolTipDateSeparator = "/";

    this.paytablePageCount = 4;
    this.paytableGamblePage = 1;

    this.scatterConfig  = [
        {index: 9, minCount: 3, validReels: [ true, false, true, false, true ],
            stopSounds:["stopScatterMap1", null, "stopScatterMap3", null, "stopScatterMap5"]},
        {index: 10, minCount: 3, validReels: [ true, true, true, true, true ],
            stopSounds:["stopScatterBook1", "stopScatterBook2", "stopScatterBook3", "stopScatterBook4", "stopScatterBook5"]}
    ];

    this.reelVideos = [
        {src:["images/videos/00-0.json", "images/videos/00-1.json"],                                                        fps: 10},
        {src:["images/videos/01-0.json", "images/videos/01-1.json"],                                                        fps: 10},
        {src:["images/videos/02-0.json", "images/videos/02-1.json"],                                                        fps: 10},
        {src:["images/videos/03-0.json", "images/videos/03-1.json"],                                                        fps: 10},
        {src:["images/videos/04-0.json", "images/videos/04-1.json"],                                                        fps: 10},
        {src:["images/videos/05-0.json"],                                                                                   fps: 10},
        {src:["images/videos/06-0.json", "images/videos/06-1.json", "images/videos/06-2.json"],                             fps: 10},
        {src:["images/videos/07-0.json", "images/videos/07-1.json", "images/videos/07-2.json"],                             fps: 10},
        {src:["images/videos/08-0.json", "images/videos/08-1.json"],                                                        fps: 10},
        {src:["images/videos/09-0.json", "images/videos/09-1.json"],                                                        fps: 10},
        {src:["images/videos/10-0.json", "images/videos/10-1.json"],                                                        fps: 10}
    ];

    this.expandVideo = {src:["images/videos/expand-0.json"], fps: 10, scale: 1};

    this.reelImages = ["reelImages-1.json", "reelImages-2.json"];

    this.linesCoords = [
        {coords:[184,320, 1095,320], color:0xfff221},
        {coords:[184,150, 1095,150], color:0xf9af0c},
        {coords:[184,497, 1095,497], color:0x17e614},
        {coords:[184,149, 259,149, 640,566, 1018,149, 1095,149], color:0xdf3d3d},
        {coords:[184,515, 259,515, 640,93, 1018,515, 1095,515], color:0xc90404}
    ];

    this.fullLineSounds = [
        {card:0, name:"fullLine1"},
        {card:1, name:"fullLine1"},
        {card:2, name:"fullLine1"},
        {card:3, name:"fullLine1"},
        {card:4, name:"fullLine2"},
        {card:5, name:"fullLine3"},
        {card:6, name:"fullLine3"},
        {card:7, name:"fullLine4"},
        {card:8, name:"fullLine4"}
    ];

    this.gameSounds = [
        {
            src: "shortSounds.mp3",
            sounds:[
                {name: "stopWildSound", 			start:21, 	duration: 1.26},
                {name: "stopScatterBook1", 			start:0, 	duration: 1.37},
                {name: "stopScatterBook2", 			start:3, 	duration: 1.5},
                {name: "stopScatterBook3", 			start:6, 	duration: 1.4},
                {name: "stopScatterBook4", 			start:8, 	duration: 1.5},
                {name: "stopScatterBook5", 			start:11, 	duration: 1.42},
                {name: "stopScatterMap1", 			start:14, 	duration: 1},
                {name: "stopScatterMap3", 			start:16, 	duration: 1.13},
                {name: "stopScatterMap5", 			start:18, 	duration: 1.01}
            ]
        },
        {
            src: "winSounds.mp3", sounds:[
            {name: "win4", 				    start:0, 	duration: 3.217},
            {name: "win5",				    start:4, 	duration: 3.3},
            {name: "win6",	 			    start:8, 	duration: 5.365},
            {name: "win7", 				    start:14, 	duration: 5.19},
            {name: "win8", 				    start:20, 	duration: 3.92},
            {name: "win9", 			        start:30, 	duration: 4.775},
            {name: "win10", 			    start:25, 	duration: 4.57},
            {name: "creditAnimationSound", 	start:36, 	duration: 10.0},
            {name: "expandSound", 			start:47, 	duration: 1.7}]
        }];

    this.helpLanguages = ["en", "bg", "ro", "es", "it", "pt", "da", "sv"];
    this.paytableLanguages = ['en', 'bg', 'ru', 'mk', 'fr', 'it', 'nl', 'es','ro', 'pt', 'da', 'hu', 'sv', 'de'];
}

com.egt.baseslot.Config = Config;