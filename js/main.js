


let isOpen = true;
$('#boxicon').on('click', function () {
    let width = $('#boxcolor').width()

    if (isOpen) {
        $('#boxcontainer').animate({ left: -width - 10 }, 1000)
        isOpen = false
    }
    else {
        $('#boxcontainer').animate({ left: 0 }, 1000)
        isOpen = true;
    }

});
let spans = $('#boxcolor span');

spans.eq(0).css('background-color', 'green')
spans.eq(1).css('background-color', 'yellow')
spans.eq(2).css('background-color', 'black')
spans.eq(3).css('background-color', '#005C78')
spans.eq(4).css('background-color', '#E88D67')
spans.eq(4).css('background-color', '#F4BF96')
spans.eq(4).css('background-color', '#CE5A67')
spans.on('click', function () {
    let color = $(this).css('background-color')
    $('h3,h4').css('color', color)
    $('#home,#projects,#connect').css('backgroundColor', color)
    localStorage.setItem('color', color)

})
let color = localStorage.getItem('color')
$('h1,h3,h4,p,span').css('color', color)

$('#boxcolor img').on('click', function () {
    let src = $(this).attr('src')
    $('#home').css('background-image', `url(${src})`)
})
