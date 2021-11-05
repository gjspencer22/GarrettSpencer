document.getElementById('randomProjectButton').addEventListener('click', randomProject);

function randomProject(){
   const projects= ["https://desolate-harbor-29412.herokuapp.com/", "https://drive.google.com/file/d/1o4c_Acu3aNr-qFY1ugLgjMaQYFfcStlW/view"]
   let randomProjects= projects[Math.floor(Math.random()* projects.length)];
  console.log('oy')
  window.open(randomProjects);
}