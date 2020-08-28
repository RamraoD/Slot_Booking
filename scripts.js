$(document).ready(function () {
  $("#datepicker").datepicker({
    onSelect: function (_date, _datepicker) {
      var currentDate = new Date(_date);
      var timeslot =[];
      var next7Days = [];
      let daysRequired = 7;
      for (var i = 0; i < daysRequired; i++) {
        // var nextDate = moment(currentDate).add(i + 1, "days");
        // next7Days.push(nextDate);
        // console.log(nextDate.format("ddd, Do MMM YYYY"));
        next7Days.push(moment(currentDate).add(i + 1, "days").format("dddd, Do MMMM YYYY"));
        // console.log(next7Days)
      }
      var day1 = next7Days[0]
      $('#lista').html(
          $('<div/>', {
              html: day1
          }).text()
      )
      var day2 = next7Days[1]
      $('#listb').html(
          $('<div/>', {
              html: day2
          }).text()
      )
      var day3 = next7Days[2]
      $('#listc').html(
          $('<div/>', {
              html: day3
          }).text()
      )
      var day4 = next7Days[3]
      $('#listd').html(
          $('<div/>', {
              html: day4
          }).text()
      )
      var day5 = next7Days[4]
      $('#liste').html(
          $('<div/>', {
              html: day5
          }).text()
      )
      var day6 = next7Days[5]
      $('#listf').html(
          $('<div/>', {
              html: day6
          }).text()
      )
      var day7 = next7Days[6]
      $('#listg').html(
          $('<div/>', {
              html: day7
          }).text()
      )
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
        timeSlot.push(new moment(startTime).format('HH:mm'));
      startTime.add(60, 'minutes');
    }
    return timeSlot;
  }
  var timeSlot = getTimeSlot('09:00', '18:00');
  console.log('timeSlot ', timeSlot);

//   Creating Dynamic buttons
    var $btn1=$('<input/>').attr({type:'button',name:'mybutton',value: timeSlot[0]});
    var $btn2=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[1]});
    var $btn3=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[2]});
    var $btn4=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[3]});
    var $btn5=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[4]});
    var $btn6=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[5]});
    var $btn7=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[6]});
    var $btn8=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[7]});
    var $btn9=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[8]});
    var $btn10=$('<input/>').attr({type:'button',name:'mybutton',value:timeSlot[9]});
    $("#div1").append($btn1)
    $("#div2").append($btn2)
    $("#div3").append($btn3)
    $("#div4").append($btn4)
    $("#div5").append($btn5)
    $("#div6").append($btn6)
    $("#div7").append($btn7)
    $("#div8").append($btn8)
    $("#div9").append($btn9)
    $("#div10").append($btn10)
});


