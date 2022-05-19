// >>>> Navigation <<<< //

  /** 
   * Scrolls to the respective section after click on the main nav menu 
  */
   function scrollToSection(selector){
    let element = document.querySelector(selector);
    // element.scrollIntoView();
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    console.log('scrolling to ' + selector);
  }

  function scrollUp(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function showScrollUpButton(){
    
    let scrollToTop = document.getElementById('scrollToTop');
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop > 0 && !scrollToTop.classList.contains('showBtn')){
      scrollToTop.classList.add('showBtn');
    } else if (scrollTop < 10 && scrollToTop.classList.contains('showBtn')){
      scrollToTop.classList.remove('showBtn');
    }
  }


  /** 
   * addс all events handlers to the main nav menu 
  */
  function setNavigation(){
    let navHome = document.getElementById('nav-home');
    navHome.addEventListener('click', () => {scrollToSection('.hero-unit')} );
    
    let navServices = document.getElementById('nav-services');
    navServices.addEventListener('click', () => {scrollToSection('.services') });

    let navDeals = document.getElementById('nav-deals');
    navDeals.addEventListener('click', () => {scrollToSection('.deals') });

    let navProjects = document.getElementById('nav-projects');
    navProjects.addEventListener('click', () => {scrollToSection('.projects') });

    let navContacts = document.getElementById('nav-contacts');
    navContacts.addEventListener('click', () => {scrollToSection('.contacts') });

    let scrollToTop = document.getElementById('scrollToTop');
    scrollToTop.addEventListener('click', () => {scrollUp()})

    document.addEventListener('scroll', showScrollUpButton);
  }
