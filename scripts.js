$(document).ready(function () {
  $("#datepicker").datepicker({
    onSelect: function (_date, _datepicker) {
      var currentDate = new Date(_date);
      var next7Days = [];

      for (var i = 0; i < 7; i++) {
        var nextDate = moment(currentDate).add(i + 1, "days");
        next7Days.push(nextDate);
        console.log(nextDate.format("dddd, Do MMMM YYYY"));
      }

      return true;
      // console.log(myDate)
      myDate.setDate(myDate.getDate() + 6);
      var daysOfYear = 6;
      for (var d = new Date(_date); d <= myDate; d.setDate(d.getDate() + 6)) {
        console.log(myDate);
        daysOfYear.push(
          (d.getMonth() > 8 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) +
            "/" +
            (d.getDate() > 9 ? d.getDate() : "0" + d.getDate()) +
            "/" +
            d.getFullYear()
        );
        console.log(d);
      }
      console.log(daysOfYear);
      var day1 = daysOfYear[0];
      $(".list").html(
        $("<div/>", {
          html: day1,
        }).text()
      );
    },
  });
});

function myFunction() {
  let days = [];
  let daysRequired = 6;
  for (let i = 0; i <= daysRequired; i++) {
    days.push(moment().add(i, "days").format("dddd, Do MMMM YYYY"));
  }
  console.log(days);
}
