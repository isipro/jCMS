// >>>> Site Services <<<< //

  // Model
  class SiteService {

    constructor(title, info, image, label ){
      this.title = title;
      this.info = info;
      this.image = image;
      this.label = label;
    }
  }

  // Data
  let siteServicesList = [
    new SiteService('House Keeping', '', 'service-placeholder.png', 'house'),
    new SiteService('Carpet Cleaning', '',  'service-placeholder.png', 'house'),
    new SiteService('Grass Cutting', '',  'service-placeholder.png', 'yard'),
    new SiteService('Garage Doors Repair', '',  'service-placeholder.png', 'garage'),
    new SiteService('Remodelling', '', 'service-placeholder.png', 'house'),
    new SiteService('Painting', '',  'service-placeholder.png', 'garage'),
    new SiteService('Painting', '',  'service-placeholder.png', 'yard'),
    new SiteService('Roof Renovation', '',  'service-placeholder.png', 'house'),
    new SiteService('Remodelling', '', 'service-placeholder.png', 'garage'),
    new SiteService('Flower Planting', '',  'service-placeholder.png', 'garden'),
    new SiteService('Tree Planting', '',  'service-placeholder.png', 'garden'),
    new SiteService('Reconstruction', '',  'service-placeholder.png', 'garage')
  ]


  // Controller

  /**
   * Gets all label types to populate the filter
   * @param {*} siteServicesList 
   * @returns the labels
   */
   function getLabels(siteServicesList){
    let labels = [];
    for(let service of siteServicesList) {
      if(!labels.includes(service.label)){
        labels.push(service.label);
      }
    }
    return labels;
  }


   /**
   * Filters the services list leaving only the selected 
   * @param {*} filterLabel 
   * @returns the newly created array with the selected items
   */
    function filterData(filterLabel){
      return (filterLabel != 'all') ? siteServicesList.filter(service => service.label == filterLabel) : siteServicesList;    
  }


 /**
   *  Reloads / Rerenders the page after the filter is used
   */
  function onFilter(e){
    let filterLabel = document.getElementById('filter-by-label');
    let newSiteServiceList = filterData(filterLabel.value);
    renderFilter();
    renderServices(newSiteServiceList);
  }


// Render

/**
 * Render 
 * @param {*} siteServicesList 
 */
  function renderServices(siteServicesList){
    let services = document.querySelector('.services-list-inner');
    let servicesContent = '';
    services.innerHTML = servicesContent;

    for(let service of siteServicesList){
      servicesContent += 
      `
        <div class="service">
          <h3 class="title"> ${service.title} </h3>
          <img class="image" src="img/${service.image}"/>
          <p class="info">${service.info}</p>
          <span class="label">${service.label}</span>
        </div>
      `;
    }

    services.innerHTML += servicesContent;
  }


  /**
   * Renders the filter components
   */
  function renderFilter(){

    let filter = document.querySelector('.filter');
    let labels = getLabels(siteServicesList);
    let filterContents = `<option value="all">`;

    for (let label of labels){
      filterContents+= `<option value="${label}">`
    }

    filter.innerHTML = filterContents;
  }
  
  let filterBtn = document.getElementById('filter-btn');
  filterBtn.addEventListener("click", onFilter);

 
 
