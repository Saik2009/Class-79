var nos_array=[]
function submit(){
   
   var name_1= document.getElementById("nos_1").value;
   var name_2= document.getElementById("nos_2").value;
   var name_3= document.getElementById("nos_3").value;
   var name_4= document.getElementById("nos_4").value;

   nos_array.push(name_1);
   nos_array.push(name_2);
   nos_array.push(name_3);
   nos_array.push(name_4);
   console.log(nos_array)

   document.getElementById("display_name").innerHTML=nos_array;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";

   

}

function sorting(){
    nos_array.sort();
    console.log(nos_array)
    document.getElementById("display_name").innerHTML=nos_array;
}