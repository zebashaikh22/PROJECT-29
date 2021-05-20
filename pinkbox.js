class PinkBox extends Box {
    constructor(x,y){
        super(x,y,30,40);
    }

    display(){
        fill(50);
        super.display();
    }
}