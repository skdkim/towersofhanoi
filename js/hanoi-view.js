class View {
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
    this.setupTowers();
  }

  setupTowers(){
    for(let j = 1; j <= 3; j++){
      let $ul = $(`<ul>Tower ${j}</ul>`);
      $ul.attr("id", j);
      for (let i = 1; i <= 3; i++) {
        let $li = $("<li></li>");
        $li.attr("id", i);
        $li.text("Block");
        $ul.append($li);
      }
      this.$el.append($ul);
    }
  }
}

module.exports = View;
