function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");
  meiosis1();
}

function meiosis1() {
  base();
  lateProphase1();
  stroke("red");
  text("Red = parent 1 chromosomes", 10, 15);
  stroke("blue");
  text("Blue = parent 2 chromosomes", 10, 30);
}

function base() {
  let size = 150
  let cell = new Cell(width / 2, width / 2, size)
  cell.draw()
  let chrom1a = new Chromosome(width/2-(0.15*size), width/2-(0.15*size), size/10, "blue", "A")
  let chrom1b = new Chromosome(width/2-(0.15*size), width/2+(0.15*size), size/20, "blue", "B")
  chrom1a.draw()
  chrom1b.draw()
  let chrom2a = new Chromosome(width/2+(0.15*size), width/2-(0.15*size), size/10, "red", "a")
  let chrom2b = new Chromosome(width/2+(0.15*size), width/2+(0.15*size), size/20, "red", "b")
  chrom2a.draw()
  chrom2b.draw()
}

function lateProphase1(){
  for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
}

class Chromosome {
  constructor(x, y, size, parent, allele) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.parent = parent;
    this.allele = allele;
  }

  draw() {
    stroke(this.parent);
    line(this.x+this.size, this.y+this.size, this.x-this.size, this.y-this.size);
    line(this.x-this.size, this.y+this.size, this.x+this.size, this.y-this.size);
    stroke(0);
    line(this.x-(this.size/1.5), this.y-(this.size/10), this.x-(this.size/10), this.y-(this.size/1.5));
    text(this.allele, this.x-(this.size), this.y-(this.size));
  }
}

class Cell {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  draw() {
    stroke("black")
    ellipse(this.x, this.y, this.size, this.size)

  }

}
