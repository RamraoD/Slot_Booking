$(document).ready(function () {
  $("#datepicker").datepicker({
    onSelect: function (_date, _datepicker) {
      var currentDate = new Date(_date);
      var timeslot = [];
      var next7Days = [];
      let daysRequired = 7;
      for (var i = 0; i < daysRequired; i++) {
        // var nextDate = moment(currentDate).add(i + 1, "days");
        // next7Days.push(nextDate);
        // console.log(nextDate.format("ddd, Do MMM YYYY"));
        next7Days.push(moment(currentDate).add(i, "days").format("ddd, Do MM YYYY"));
        // console.log(next7Days)
      } 
      // for (var i=0;i< next7Days.length;i++) {
        var list = next7Days[0]
        $('#day1').html(
          $('<div/>', {
            html: list
          }).text()
        )
        var list = next7Days[1]
        $('#day2').html(
          $('<div/>', {
            html: list
          }).text()
        )
        var list = next7Days[2]
        $('#day3').html(
          $('<div/>', {
            html: list
          }).text()
        )
        var list = next7Days[3]
        $('#day4').html(
          $('<div/>', {
            html: list
          }).text()
        )
        var list = next7Days[4]
        $('#day5').html(
          $('<div/>', {
            html: list
          }).text()
        )
        var list = next7Days[5]
        $('#day6').html(
          $('<div/>', {
            html: list
          }).text()
        )
        var list = next7Days[6]
        $('#day7').html(
          $('<div/>', {
            html: list
          }).text()
        )
      // }
      return true;
    },
  });
  //   timeslot function
  function getTimeSlot(start, end){
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');
    
    if( endTime.isBefore(startTime) ){
      endTime.add(1, 'day');
    }
  
    var timeSlot = [];

    while(startTime <= endTime){
        timeSlot.push(new moment(startTime).format('hh:mm A'));
      startTime.add(60, 'minutes');
    }
    return timeSlot;
  }
  var timeSlot = getTimeSlot('09:00', '18:00');
  console.log('timeSlot ', timeSlot);
  
  for(var i=0;i<timeSlot.length;i++) {
    var $btnOne=$('<input/>').attr({type:'button',value: timeSlot[i]});
    var $btnTwo=$('<input/>').attr({type:'button',value: timeSlot[i]});
    var $btnThree=$('<input/>').attr({type:'button',value: timeSlot[i]});
    var $btnFour=$('<input/>').attr({type:'button',value: timeSlot[i]});
    var $btnFive=$('<input/>').attr({type:'button',value: timeSlot[i]});
    var $btnSix=$('<input/>').attr({type:'button',value: timeSlot[i]});
    var $btnSeveen=$('<input/>').attr({type:'button',value: timeSlot[i]});
    $("#btnOne").append($btnOne)
    $("#btnTwo").append($btnTwo)
    $("#btnThree").append($btnThree)
    $("#btnFour").append($btnFour)
    $("#btnFive").append($btnFive)
    $("#btnSix").append($btnSix)
    $("#btnSeveen").append($btnSeveen)
  }
});
function slotBook() {
    
}

