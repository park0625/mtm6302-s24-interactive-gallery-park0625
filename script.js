// array of images
const images = [
  {
    thumb: 'images/jonas-degener-XOi7-8Q0qPs-unsplash.jpg',
    hd: 'images/jonas-degener-XOi7-8Q0qPs-unsplash.jpg',
    caption: 'Beautiful Sunset'
  },
  {
    thumb: 'images/hyory-liu-Gb4pnnlVRxk-unsplash.jpg',
    hd: 'images/hyory-liu-Gb4pnnlVRxk-unsplash.jpg',
    caption: 'City skyline at night'
  },
  {
    thumb: 'images/jonas-degener-g-0FImSFWXk-unsplash.jpg',
    hd: 'images/jonas-degener-g-0FImSFWXk-unsplash.jpg',
    caption: 'waterfall'
  },
   {
    thumb: 'images/linus-belanger-uJRGDFYeA_I-unsplash.jpg',
    hd: 'images/linus-belanger-uJRGDFYeA_I-unsplash.jpg',
    caption: 'Vintage car in the city'
  },
  {
    thumb: 'images/ekaterina-bogdan-RF1_FoWbnzQ-unsplash.jpg',
    hd: 'images/ekaterina-bogdan-RF1_FoWbnzQ-unsplash.jpg',
    caption: 'Boats on a serene lake'
  },
  {
    thumb: 'images/slava-auchynnikau-78qSZ56GqJM-unsplash.jpg',
    hd: 'images/slava-auchynnikau-78qSZ56GqJM-unsplash.jpg',
    caption: 'Zebras in the savannah'
  },
  {
    thumb: 'images/yunus-tug-jSDGLSpa23o-unsplash.jpg',
    hd: 'images/yunus-tug-jSDGLSpa23o-unsplash.jpg',
    caption: 'Rare rocks'
  },
   {
    thumb: 'images/lawrence-krowdeed-yOwMYGlJR5k-unsplash.jpg',
    hd: 'images/lawrence-krowdeed-yOwMYGlJR5k-unsplash.jpg',
    caption: 'Summer concert'
  },
    {
    thumb: 'images/valentin-YGMuJeLFvXo-unsplash.jpg',
    hd: 'images/valentin-YGMuJeLFvXo-unsplash.jpg',
    caption: 'Bear swimming'
  },
  {
    thumb: 'images/yishen-ji-25NlczDm414-unsplash.jpg',
    hd: 'images/yishen-ji-25NlczDm414-unsplash.jpg',
    caption: 'Photographer capturing the moment'
  },
  {
    thumb: 'images/colin-watts-UnbrEiHyuuo-unsplash.jpg',
    hd: 'images/colin-watts-UnbrEiHyuuo-unsplash.jpg',
    caption: 'Beautiful landscape with nature'
  },
    {
    thumb: 'images/neom-p8Xp5DWQpVc-unsplash.jpg',
    hd: 'images/neom-p8Xp5DWQpVc-unsplash.jpg',
    caption: 'Historian or archaeologist at work'
  },
   {
    thumb: 'images/neom--AFeVPw7lDU-unsplash.jpg',
    hd: 'images/neom--AFeVPw7lDU-unsplash.jpg',
    caption: 'Beautiful desert landscape with the horizon'
  },
   {
    thumb: 'images/neom-fNXY1xjZQYI-unsplash.jpg',
    hd: 'images/neom-fNXY1xjZQYI-unsplash.jpg',
    caption: 'Arab woman in traditional dress'
  },
   {
    thumb: 'images/chen-heng-WCYsk_wbc6s-unsplash.jpg',
    hd: 'images/chen-heng-WCYsk_wbc6s-unsplash.jpg',
    caption: 'City with skyscrapers'
  },
  {
    thumb: 'images/richard-stachmann-Hb3tP5DoA0I-unsplash.jpg',
    hd: 'images/richard-stachmann-Hb3tP5DoA0I-unsplash.jpg',
    caption: 'Train night ride'
  },
   {
    thumb: 'images/lawrence-krowdeed-9OK8YPcZyK4-unsplash.jpg',
    hd: 'images/lawrence-krowdeed-9OK8YPcZyK4-unsplash.jpg',
    caption: 'Beach day with friends'
  },
];

// gallery section and modal
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');

// adding to the gallery
images.forEach((img, index) => {
  const imageEl = document.createElement('img');
  imageEl.src = img.thumb;
  imageEl.alt = img.caption;
  imageEl.dataset.index = index;
  imageEl.dataset.hd = img.hd;
  imageEl.dataset.caption = img.caption;
  gallery.appendChild(imageEl);
});

//  event delegation for clicks
gallery.addEventListener('click', function(e) {
  const target = e.target;
  if (target.tagName === 'IMG') {
    modalImg.src = target.dataset.hd;
    modalCaption.textContent = target.dataset.caption;
    modal.classList.remove('hidden');
  }
});

//  hiding the modal on click
modal.addEventListener('click', function() {
  modal.classList.add('hidden');
});