function myFunction() {
    let days = [];
    let daysRequired = 6
    for (let i = 0; i <= daysRequired; i++) {
        days.push(moment().add(i, 'days').format('dddd, Do MMMM YYYY'))
    }
    console.log(days)
}




