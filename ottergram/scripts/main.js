const detailImageSelector = '[data-image-role="target"]';
const detailTitleSelector = '[data-image-role="title"]';
const thumbnailLinkSelector = '[data-image-role="trigger"]';
const hiddenDetailClass = "hidden-detail";
const escKey = 27;

function setDetails(imageUrl, titleText) {
    let detailImage = document.querySelector(detailImageSelector);
    detailImage.setAttribute('src', imageUrl);

    let detailTitle = document.querySelector(detailTitleSelector);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
   return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
   return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    thumb.addEventListener('click', function (event) {
        console.log('you clicked');
        event.preventDefault();
        setDetailsFromThumb(thumb);
    })
}

function getThumbnailsArray() {
    let thumbnails = document.querySelectorAll(thumbnailLinkSelector);
    let thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails() {
    document.body.classList.add(hiddenDetailClass);
}

function addKeyPressHandler() {
    document.body.addEventListener('keyup', function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === escKey){
            hideDetails();
        }
    });
}

function initializeEvents() {
    let thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}


initializeEvents();
