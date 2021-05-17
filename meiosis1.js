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
      stroke(0);
      strokeWeight(2);let chromatid = false;

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
            stroke(this.alleleColor);
            point(this.x+(this.size/2), this.y+this.size/2);
            // stroke(0);
            // line(this.x-(this.size/1.5), this.y-(this.size/10), this.x-(this.size/10), this.y-(this.size/1.5));
            // text(this.allele, this.x-(this.size), this.y-(this.size));
          }

        }

      class Chromatid {
          constructor(x, y, size, parent, crossedParent, alleleColor) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.parent = parent;
            this.crossedParent = crossedParent;
            this.alleleColor = alleleColor;
          }

          show() {
            stroke(this.parent)
            line(this.x, this.y+this.size, this.x, this.y-this.size)
            stroke(this.crossedParent)
            line(this.x, this.y+this.size, this.x, this.y+(this.size/2))
            if (this.alleleColor != null) {
              stroke(this.alleleColor)
              point(this.x, this.y+this.size/2)
            }
          }
      }

      class CrossedOverChromosome {
        constructor(x, y, size, parent, crossedParent, alleleColor, alleleColor2) {
          this.x = x;
          this.y = y;
          this.size = size;
          this.parent = parent;
          this.crossedParent = crossedParent;
          this.alleleColor = alleleColor
          this.alleleColor2 = alleleColor2
        }
        show(){
          stroke(this.parent)
          if (this.parent == "blue") {
            line(this.x+this.size - 5, this.y+this.size - 5, this.x-this.size, this.y-this.size)
            stroke(this.crossedParent)
            line(this.x+this.size - 5, this.y+this.size - 5, this.x+this.size, this.y+this.size)
            stroke(this.parent)
            line(this.x-this.size, this.y+this.size, this.x+this.size, this.y-this.size)
        }
          else {
            stroke(this.parent)
            line(this.x+this.size, this.y+this.size, this.x-this.size, this.y-this.size)
            line(this.x-this.size, this.y+this.size, this.x+this.size, this.y-this.size)
            stroke(this.crossedParent)
            line(this.x-this.size, this.y+this.size, this.x - 3, this.y + 3)
            stroke(this.alleleColor);
            point(this.x+(this.size/2), this.y+this.size/2);
            stroke(this.alleleColor2);
            point(this.x-(this.size/2), this.y+this.size/2);
          }

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
            strokeWeight(5)
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
            nextStage = "crossing_over"
          }}
      //-- Crossing Over
        if (stage == "crossing_over"){
          timer += 1

          chrom1a = new CrossedOverChromosome(chrom1a.x, chrom1a.y, chrom1a.size, chrom1a.parent, "red", "yellow")
          chrom1b = new CrossedOverChromosome(chrom1b.x, chrom1b.y, chrom1b.size, chrom1b.parent, "red", "pink")
          chrom2a = new CrossedOverChromosome(chrom2a.x, chrom2a.y, chrom2a.size, chrom2a.parent, "blue", "green", "yellow")
          chrom2b = new CrossedOverChromosome(chrom2b.x, chrom2b.y, chrom2b.size, chrom2b.parent, "blue", "purple", "pink")
          strokeWeight(0)
          text("Crossing over", 100, 280)
          strokeWeight(5)

          if (timer > 90) {
            stage = "wait"
            nextStage = "anaphase"
          }
        }
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
          else {
            stage = "phosphase_2"
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
          if (timer < waitTime+200){
            timer = timer+1
            stroke("black")
            strokeWeight(0)
            text("Homologous pairs failed to seperate!", 100, 280)
            text("Nondisjunction will occur.", 120, 295)
            text("Normally, chromosomes will separate evenly.", 30, 310)
            text("This results in uneven chromatid assortment.", 30, 325)


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

        if (stage == "phosphase_2"){
          if (timer < waitTime+50){
            timer = timer+1
            if (cell1.y >= 180) {
              cell1.y -= 1
              cell2.y -= 1
              chrom1a.y -= 1
              chrom1b.y -= 1
              chrom2a.y -= 1
              chrom2b.y -= 1
            }

          }
          else{
            timer = 0
            stage = "meiosis_2"
          }
        }

        if (stage == "meiosis_2"){
          if (timer < waitTime+300){
            chromatid = true
            timer = timer+1

            cell3 = new Cell(35, 280, 60)
            cell4 = new Cell(110, 280, 60)
            cell5 = new Cell(290, 280, 60)
            cell6 = new Cell(365, 280, 60)

            chromatid3a = new Chromatid(30, 282, 12, "blue", "blue")
            chromatid3b = new Chromatid(40, 287, 7, "blue", "red")
            chromatid3c = new Chromatid(50, 287, 7, "red", "red", "purple")
            chromatid4a = new Chromatid(105, 282, 12, "blue", "red")
            chromatid4b = new Chromatid(115, 287, 7, "blue", "blue")
            chromatid4c = new Chromatid(125, 287, 7, "red", "blue", "pink")

            chromatid5a = new Chromatid(285, 282, 12, "red", "red", "green")
            chromatid6a = new Chromatid(360, 282, 12, "red", "blue", "yellow")
          }
          else{
            timer = 0
            stage = "finished"
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
        text("MEIOSIS", 30, 70)
        legend.show()

        if (chromatid == true) {
          noFill()
          strokeWeight(5)
          cell3.show()
          cell4.show()
          cell5.show()
          cell6.show()
          chromatid3a.show()
          chromatid3b.show()
          chromatid3c.show()
          chromatid4a.show()
          chromatid4b.show()
          chromatid4c.show()
          chromatid5a.show()
          chromatid6a.show()
        }

      }

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
