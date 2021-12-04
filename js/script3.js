const moreContent16 = document.querySelector(".hide-16");
const seeMoreBtn16 = document.querySelector(".see-more-16");
moreContent16.style.display = "none";
seeMoreBtn16.addEventListener('click', () => {

    if (seeMoreBtn16.innerHTML === 'see more') {
        seeMoreBtn16.innerHTML = 'see less';
        moreContent16.style.display = "inline";
    }
    else {
        seeMoreBtn16.innerHTML = 'see more';
        moreContent16.style.display = "none";
    }
});
