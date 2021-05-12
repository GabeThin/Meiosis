function setup() {
  createCanvas(600, 600);
  size = 150;
  cell = new Cell(width / 2, width / 2, size)
  chrom1a = new Chromosome(width/2-(0.15*size), width/2-(0.15*size), size/10, "blue", "A")
  chrom1b = new Chromosome(width/2-(0.15*size), width/2+(0.15*size), size/20, "blue", "B")
  chrom2a = new Chromosome(width/2+(0.15*size), width/2-(0.15*size), size/10, "red", "a")
  chrom2b = new Chromosome(width/2+(0.15*size), width/2+(0.15*size), size/20, "red", "b")
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
  draw(){
    stroke("black")
    ellipse(this.x, this.y, this.size, this.size)
  }
}


function draw() {
  background("white");
  strokeWeight(2)
  show()
  stroke("red");
  text("Red = parent 1 chromosomes", 10, 15);
  stroke("blue");
  text("Blue = parent 2 chromosomes", 10, 30);
  stage = "prophase";

//- -    Prophase
  if (stage == "prophase"){
    if (chrom1b.x <= width / 2 - (1.15 * chrom1b.size)) {
      chrom1b.x += 1;
      chrom2b.x -= 1;
      chrom1a.x += 1;
      chrom2a.x -= 1;

    }
    else if(chrom1b.x > width / 2 - (1.15 * chrom1b.size)) {
      stage = "metaphase"
    }
  }
// //-- Metaphase
//   if (stage == "metaphase"){
//     if (chrom2a.x != 205){
//       chrom1a =  chrom1a +1
//       chrom1b =  chrom1b+1
//       chrom2a = chrom2a-1
//       chrom2b = chrom2b-1
//     }

  // }

}


function show(){
  cell.draw()
  chrom1a.draw()
  chrom1b.draw()
  chrom2a.draw()
  chrom2b.draw()
}
