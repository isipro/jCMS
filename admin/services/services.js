// >>>> Site Services <<<< //

// Model
class SiteService {
  constructor(title, info, image, label) {
    this.title = title;
    this.info = info;
    this.image = image;
    this.label = label;
  }
}

// Data
let siteServicesList = [
  new SiteService("House Keeping", "", "service-placeholder.png", "house"),
  new SiteService("Carpet Cleaning", "", "service-placeholder.png", "house"),
  new SiteService("Grass Cutting", "", "service-placeholder.png", "yard"),
  new SiteService(
    "Garage Doors Repair",
    "",
    "service-placeholder.png",
    "garage"
  ),
  new SiteService("Remodelling", "", "service-placeholder.png", "house"),
  new SiteService("Painting", "", "service-placeholder.png", "garage"),
  new SiteService("Painting", "", "service-placeholder.png", "yard"),
  new SiteService("Roof Renovation", "", "service-placeholder.png", "house"),
  new SiteService("Remodelling", "", "service-placeholder.png", "garage"),
  new SiteService("Flower Planting", "", "service-placeholder.png", "garden"),
  new SiteService("Tree Planting", "", "service-placeholder.png", "garden"),
  new SiteService("Reconstruction", "", "service-placeholder.png", "garage"),
];

// Controller

/**
 * Gets all label types to populate the filter
 * @param {*} siteServicesList
 * @returns the labels
 */
function getLabels(siteServicesList) {
  let labels = [];
  for (let service of siteServicesList) {
    if (!labels.includes(service.label)) {
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
function filterData(filterLabel) {
  return filterLabel != "all"
    ? siteServicesList.filter((service) => service.label == filterLabel)
    : siteServicesList;
}

/**
 *  Reloads / Rerenders the page after the filter is used
 */
function onFilter(e) {
  let filterLabel = document.getElementById("filter-by-label");
  let newSiteServiceList = filterData(filterLabel.value);
  renderFilter();
  renderServices(newSiteServiceList);
  $(".admin-pan .trash").on("click", function () {
    debugger;
    this.parentElement.parentElement.remove();
    console.log("deleting service");
  });

  $(".admin-pan .edit").on("click", function () {
    // debugger;
    console.log('show modal');
  
    let serviceId = this.id;
    let allServices = $('.service');
    let srv = allServices[serviceId];
    let title = $('#srv-title-' + serviceId).text();
    let label = $('#srv-label-' + serviceId).text();
    let img = $('#srv-img-' + serviceId).text();
  
    $('.srv-id').val(this.id);
    $('.srv-title').val(title)
    $('.srv-label').val(label);
    $('.srv-img').val(img);
  
    let modalObj = new bootstrap.Modal(document.getElementById('serviceModal'));
    modalObj.show();
  
  });
}

// Render

/**
 * Render
 * @param {*} siteServicesList
 */
function renderServices(siteServicesList) {
  let services = document.querySelector(".services-list-inner");
  let servicesContent = "";
  services.innerHTML = servicesContent;
  let srvIndex = 0;
  for (let service of siteServicesList) {
    srvIndex++;
    servicesContent += `
        <div class="service" id="srv-${srvIndex}">
          <h3 class="title" id="srv-title-${srvIndex}"> ${service.title} </h3>
          <img class="image" src="assets/img/${service.image}"  id="srv-img-${srvIndex}" />
          <p class="info"  id="srv-p-${srvIndex}">${service.info}</p>
          <span class="label"  id="srv-label-${srvIndex}">${service.label}</span>
          <div class="admin-pan" id="admin-pan-${srvIndex}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill trash" viewBox="0 0 16 16"  id="${srvIndex}">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square edit" viewBox="0 0 16 16" id="${srvIndex}">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
          </div>
        </div>
      `;
  }

  services.innerHTML += servicesContent;
}

/**
 * Renders the filter components
 */
function renderFilter() {
  let filter = document.querySelector(".filter");
  let labels = getLabels(siteServicesList);
  let filterContents = `<option value="all">`;

  for (let label of labels) {
    filterContents += `<option value="${label}">`;
  }

  filter.innerHTML = filterContents;
}

let filterBtn = document.getElementById("filter-btn");
filterBtn.addEventListener("click", onFilter);
