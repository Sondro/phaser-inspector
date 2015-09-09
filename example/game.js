var game = new Phaser.Game(600, 400, Phaser.CANVAS, 'game', {
	preload: function preload() {
		game.load.atlasXML('blueSheet', 'UIpack/blueSheet.png', 'UIpack/blueSheet.xml');
	},
	create: function create() {
		game.plugins.add(Phaser.Plugin.Inspector);
		/** Cache the patches' textures */
		game.cache.addNinePatch('blue_button02', 'blueSheet', 'blue_button02.png', 10, 10, 10, 20);
		/** @type {Phaser.NinePatchImage} Create a NinePatchImage from cached textures */
		var image = new Phaser.NinePatchImage(game, game.width/2, game.height/2, 'blue_button02');
		/** Set the measures for image - [AUTOMATICALLY UPDATED] */
			image.targetWidth  = 200;
			image.targetHeight = 200;
		/** Set anchor for image - [NEEDS MANUAL UPDATE] */
			image.anchor.setTo(0.5, 0.5);
			image.UpdateImageSizes();
	}
})