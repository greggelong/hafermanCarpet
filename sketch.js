let cnv;
//let axiom = "010101010"
let ron0 = "111111111" // the rule on zero
let ron1 = "010101010" // rule on 1
let sentence = "1"
function setup(){
    cnv=createCanvas(603,603);
    cx = (windowWidth-cnv.width)/2;
    cy = (windowHeight-cnv.height)/2;
    cnv.position(cx,cy);
    background(0);
    for (let i = 0; i<2;i++){
        sentence = doRewrite(sentence)
        print(i,sentence, sentence.length)
    }
    plotSent2(sentence)


}


function doRewrite(s){
    let result =""
    for(let i =0; i<s.length; i++){
        if(s[i]=== "1"){
            result+=ron1
        }else{
            // s[1] == 0
            result+=ron0
        }
    }
    return result

}

function plotSent(s){
    background(255)
    let rowlen =Math.sqrt(s.length);
    print(rowlen)
    let rowpart = rowlen/3
    let sz = width/rowlen
    for (let k =0;k<rowlen;k++){
        // print rows by rowlen/3
        for(let j= 0;j<rowlen;j+=1)
         for(let i =0;i<rowpart;i++){
            if( s[i+j+k]==="1"){
                
                fill(0,255,0)
            }else{
                fill(0)
            }

            rect(j*sz,k*sz,sz,sz)
           // print(k,j,i)
    
        }
    }
}

function plotSent2(s){
    let index =0
    let rowlen = Math.sqrt(s.length)
    let rowpart = rowlen/3
    let sz = width/rowlen
    let x =0
    let y =0;
    let cellcount =0

    while (index <=s.length){

    // plot each atom 
    for(let j=0;j<3;j++){
        for (let i =0;i<3;i++){
            
            if( s[index+i+j]==="1"){
                
                fill(0,255,0)
            }else{
                fill(0)
            }
            cellcount++

            rect(x+(i*sz),y+(j*sz),sz,sz)
           // print(k,j,i)

        }
    }
    x+=rowpart*sz
    y+=0
    index+=rowlen
    print(x,y)
    if (cellcount ===rowpart*rowlen){  
        print("hello")
        y+=rowpart*sz
        x =0;
        print(x,y,index)
        cellcount =0
    }

    }


}