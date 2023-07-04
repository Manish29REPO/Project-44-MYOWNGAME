class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
  
    redPlayer = createSprite(width-150, random(100,hegith-100));
    redPlayer.addImage("redTeam", redPlayerImg);

    bluePlayer = createSprite(100, random(100, hegith-100) );
    bluePlayer.addImage("blueTeam", bluePlayerImg);
  }

  play() {
    drawSprites();
  }
}
