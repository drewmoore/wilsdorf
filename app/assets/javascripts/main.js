(function(){

  'use strict';

  var lineTimer;
  var totalLineTime = 1000;
  var lineTimeIterationsTotal = 20;
  var lineTimeIterationsElapsed = 0;
  var lineInterval = totalLineTime / lineTimeIterationsTotal;

  $(document).ready(initialize);

  function initialize(){
    clearInterval(lineTimer);
    lineTimer = setInterval(drawUnderlines, lineInterval);
    drawUnderlines();
  }

  function drawUnderlines() {
    var padRatio = 0.10;
    var linePad = parseInt($('.content-panel').width() * padRatio);

    _.each($('#links-list > li'), function(li){
      var $textBox = $($(li).find('a'));
      var $linkUnderline = $($(li).find('.link-underline'));

      var $thaLine = $($linkUnderline.find('.tha-line'));
      var $thaCurve = $($linkUnderline.find('.tha-curve'));
      var $thaBlue = $($thaLine.find('.tha-blue'));

      $linkUnderline.width($textBox.width() + linePad);

      var amountToPaint;
      if($thaBlue.width() < $thaLine.width()){
        amountToPaint = $thaLine.width() / lineTimeIterationsTotal;
      } else {
        $thaBlue = $($thaCurve.find('.tha-blue'));
        amountToPaint = $thaCurve.width() / lineTimeIterationsTotal;

        debugger;

      }


      $thaBlue.width($thaBlue.width() + amountToPaint);

      //console.log('drawUnderlines: ', $textBox);



    });

    lineTimeIterationsElapsed ++;
    if(lineTimeIterationsElapsed === lineTimeIterationsTotal){
      clearInterval(lineTimer);
    }

  }

})();
