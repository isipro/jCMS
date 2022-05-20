"use strict";

setNavigation();
renderFilter();
renderServices(siteServicesList);


/**
 * Website Logo - change image
 */
function updateLogo() {
  let fileName = $(".logo-file-input")[0].files[0].name;
  console.log("updating logo " + fileName);
  $(".logo").css("background-image", 'url("' + "assets/img/" + fileName + '")');
}

/**
 * Website Hero Unit - change image
 */
function updateHero() {
  let fileName = $("#formFileHero")[0].files[0].name;
  console.log("updating logo " + fileName);
  $(".hero-unit").css(
    "background-image",
    'url("' + "assets/img/" + fileName + '")'
  );
}

/**
 *  Header Color Change
 *  changes the color of the header by using the color picker of the input field
 */
$("#navColorpicker").on("input", function () {
  $("#hexcolor").val(this.value);
  updateNavbar(this.value);
});
$("#hexcolor").on("input", function () {
  $("#navColorpicker").val(this.value);
  updateNavbar(this.value);
});

function updateNavbar(val) {
  $(".website-header").css("background-color", val);
}

/**
 * Removes the service by clicking on the track icon
 *
 */
function deleteService() {
  $(".admin-pan .trash").on("click", function () {
    this.parentElement.parentElement.remove();
    console.log("deleting service");
    // renderServices(siteServicesList);
  });
}

/**
 * Removes the service by clicking on the track icon
 *
 */

function addService() {
  $(".admin-pan .add").on("click", function () {
    console.log("deleting service");

    let srv = new SiteService(
      "New Service Title",
      "",
      "service-placeholder.png",
      "label"
    );
    siteServicesList.push(srv);
    renderServices(siteServicesList);

  });
}
addService();

function updateService(e) {
  console.log(e.target);

  $("#srv-title-" + $(".srv-id").val()).text($(".srv-title").val());
  $("#srv-label-" + $(".srv-id").val()).text($(".srv-label").val());

  let img = $(".srv-image")[0].files[0].name;

  $("#srv-img-" + $(".srv-id").val()).attr("src", "assets/img/" + img);
}

/**
 * displays a modal to update the service title, picture and label
 *
 */
$(".admin-pan .edit").on("click", function () {
  console.log("show modal");

  let serviceId = this.id;
  let allServices = $(".service");
  let srv = allServices[serviceId];
  let title = $("#srv-title-" + serviceId).text();
  let label = $("#srv-label-" + serviceId).text();
  // let img = $('#srv-img-' + serviceId).text();

  $(".srv-id").val(this.id);
  $(".srv-title").val(title);
  $(".srv-label").val(label);
  // $('.srv-img').attr("src", img)

  let modalObj = new bootstrap.Modal(document.getElementById("serviceModal"));
  modalObj.show();
});

function initAdmin() {
  this.deleteService = deleteService;
  this.editService = editService;
  this.addService = addService;
}

/**
 *  Menu Color Change
 *  changes the background color of the menu by using the color picker of the input field
 */
$("#navColorpickerMenu").on("input", function () {
  $("#hexcolorMenu").val(this.value);
  updateNavbarMenu(this.value);
});
$("#hexcolorMenu").on("input", function () {
  $("#navColorpickerMenu").val(this.value);
  updateNavbar(this.value);
});

function updateNavbarMenu(val) {
  $(".menu").css("background-color", val);
}
