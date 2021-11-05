document.getElementById('randomProjectButton').addEventListener('click', randomProject);

function randomProject(){
   const projects= ["https://www.google.com", "https://www.youtube.com"]
   let randomProjects= projects[Math.floor(Math.random()* projects.length)];
  console.log('oy')
  window.open(randomProjects);
}