class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Age");
    this.button = createButton('submit');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(130,20);

    this.input1.position(120,180);
    this.input.position(120,150);
    this.button.position(200,230);
2
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.input1.hide();
        playerage  =this.input1.value();
        player.name = this.input.value();
        if(playerage>=18){
          this.greeting.html("Hello "+player.name);
          this.greeting.position(150,150);    
          
          
          var num = "swz"+player.age+1;
          player.age= num;
          player.update();
          player.updateage(playerage);
        }

        else{
          this.greeting.html("Your are not eligible<br>to take the test");
          this.greeting.position(100,150);    
        }
        
    });

  }
}
