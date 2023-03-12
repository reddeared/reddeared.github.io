/**
 * File to process the events dynamically.
 */

function processData() {
    var dataArr = dataArrEvent;
    for (var i = 0; i < dataArr.length; i++) {
        var data = dataArr[i];
        setEventContainer(data, i)
    }

    var urlHash = window.location.hash;
    if(urlHash.trim().length > 3) {
        setTimeout(function() { window.location.href = urlHash; },100)
    }

}
function setEventContainer(data, index) {
    var mainContainerDiv = $(elem('div')).addClass('content-container container-' + (index%2))
    $(mainContainerDiv).attr('id', `event-${index + 1}`)
    $('#event-data-container').append(mainContainerDiv);

    var backgroundContainerDiv = $(elem('div')).addClass('container-xxl bd-layout')
    $(mainContainerDiv).append(backgroundContainerDiv);

    var contentContainerDiv = $(elem('div')).addClass('col-md-12')
    $(backgroundContainerDiv).append(contentContainerDiv);

    var outerContainerDiv = $(elem('div')).addClass('row g-0 flex-md-row');
    $(contentContainerDiv).append(outerContainerDiv);

    var innerContainerDiv = getEventInnerContainer(data);
    $(outerContainerDiv).append(innerContainerDiv);
}

function getEventInnerContainer(data) {
    var innerContainerDiv = $(elem('div')).addClass('col-lg-12 pt-4 pt-lg-0 img-text-container');

    var titleText = $(elem('h5')).addClass('mb-4 content-title').text(data.title);
    $(innerContainerDiv).append(titleText);

    var titleInfoContainerDiv = getEventTitleInfoContainer(data);
    $(innerContainerDiv).append(titleInfoContainerDiv);

    var eventImage = $(elem('img')).addClass('float-end imgshadow m-2');
    $(innerContainerDiv).append(eventImage);
    $(eventImage).attr('src', data.image).attr('alt', 'Image not found!');
    $(eventImage).attr('style', `max-width:${data.image_width}; max-height:${data.image_height}; min-height:200px;`);

    var eventInfo = $(elem('p')).addClass('card-text mb-4 pt-4').html(data.description);
    $(innerContainerDiv).append(eventInfo);

    var contactLink = $(elem('a')).attr('href', data.weblink).attr('target', `_blank`)
        .addClass('content-link').text('More Info');
    $(eventInfo).append(contactLink);

    var footerInfoContainerDiv = getEventFooterInfoContainer(data);
    $(innerContainerDiv).append(footerInfoContainerDiv);

    return innerContainerDiv;
}

function getEventTitleInfoContainer(data) {

    var titleInfoContainerDiv = $(elem('div')).addClass('mb-2'); // container-title-info

    var typeContainerDiv = $(elem('div')).addClass('mb-1')
    $(titleInfoContainerDiv).append(typeContainerDiv);

    var typeDiv = $(elem('div')).addClass('container-info-label');
    $(typeContainerDiv).append(typeDiv);

    var typeIcon = $(elem('i')).addClass('bi bi bi-arrow-right-square-fill');
    $(typeDiv).append(typeIcon);

    var typeText = $(elem('span')).addClass('container-info-content').text(` ${data.topic} - ${data.type}`);
    $(typeDiv).append(typeText);


    var dateContainerDiv = $(elem('div'));
    $(titleInfoContainerDiv).append(dateContainerDiv);

    var dateDiv = $(elem('div')).addClass('container-info-label');
    $(dateContainerDiv).append(dateDiv);

    var dateIcon = $(elem('i')).addClass('bi bi-clock-fill');
    $(dateDiv).append(dateIcon);

    var dateText = $(elem('span')).addClass('container-info-content').text(` ${data.date} ${data.time}`)
    $(dateDiv).append(dateText);

    return titleInfoContainerDiv;
}

function getEventFooterInfoContainer(data) {

    var footerInfoContainerDiv = $(elem('div')).addClass('mb-4 container-title-info');

    var contactContainerDiv = $(elem('div')).addClass('mb-1');
    $(footerInfoContainerDiv).append(contactContainerDiv);

    var contactDiv = $(elem('div')).addClass('container-info-label');
    $(contactContainerDiv).append(contactDiv);

    var contactIcon = $(elem('i')).addClass('bi bi-info-square');
    $(contactDiv).append(contactIcon);

    var contactText = $(elem('span')).addClass('container-info-content').text(` ${data.contact}`);
    $(contactDiv).append(contactText);


    var locationContainerDiv = $(elem('div'));
    $(footerInfoContainerDiv).append(locationContainerDiv);

    var locationDiv = $(elem('div')).addClass('container-info-label');
    $(locationContainerDiv).append(locationDiv);

    var locationIcon = $(elem('i')).addClass('bi bi bi-geo-alt');
    $(locationDiv).append(locationIcon);

    var locationText = $(elem('span')).addClass('container-info-content').text(' ' + data.location);
    $(locationDiv).append(locationText);

    return footerInfoContainerDiv;
}
