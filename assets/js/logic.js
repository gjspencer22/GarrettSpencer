document.getElementById('randomProjectButton').addEventListener('click', randomProject);

function randomProject(){
   const projects= ["https://desolate-harbor-29412.herokuapp.com/", "https://drive.google.com/file/d/1o4c_Acu3aNr-qFY1ugLgjMaQYFfcStlW/view", "https://gjspencer22.github.io/CountdownApp/"]
   let randomProjects= projects[Math.floor(Math.random()* projects.length)];
  window.open(randomProjects);
}
document.getElementById("randomProjectHeader").onclick = keepTrying();

document.getElementById ("randomProjectButton").addEventListener('click', keepTrying);
// if(document.getElementById("randomProjectButtonText").clicked == true)
function keepTrying () {
   clickCount = trigger.data("clickCount");
   if (clickCount > 1) {
     document.getElementById("randomProjectButton")
   }
  console.log('heheh')

  document.getElementById("randomProjectButtonText").innerHTML = "Keep trying, I swear it works.";
  // if(clicked more than 5 times) 
  // document.getElementById("randomProjectButtonText").textContent = "Oh wow, you're quite unlucky.";
  // if (clicked 10 or more time)
  // document.getElementById("randomProjectButtonText").textContent ="You are just messing around now huh?";
  // if (clicked 20 or more times)
  // document.getElementById("randomProjectButtonText").textContent = "Thanks for playing for so long!";
}

function changeText(){

}