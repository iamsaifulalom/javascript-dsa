// rotateBanners.js
// Rotates banners every 3 seconds

const banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];

function rotateBanner() {
  const currentBanner = banners.shift(); // remove first
  banners.push(currentBanner);           // add to end
  console.log("Current Banner:", banners[0]);
}

// Rotate every 3 seconds
setInterval(rotateBanner, 3000);
