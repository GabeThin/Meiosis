class Chromosome {
    constructor(x, y, size, parent, alleleColor, allele) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.parent = parent;
      this.alleleColor = alleleColor
      this.allele = allele
    }
    show(){
      stroke(this.parent)
      line(this.x+this.size, this.y+this.size, this.x-this.size, this.y-this.size)
      line(this.x-this.size, this.y+this.size, this.x+this.size, this.y-this.size)
      stroke(this.alleleColor)
      point(this.x-(this.size/2), this.y-this.size/2)
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
class Legend{
  constructor(x, y){
    this.x = x
    this.y = y
  }
  show(){
    //--Alleles
    strokeWeight(2)
    rect(this.x-170, this.y-20, this.x-100, this.y-55)
    strokeWeight(0)
    textSize(15)
    fill("black")
    text("A:     B:     ", this.x-150, this.y)
    text("a:     b:     ", this.x-148, this.y+14)
    strokeWeight(5)
    stroke("pink")
    point(this.x-127, this.y-5)
    stroke("yellow")
    point(this.x-127, this.y+10)
    stroke("green")
    point(this.x-92, this.y-5)
    stroke("purple")
    point(this.x-92, this.y+10)
    //--Colors
    fill("white")
    strokeWeight(2)
    stroke("black")
    rect(this.x+70, this.y-20, this.x-100, this.y-55)
    strokeWeight(0)
    textSize(15)
    fill("black")
    text("Parent 1:", this.x+80, this.y)
    text("Parent 2:", this.x+82, this.y+14)
    strokeWeight(3)
    stroke("red")
    line(this.x+160, this.y, this.x+150, this.y-10)
    line(this.x+160, this.y-10, this.x+150, this.y)
    stroke("blue")
    line(this.x+160, this.y+14, this.x+150, this.y+4)
    line(this.x+160, this.y+4, this.x+150, this.y+14)
    
  }
}

cell = new Cell(200, 200, 100)
cell1 = new Cell(200, 200, 100)
cell2 = new Cell(200, 200, 100)
var stage = "wait";
var nextStage = "late_phosphase"
chrom1a = new Chromosome(185, 185, 10, "blue", "yellow", "A")
chrom1b = new Chromosome(215, 185, 5, "blue", "pink", "B")
chrom2a = new Chromosome(185, 215, 10, "red", "green", "a")
chrom2b = new Chromosome(215, 215, 5, "red", "purple", "b")
legend = new Legend(200, 100)
timer = 0
waitTime = 100



function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("white")
  strokeWeight(5)
  show()
  
  
//-- Late_Phosphase_1
  if (stage == "late_phosphase"){
    if (chrom1b.x != 185){
      chrom1b.x = chrom1b.x- 1
      chrom1b.y = chrom1b.y+ 1
      chrom2a.x =chrom2a.x+ 1
      chrom2a.y =chrom2a.y- 1
    }
    else{
      stage = "wait"
      nextStage = "metaphase"
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
      stage="wait_late_phosphase"
      nextStage = "anaphase"
    }}
//-- Anaphase
  if (stage == "anaphase"){
    if (chrom1a.x != 175){
      chrom1a.x = chrom1a.x - 1
      chrom1b.x = chrom1b.x - 1
      chrom2a.x = chrom2a.x + 1
      chrom2b.x = chrom2b.x - 1
  } else {
    stage = "wait_anaphase"
    nextStage = "telophase"
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
      chrom2b.x = chrom2b.x-1
      chrom2b.y = chrom2b.y+0.5
    }
  }
  if (stage == "wait"){
    if (timer < waitTime){
      timer = timer+1
    }
    else{
      timer = 0
      stage = nextStage
    }}
    
  if (stage == "wait_late_phosphase"){
    if (timer < waitTime+50){
      timer = timer+1
      stroke("black")
      strokeWeight(0)
      text("Homologous pairs forming Tetrads", 100, 280)
      strokeWeight(2)
      line(170, 265, 230, 265)
      line(170, 265, 170, 250)
      line(230, 265, 230, 250)
    }
    else{
      timer = 0
      stage = nextStage
    }
  }
  
  if (stage == "wait_anaphase"){
    if (timer < waitTime+50){
      timer = timer+1
      stroke("black")
      strokeWeight(0)
      text("Hologous pairs failed to seperate!", 100, 280)
      text("Nondisjunction will occur.", 120, 295)
      
      strokeWeight(2)
      line(170, 265, 230, 265)
      line(170, 265, 170, 250)
      line(230, 265, 230, 250)
    }
    else{
      timer = 0
      stage = nextStage
    }
  }
    

}
  
function show(){
  // strokeWeight(0)
  // fill(225)
  // rect(0, 80, 400, 320)
  
  fill("white")
  strokeWeight(5)
  cell.show()
  cell1.show()
  cell2.show()
  chrom1a.show()
  chrom1b.show()
  chrom2a.show()
  chrom2b.show()
  stroke("black")
  textSize(80)
  text("MEIOSIS I", 20, 70)
  legend.show()
  
}
