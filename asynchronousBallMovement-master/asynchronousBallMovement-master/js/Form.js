class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greating = createElement("h3")
    }
    hide(){
        this.greating.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
    var title=createElement("h2")
    title.html("Small AI")
    title.position(130,0)

   
   
   this.input.position(130,160)
   this.button.position(250,200)
   this.button.mousePressed(function(){
    this.input.hide()
    this.button.hide() 
        player.name=this.input.value()
        playerCount+=1
        player.update("name")
        player.updateCount(playerCount)
        this.greating.html("hello "+playername)
        this.greating.position(350,200)
    })

}}