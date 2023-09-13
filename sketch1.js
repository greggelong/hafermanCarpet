let cnv;
//let axiom = "010101010"
let ron0 = "111111111"; // the rule on zero
let ron1 = "010101010"; // rule on 1
let r0 = [[1,1,1],[1,1,1],[1,1,1]]
let r1 = [[0,1,0],[1,0,1],[0,1,0]]
let sentence = "1";
let s2 =[[1]]
function setup() {
  cnv = createCanvas(603, 603);
  cx = (windowWidth - cnv.width) / 2;
  cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  background(0);
  for (let i = 0; i < 4; i++) {
    sentence = doRewrite(sentence);
    s2 =doRewrite2(s2)
   
    print(i, sentence, sentence.length);
    print(i, s2, s2.length);
  }
   
  print("new",s2)
  plotSentAtom(sentence);
}

function doRewrite(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      result += ron1;
    } else {
      // s[1] == 0
      result += ron0;
    }
  }
  return result;
}

function doRewrite2(s){
    let result = []
    
    for(let j=0; j<s.length;j++){
      for(let i=0;i<s[j].length;i++){
        for(let h=0;h<s[j][i].length;h++){
        print("Array",s[j][i][h])
        if (s[j][i][h] === 1) {
        
            result.push(r1);
          } else if(s[j][i][h]===0) {
        
            result.push(r0);
          }
        }
        }
        }
        print('resykt',result)
        return result;


    }


function plotSent(s) {
  background(255);
  let rowlen = Math.sqrt(s.length);
  print(rowlen);
  let rowpart = rowlen / 3;
  let sz = width / rowlen;
  for (let k = 0; k < rowlen; k++) {
    // print rows by rowlen/3
    for (let j = 0; j < rowlen; j += 1)
      for (let i = 0; i < rowpart; i++) {
        if (s[i + j + k] === "1") {
          fill(0, 255, 0);
        } else {
          fill(0);
        }

        rect(j * sz, k * sz, sz, sz);
        // print(k,j,i)
      }
  }
}

function plotSent2(s) {
  let index = 0;
  let rowlen = Math.sqrt(s.length);
  let rowpart = rowlen / 3;
  print(rowpart, rowlen);
  let sz = width / rowlen;
  let x = 0;
  let y = 0;
  let cellcount = 0;
  print(s.length);
  while (index < s.length) {
    // plot each atom
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        print("index", index + i + j);
        if (s[index] === "1") {
          fill(0, 255, 0);
        } else {
          fill(0);
        }
        cellcount++;
        index++;

        rect(x + i * sz, y + j * sz, sz, sz);
        print("cellcount", cellcount);
      }
    }
    x += 3 * sz; // larger row numbers need to have smaller movement
    y += 0;
    // index is always increaced by 9 now row len

    print(x, y, index);
    if (cellcount === 9 * rowpart) {
      print("hello");
      y += 3 * sz;
      x = 0;
      print(x, y, index);
      cellcount = 0;
    }
  }
}

function plotSentAtom(s) {
  let index = 0; // keep track off index
  let totalAtoms = s.length / 9;
  print(s.length)
  let rowlen = Math.sqrt(s.length);
  let atomProw = rowlen / 3;
  let sz = width / rowlen;
  let x = 0;
  let y = 0;

  // main loop, process by number of atoms
  for (let l = 0; l < totalAtoms; l++) {
    // process by atoms per row
    for (let k = 0; k < atomProw; k++) {
      // plot each atom
      for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 3; i++) {
          if (s[index+j+i] === "1") {
            fill(0, 255, 0); // if 1 color
          } else {
            fill(0);          // if 0 blank
          }
          //
          
          // plot
          rect(x + i * sz, y + j * sz, sz, sz);
        
        }
      }
      // move x over and y up
      x += 3 * sz; // larger row numbers need to have smaller movement
      y += 0;
      index+=9;  // inc index
    
    }
    // end of row // move x back and y down
    print("hello");
    y += 3 * sz;
    x = 0;
    //print(x, y, index);


  }
  print(index)
}
