(function(){

  $(document).ready(initialize);

  function initialize(){
    $('.home-index-coin-flip').click(coinFlip);
  }

  function coinFlip(){
    var self = this;
    $(self).hide();
    if($(self).hasClass('home-index-head-image')){
      $('.home-index-tails-image').removeClass('hide');
      $('.home-index-tails-image').show();
    }
    if($(self).hasClass('home-index-tails-image')){
      $('.home-index-head-image').removeClass('hide');
      $('.home-index-head-image').show();
    }
  }


})();
