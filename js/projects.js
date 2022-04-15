
(()=>{
  // >>>> Site Projects <<<< //

  class Project {
    constructor(title, info, image1, image2){
      this.title = title;
      this.info = info;
      this.image1 = image1;
      this.image2 = image2;
    }
  }

  let projects = [
    new Project('Front Yard Renovation at Kasper','project info', 'image1.jpg', 'image2.jpg'),
    new Project('Roof Fix at Aldi', 'project info', 'image1.jpg', 'image2.jpg'),
    new Project('Garage lifting and door change', 'project info','image1.jpg', 'image2.jpg'),
    new Project('Garden rejuvenation at Beverly Hills','project info', 'image1.jpg', 'image2.jpg'),
    new Project('House Painting Job','project info', 'image1.jpg', 'image2.jpg'),
  ]

  

  function renderProjects(){
    let = projectsContents = ``;
    let projectsList = document.querySelector('.projects-list');

    for ( let project of projects){
      projectsContents += 
      `<div class="project hidden">
        <div class="box1">
          <img class="project-image" src="img/${project.image1}"/>
        </div>
        <div class="box2">
          <h3 class="project-heading">
            ${project.title}
          </h3>
          <p class="project-info">
            ${project.info}
          </p>
        </div>
        <div class="box3">
          <img class="project-image" src="img/${project.image2}"/>
        </div>
      </div>
      `
    }
    projectsList.innerHTML = projectsContents;
  }
  renderProjects();

  function makeElVisible(){
    console.log('making el visible');

  }

  document.onscroll(makeElVisible())

})()