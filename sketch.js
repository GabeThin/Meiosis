class Chromosome {
    constructor(x, y, size, parent) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.parent = parent;
    }
    show(){
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
    show(){
      stroke("black")
      ellipse(this.x, this.y, this.size, this.size)

    }

  }

cell = new Cell(200, 200, 100)
cell1 = new Cell(200, 200, 100)
cell2 = new Cell(200, 200, 100)
var stage = "late_phosphase";
chrom1a = new Chromosome(185, 185, 10, "blue")
chrom1b = new Chromosome(215, 185, 5, "blue")
chrom2a = new Chromosome(185, 215, 10, "red")
chrom2b = new Chromosome(215, 215, 5, "red")



function setup() {
  createCanvas(400, 400);
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
    else if(stage == "late_phosphase" &&chrom1b.x == 185) {
      print (chrom1b.x)
      stage = "metaphase"
    }}
//-- Metaphase
  if (stage == "metaphase"){
    if (chrom1a.x != 195){
      chrom1a.x = chrom1a.x + 1
      chrom1b.x = chrom1b.x + 1
      chrom2a.x = chrom2a.x - 1
      chrom2b.x = chrom2b.x - 1
    }
    else{
      stage = "anaphase"
    }}
//-- Anaphase
  if (stage == "anaphase"){
    if (chrom1a.x != 175){
      chrom1a.x = chrom1a.x - 1
      chrom1b.x = chrom1b.x - 1
      chrom2a.x = chrom2a.x + 1
      chrom2b.x = chrom2b.x + 1
  } else {
    stage = "telophase"
  }}
// -- Telophase
  if (stage == "telophase"){
    cell.size =1000
    cell1.size = 80
    cell2.size = 80
    if (cell1.x > 175){
      print(cell1.x)
      cell1.x = cell1.x -1
      cell2.x = cell2.x +1
    }
    else if (cell1.x != 125){
      cell1.x = cell1.x -1
      cell1.y = cell1.y +0.5
      chrom1a.x = chrom1a.x-1
      chrom1a.y = chrom1a.y+0.5
      chrom1b.x = chrom1b.x-1
      chrom1b.y = chrom1b.y+0.5
      cell2.x = cell2.x +1
      cell2.y = cell2.y +0.5
      chrom2a.x = chrom2a.x+1
      chrom2a.y = chrom2a.y+0.5
      chrom2b.x = chrom2b.x+1
      chrom2b.y = chrom2b.y+0.5
    }
  }
    

}
  
function show(){
  cell.show()
  cell1.show()
  cell2.show()
  chrom1a.show()
  chrom1b.show()
  chrom2a.show()
  chrom2b.show()
}
