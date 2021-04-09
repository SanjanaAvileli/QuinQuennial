class Screen1{

constructor(){

this.title = createImg("./QuinquennialImages/Title (2).png");
this.button = createImg("./QuinquennialImages/Button.png");

}

display(){

if(gamestate === 0){

    background(backImage);

this.title.id("myTitle");
this.title.position(450,150);

this.button.id("myButton");
this.button.position(675,450);
this.button.mouseClicked(()=>{
gamestate = 1;
console.log(gamestate);

this.title.hide();
this.button.hide();
})


}
}
}
