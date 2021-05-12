function setup() {
  createCanvas(400, 400);
  cell = new Cell(200, 200, 100)
  chrom1a = new Chromosome(185, 185, 10, "blue")
  chrom1b = new Chromosome(215, 185, 5, "blue")
  chrom2a = new Chromosome(185, 215, 10, "red")
  chrom2b = new Chromosome(215, 215, 5, "red")
  var stage = "late_phosphase";
}

class Chromosome {
  constructor(x, y, size, parent) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.parent = parent;
  }
  draw(){
    stroke(this.parent)
    line(this.x+this.size, this.y+this.size, this.x-this.size, this.y-this.size)
    line(this.x-this.size, this.y+this.size, this.x+this.size, this.y-this.size)
  }
    
}

class Cell {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  draw(){
    stroke("black")
    ellipse(this.x, this.y, this.size, this.size)
    
  }
  
}


function draw() {
  background("white");
  strokeWeight(5)
  show()
  
//- -    Late_Phosphase_1
  if (stage == "late_phosphase"){
    if (stage == "late_phosphase" && chrom1b.x != 185){
      chrom1b.x = chrom1b.x- 1
      chrom1b.y = chrom1b.y+ 1
      chrom2a.x =chrom2a.x+ 1
      chrom2a.y =chrom2a.y- 1
    }
    else if(chrom1b.x == 185) {
      print (chrom1b.x)
      stage = "metaphase"
    }}
//-- Metaphase
  if (stage == "metaphase"){
    if (chrom2a.x != 205){
      chrom1a =  chrom1a +1
      chrom1b =  chrom1b+1
      chrom2a = chrom2a-1
      chrom2b = chrom2b-1
    }
    
  }
 
  
  
}

  
function show(){
  cell.draw()
  chrom1a.draw()
  chrom1b.draw()
  chrom2a.draw()
  chrom2b.draw()
}