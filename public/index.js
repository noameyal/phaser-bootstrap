import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import OptionsScene from './scenes/OptionsScene';
import CreditsScene from './scenes/CreditsScene';

const config = {

};

const game = new Phaser.Game(config);
game.scene.add('Boot', BootScene);
game.scene.add('Preloader', PreloaderScene);
game.scene.add('Title', TitleScene);
game.scene.add('Options', OptionsScene);
game.scene.add('Credits', CreditsScene);
game.scene.add('Game', GameScene);
game.scene.start('Game');