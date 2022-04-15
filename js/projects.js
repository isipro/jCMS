
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
    new Project('Front Yard Renovation at Kasper','project info', 'image1.jpg', 'image2.jpg'),
    new Project('Roof Fix at Aldi', 'project info', 'image1.jpg', 'image2.jpg'),
    new Project('Garage lifting and door change', 'project info','image1.jpg', 'image2.jpg'),
    new Project('Garden rejuvenation at Beverly Hills','project info', 'image1.jpg', 'image2.jpg'),
    new Project('House Painting Job','project info', 'image1.jpg', 'image2.jpg'),
  ]

  
  let n = 0;
  function loadProjects(){
    if(n <= projects.length - 3) {
      n += 3;
    }
    debugger;
    return projects.slice(0, n); 
  }
  

  // number to load
  

  function renderProjects(){
    let = projectsContents = ``;
    let loadedProjects = loadProjects();
    let projectsList = document.querySelector('.projects-list');

    for ( let project of loadedProjects){
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


  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

  

  function makeElVisible(){
    let projectsEls = document.querySelectorAll('.project');
    console.log('making el visible');

    for ( let le of projectsEls){

      if(isScrolledIntoView(le)){
        le.classList.remove('hidden');
      } else {
        le.classList.add('hidden');
      }
    }
  }

  window.onscroll = makeElVisible;

  let loadMoreBtn = document.querySelector('.load-more-btn');
  loadMoreBtn.addEventListener('click', ()=>{
    loadProjects();
    renderProjects();
  });

})()