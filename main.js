array= [
"Dad.png","MOTEHR.png","BOY.png","GIRL.png","PET.png"
]
i=0
function next() {
document.getElementById("album").src=array[i];
i=i+1
if(i>=5){i=0}

}