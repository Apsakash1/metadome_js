function test(){
    console.log("Akash works!");
}

let size = 18, stars = "";
for(let i=1; i<=size; i++){
    stars = "";
    for(let j=1; j<=size; j++){
        if(i%2!=0){
            if(j%2!=0){
                stars += " ";
            }else{
                stars += "#";
            }
        }else{
            if(j%2!=0){
                stars += "#";
            }else{
                stars += " ";
            }
        }
    }
    console.log(stars);
    //console.log("\n");
}
//console.log("\n" + stars.length);