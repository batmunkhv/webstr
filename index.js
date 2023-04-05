function test(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let uls = document.getElementById("country").value;
    alert("Nameis: "+ fname + "\n" + "Last name is: "+ lname + "\nCountry: " + uls);
    document.getElementById("print").innerHTML = "Nameis: "+ fname + "\n" + "Last name is: "+ lname + "\nCountry: " + uls;
}
