/**
 * File to process the articles dynamically.
 */

function processData() {
    var dataArr = dataArrArticle;
    for (var i = 0; i < dataArr.length; i++) {
        var data = dataArr[i];
        setArticleContainer(data, i)
    }

    setTimeout(function() {
        var urlHash = window.location.hash;
        if(urlHash.trim().length > 3)
            window.location.href = urlHash;
    },100)
}

function setArticleContainer(data, index) {
    var mainContainerDiv = $(elem('div')).addClass('col-md-12 border shadow-sm rounded flex-bg')
    $(mainContainerDiv).attr('id', `article-${index + 1}`)
    $('#article-data-container').append(mainContainerDiv);

    var outerContainerDiv = $(elem('div')).addClass('row g-0 flex-md-row');
    $(mainContainerDiv).append(outerContainerDiv);

    var innerContainerDiv = getArticleInnerContainer(data);
    $(outerContainerDiv).append(innerContainerDiv);
}

function getArticleInnerContainer(data) {
    var innerContainerDiv = $(elem('div')).addClass('col-lg-12 pt-4 pt-lg-0 img-text-container');

    var titleInfoContainerDiv = getArticleTitleInfoContainer(data);
    $(innerContainerDiv).append(titleInfoContainerDiv);

    var titleText = $(elem('h5')).addClass('mb-4 content-title').text(data.title);
    $(innerContainerDiv).append(titleText);

    var articleImage = $(elem('img')).addClass('float-end imgshadow m-2');
    $(innerContainerDiv).append(articleImage);
    $(articleImage).attr('src', data.image).attr('alt', 'Image not found!');
    $(articleImage).attr('style', `max-width:${data.image_width}; max-height:${data.image_height};`);

    var articleInfo = $(elem('p')).addClass('card-text mb-4 pt-4').html(data.description);
    $(innerContainerDiv).append(articleInfo);

    var footerInfoContainerDiv = getArticleFooterInfoContainer(data);
    $(innerContainerDiv).append(footerInfoContainerDiv);

    return innerContainerDiv;
}

function getArticleTitleInfoContainer(data) {

    var titleInfoContainerDiv = $(elem('div')).addClass('row mb-4 container-title-info');

    var typeContainerDiv = $(elem('div')).addClass('col-sm-6 mb-3')
    $(titleInfoContainerDiv).append(typeContainerDiv);

    var typeDiv = $(elem('div')).addClass('container-info-label');
    $(typeContainerDiv).append(typeDiv);

    var typeIcon = $(elem('i')).addClass('bi bi bi-arrow-right-square-fill');
    $(typeDiv).append(typeIcon);

    var typeLabel = $(elem('span')).text(' Type');
    $(typeDiv).append(typeLabel);

    var typeText = $(elem('span')).addClass('container-info-content').text(data.topic);
    $(typeContainerDiv).append(typeText);


    var dateContainerDiv = $(elem('div')).addClass('col-sm-6');
    $(titleInfoContainerDiv).append(dateContainerDiv);

    var dateDiv = $(elem('div')).addClass('container-info-label');
    $(dateContainerDiv).append(dateDiv);

    var dateIcon = $(elem('i')).addClass('bi bi bi-calendar3');
    $(dateDiv).append(dateIcon);

    var dateLabel = $(elem('span')).text(' Date');
    $(dateDiv).append(dateLabel);

    var dateText = $(elem('span')).addClass('container-info-content').text(data.date);
    $(dateContainerDiv).append(dateText);

    return titleInfoContainerDiv;
}

function getArticleFooterInfoContainer(data) {

    var footerInfoContainerDiv = $(elem('div')).addClass('row mb-4 container-title-info');

    var writerContainerDiv = $(elem('div')).addClass('col-sm-6 mb-3');
    $(footerInfoContainerDiv).append(writerContainerDiv);

    var writerDiv = $(elem('div')).addClass('container-info-label');
    $(writerContainerDiv).append(writerDiv);

    var writerIcon = $(elem('i')).addClass('bi bi-info-square');
    $(writerDiv).append(writerIcon);

    var writerLabel = $(elem('span')).text(' Writer');
    $(writerDiv).append(writerLabel);

    var writerText = $(elem('span')).addClass('container-info-content').text(data.writer);
    $(writerContainerDiv).append(writerText);

    var writerLink = $(elem('a')).attr('href', data.weblink).attr('target', `_blank`).addClass('content-link').text('Read');
    $(writerContainerDiv).append(writerLink);

    return footerInfoContainerDiv;
}
