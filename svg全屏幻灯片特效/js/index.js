const titles = [
    {
        image: 'img/1.jpg',
        thumb: 'img/1-thumb.jpg',
        title: 'Summer treads on <br /> the heels of spring.',
        nextTitle: 'Blue <br />Mountains'
    },
    {
        image: 'img/2.jpg',
        thumb: 'img/2-thumb.jpg',
        title: 'Jellyfish make <br />everything better.',
        nextTitle: 'Squishy <br />Jelllies'
    },
    {
        image: 'img/3.jpg',
        thumb: 'img/3-thumb.jpg',
        title: 'Design adds value <br /> faster than it adds costs',
        nextTitle: 'Paper <br />Cut'
    }
]
let activeIndex = 0;
const nextButton = document.querySelector('.next-tile');
updateTileRatio();
populateInitailData();
nextButton.addEventListener('click', nextTile)

// 填充初始数据
function populateInitailData() {
    const tileImages = document.querySelectorAll('.tile_img')
    tileImages[0].src = '${tiles[activeIndex].image}';
    tileImages[1].src = '${tiles[getNextIndex()].image}';

    const tileTitles = document.querySelectorAll('.title_text');
    tileTitles[0].innerHTML = tiles[activeIndex].title;
    tileTitles[1].innerHTML = tiles[getNextIndex()].title;

    const nextButtonImages = document.querySelectorAll('.next-tile_preview_img');
    nextButtonImages[0].src = '${tiles[getNextIndex()].thumb}';
    nextButtonImages[1].src = '${tiles[getNextIndex(1)].thumb}';

    const nextButtonTiles = document.querySelectorAll('.next-tile_title_text');
    nextButtonTiles[0].innerHTML = tiles[getNextIndex()].nextTitle;
    nextButtonTiles[1].innerHTML = tiles[getNextIndex(1)].nextTitle;
}

// 设置平铺图像比率
function updateTileRatio() {
    const browserWidth = document.body.clientWidth;
    const browserHeight = document.body.clientHeight;
    const browserRatio = browserWidth / browserHeight
    const imageWidth = 3000;
    const imageHeight = 2000;
    const imageRatio = imageWidth / imageHeight;
    const titleImages = document.querySelectorAll('.tile_img')
}

