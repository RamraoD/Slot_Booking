$(document).ready(function () {
  $("#datepicker").datepicker({
    onSelect: function (_date, _datepicker) {
      var currentDate = new Date(_date);
      var next7Days = [];
      let daysRequired = 7;
      for (var i = 0; i < daysRequired; i++) {
        // var nextDate = moment(currentDate).add(i + 1, "days");
        // next7Days.push(nextDate);
        // console.log(nextDate.format("ddd, Do MMM YYYY"));
        next7Days.push(moment(currentDate).add(i + 1, "days").format("dddd, Do MMMM YYYY"));
        console.log(next7Days)
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
});

// function myFunction() {
//   let days = [];
//   let daysRequired = 6;
//   for (let i = 0; i <= daysRequired; i++) {
//     days.push(moment().add(i, "days").format("dddd, Do MMMM YYYY"));
//   }
//   console.log(days);
// }
