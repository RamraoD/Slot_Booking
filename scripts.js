function myFunction() {
    var x = document.getElementById("myDate").value;
    document.getElementById("date").innerHTML = x;
    let days = [];
    let daysRequired = 6
    for (let i = 0; i <= daysRequired; i++) {
        days.push(moment().add(i, 'days').format('dddd, Do MMMM YYYY'))
    }
    console.log(days)
    var day1 = days[0]
    $('#lista').html(
        $('<div/>', {
            html: day1
        }).text()
    )
    var day2 = days[1]
    $('#listb').html(
        $('<div/>', {
            html: day2
        }).text()
    )
    var day3 = days[2]
    $('#listc').html(
        $('<div/>', {
            html: day3
        }).text()
    )
    var day4 = days[3]
    $('#listd').html(
        $('<div/>', {
            html: day4
        }).text()
    )
    var day5 = days[4]
    $('#liste').html(
        $('<div/>', {
            html: day5
        }).text()
    )
    var day6 = days[5]
    $('#listf').html(
        $('<div/>', {
            html: day6
        }).text()
    )
    var day7 = days[6]
    $('#listg').html(
        $('<div/>', {
            html: day7
        }).text()
    )
}



