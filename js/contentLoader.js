
function commonContentLoaders() {
    loadResources();
    loadFooterContent();
}

function loadResources() {
    $.ajax({
        url: 'content/content-resources.html',
        type: 'GET',
        success: function (data) {
            $('head').append(data);
        },
        error: function (error) {
            alert(`An error occurred while getting resources: ${error}`);
        }
    });
}

function loadFooterContent() {
    $.ajax({
        url: 'content/content-footer.html',
        type: 'GET',
        success: function (data) {
            $('#container-index-footer').html(data);
        },
        error: function (error) {
            alert(`An error occurred while getting footer: ${error}`);
        }
    });
}

function loadMenuContent(menuName, additionalMenuMethodCall) {
    $.ajax({
        url: 'content/content-menu.html',
        type: 'GET',
        success: function (data) {
            $('#menu-bar').html(data).ready(function () {
                setupMenuContent(menuName, additionalMenuMethodCall);
            })
        },
        error: function (error) {
            alert(`An error occurred while getting menu: ${error}`);
        }
    });
}

function setupMenuContent(menuName, additionalMenuMethodCall) {
    // Highlight selected menu
    $(`#menu-name-${menuName}`).addClass('active');

    if (!(additionalMenuMethodCall === undefined))
        additionalMenuMethodCall();
}

function loadNewArticleContent() {
    $.ajax({
        url: 'content/content-menu-post-article.html',
        type: 'GET',
        success: function (data) {
            $('#navbarSupportedContent').append(data);
        },
        error: function (error) {
            alert(`An error occurred while getting menu: ${error}`);
        }
    });
}

function loadNewEventContent() {
    $.ajax({
        url: 'content/content-menu-post-event.html',
        type: 'GET',
        success: function (data) {
            $('#navbarSupportedContent').append(data);
        },
        error: function (error) {
            alert(`An error occurred while getting menu: ${error}`);
        }
    });
}