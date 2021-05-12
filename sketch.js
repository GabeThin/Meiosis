function setup() {
  createCanvas(600, 600);
  let size = 150
  let cell = new Cell(200, 200, 100)
  let chrom1a = new Chromosome(width/2-(0.15*size), width/2-(0.15*size), size/10, "blue", "A")
  let chrom1b = new Chromosome(width/2-(0.15*size), width/2+(0.15*size), size/20, "blue", "B")
  let chrom2a = new Chromosome(width/2+(0.15*size), width/2-(0.15*size), size/10, "red", "a")
  let chrom2b = new Chromosome(width/2+(0.15*size), width/2+(0.15*size), size/20, "red", "b")
  stroke("red");
  text("Red = parent 1 chromosomes", 10, 15);
  stroke("blue");
  text("Blue = parent 2 chromosomes", 10, 30);
  let stage = "late_phosphase";
}

class Chromosome {
  constructor(x, y, size, parent, allele) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.parent = parent;
    this.allele = allele;
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
