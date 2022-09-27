$.get('http://0.0.0.0:5002/api/v1/status/', function (data, status) {
    console.log(status)
    if (status === 'success') {
        $('#api_status').addClass('available')
    }
    else {
        $('#api_status').removeClass('available')
    }
});
$('document').ready(function () {
    let amenities = {};
    $('.amenities :checkbox').change(function () {
        if ($(this).prop("checked")) {
            amenities[$(this).data().id] = $(this).data().name;
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        console.log($(this).data());
        $('.amenities h4').text(Object.values(amenities).join(', '));
    });
});
