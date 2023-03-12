/**
 * File to process the articles dynamically.
 */

function processData() {
    var dataArr = dataArrArticle;
    for (var i = 0; i < dataArr.length; i++) {
        var data = dataArr[i];
        setArticleContainer(data, i)
    }

    var urlHash = window.location.hash;
    if(urlHash.trim().length > 3) {
        setTimeout(function() { window.location.href = urlHash; },100)
    }
}

function setArticleContainer(data, index) {
    var mainContainerDiv = $(elem('div')).addClass('content-container container-' + (index%2))
    $(mainContainerDiv).attr('id', `article-${index + 1}`);

    $('#article-data-container').append(mainContainerDiv);

    var backgroundContainerDiv = $(elem('div')).addClass('container-xxl bd-layout')
    $(mainContainerDiv).append(backgroundContainerDiv);

    var contentContainerDiv = $(elem('div')).addClass('col-md-12')
    $(backgroundContainerDiv).append(contentContainerDiv);

    var outerContainerDiv = $(elem('div')).addClass('row g-0 flex-md-row');
    $(contentContainerDiv).append(outerContainerDiv);

    var innerContainerDiv = getArticleInnerContainer(data);
    $(outerContainerDiv).append(innerContainerDiv);
}

function getArticleInnerContainer(data) {
    var innerContainerDiv = $(elem('div')).addClass('col-lg-12 pt-4 pt-lg-0 img-text-container');

    var titleText = $(elem('h5')).addClass('content-title').text(data.title);
    $(innerContainerDiv).append(titleText);

    var titleInfoContainerDiv = getArticleTitleInfoContainer(data);
    $(innerContainerDiv).append(titleInfoContainerDiv);

    var articleImage = $(elem('img')).addClass('float-end imgshadow m-2');
    $(innerContainerDiv).append(articleImage);
    $(articleImage).attr('src', data.image).attr('alt', 'Image not found!');
    $(articleImage).attr('style', `max-width:${data.image_width}; max-height:${data.image_height}; min-height:200px;`);

    var articleInfo = $(elem('p')).addClass('card-text mb-4 pt-4').html(data.description);
    $(innerContainerDiv).append(articleInfo);

    var writerLink = $(elem('a')).attr('href', data.weblink).attr('target', `_blank`)
        .addClass('content-link').text('Read');
    $(articleInfo).append(" .....");
    $(articleInfo).append(writerLink);
    // TODO - Add Read Here

    var footerInfoContainerDiv = getArticleFooterInfoContainer(data);
    $(innerContainerDiv).append(footerInfoContainerDiv);

    return innerContainerDiv;
}

function getArticleTitleInfoContainer(data) {

    var titleInfoContainerDiv = $(elem('div')).addClass('mb-2'); // container-title-info

    var typeContainerDiv = $(elem('div')).addClass('mb-1')
    $(titleInfoContainerDiv).append(typeContainerDiv);

    var typeDiv = $(elem('div')).addClass('container-info-label');
    $(typeContainerDiv).append(typeDiv);

    var typeIcon = $(elem('i')).addClass('bi bi bi-arrow-right-square-fill');
    $(typeDiv).append(typeIcon);

    var typeText = $(elem('span')).addClass('container-info-content').text(' ' + data.topic);
    $(typeDiv).append(typeText);


    var dateContainerDiv = $(elem('div'));
    $(titleInfoContainerDiv).append(dateContainerDiv);

    var dateDiv = $(elem('div')).addClass('container-info-label');
    $(dateContainerDiv).append(dateDiv);

    var dateIcon = $(elem('i')).addClass('bi bi bi-calendar3');
    $(dateDiv).append(dateIcon);

    var dateText = $(elem('span')).addClass('container-info-content').text(' ' + data.date);
    $(dateDiv).append(dateText);

    return titleInfoContainerDiv;
}

function getArticleFooterInfoContainer(data) {

    var footerInfoContainerDiv = $(elem('div')).addClass('mb-4 container-title-info');

    var writerContainerDiv = $(elem('div')).addClass('mb-1');
    $(footerInfoContainerDiv).append(writerContainerDiv);

    var writerDiv = $(elem('div')).addClass('container-info-label');
    $(writerContainerDiv).append(writerDiv);

    var writerIcon = $(elem('i')).addClass('bi bi-info-square');
    $(writerDiv).append(writerIcon);

    var writerText = $(elem('span')).addClass('container-info-content').text(` ${data.writer}`);
    $(writerDiv).append(writerText);

    return footerInfoContainerDiv;
}
