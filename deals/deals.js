(()=>{

// >>>> Site Deals <<<< //

    // Deals Model
    class siteDeal extends SiteService{
      discount;
      price;
      constructor(discount, price, title, info, image, label){
        super(title, info, image, label);
        this.discount = discount;
        this.price = price;
      }
    }

    // Controller
    let siteDeals = [
      new siteDeal('20', '50', 'House Keeping', ' Many desktop publishing packages and web page ed lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'house.png', 'house'),
      new siteDeal('10', '150', 'Grass Cutting', 'Many deskt page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',  'yard.png', 'yard'),
      new siteDeal('10', '30', 'Carpet Washing', 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',  'house.png', 'house'),
      new siteDeal('20', '350', 'Garage Doors Repair', 'Many desktop publ lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',  'garage.png', 'garage'),
      new siteDeal('30', '150', 'Remodelling', 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'yard.png', 'yard'),
      new siteDeal('50', '250', 'Painting', 'Many desktop publishing packages and web page editors now use Lorem Ipsum a).',  'garage.png', 'garage'),
      new siteDeal('10', '250', 'Painting', 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',  'yard.png', 'yard'),
      new siteDeal('10', '550', 'Roof Renovation', 'Many desktop publishing packages and web page editors now use Lorem Ipsur infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',  'house.png', 'house'),
      new siteDeal('10', '550', 'Roof Renovation', 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover maby accident, sometimes on purpose (injected humour and the like).',  'house.png', 'house')
    ]

    let dealsIndex = 0;
    document.getElementById('next-deal').addEventListener('click', next);
    document.getElementById('prev-deal').addEventListener('click', prev);

    function next(){
      debugger;  
      if (dealsIndex < siteDeals.length - 2){
        dealsIndex += 2;
      }else {
        dealsIndex = dealsIndex;
      }
      console.log('index: ', dealsIndex);

      renderDeals();
    }

    function prev(){
      if (dealsIndex >= 2){
        dealsIndex -= 2;
      }else {
        dealsIndex = dealsIndex;
      }
      console.log('index: ', dealsIndex);
      renderDeals();
    }

    let dealsToDisplay = [];
    function getDeals(n){
      return siteDeals.slice(dealsIndex, dealsIndex + n);
    }

  // Render

    function renderDeals(){
      let dealsContents = ``;
      let dealsToDisplay = getDeals(2);
      let dealsListDom = document.querySelector('.deals-list');
      
      for(let deal of dealsToDisplay){
        dealsContents += `
        <div class="deal">
            <div class="box">
              <img class="deal-image" src="assets/img/${deal.image}" alt="">
            </div>
            <div class="box">
              <h3 class="deal-heading">${deal.title}</h3>
              <p class="deal-info">${deal.info}</div>
            </div>
          </div>
        `
      }
      dealsListDom.innerHTML = dealsContents;

    }
    renderDeals();

})()

