class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // set load path
        this.load.path = 'assets/';
        // Load all assets here.
        // Since the asset keys can be used in any scene, can load here
        // and use in any other scene

        // Load atlas here

        this.load.image('talltrees', 'talltrees.png');
        this.load.image('ground', 'ground.png');
        this.load.image('cloud', 'white-cloud.png');
        this.load.atlas('link_atlas', 'linksheet.png', 'linkmap.json');
        
        // load tileset and tilemap
        this.load.image('tilesDungeon', '0x72_DungeonTilesetII_v1.4/0x72_DungeonTilesetII_v1.4.png');
        this.load.tilemapTiledJSON('dungeon', '../resources/dungeon01.json');
    }

    create() {
        // ...and pass to the next Scene
        this.scene.start('movementScene');
    }
}