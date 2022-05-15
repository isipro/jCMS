'use strict';
    
  setNavigation();
  renderFilter();
  renderServices(siteServicesList);
  // renderDeals();



// Admin 

function updateLogo(){
 
  debugger;
  let fileName = $('input[type="file"]')[0].files[0].name;
  console.log('updating logo ' + fileName);
  $('.logo').css('background-image', 'url("' + 'assets/img/' + fileName + '")');

}



$('#navColorpicker').on('input', function() {
	$('#hexcolor').val(this.value);
  updateNavbar(this.value);
});
$('#hexcolor').on('input', function() {
  $('#navColorpicker').val(this.value);
  updateNavbar(this.value);
});

function updateNavbar(val){
  $('.website-header').css('background-color', val)
}