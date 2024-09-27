document.getElementById("generateTrends").addEventListener("click", function() {
  // Simulate fetching trend insights
  let trendingList = document.getElementById("trendingList");
  trendingList.innerHTML = "<li>Trending Keyword 1</li><li>Trending Keyword 2</li>";
});

document.getElementById("updateThumbnail").addEventListener("click", function() {
  let canvas = document.getElementById("thumbnailCanvas");
  let context = canvas.getContext("2d");

  // Basic thumbnail background
  context.fillStyle = "#ccc";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Adding text to thumbnail
  let textOverlay = document.getElementById("textOverlay").value;
  context.fillStyle = "#000";
  context.font = "30px Arial";
  context.fillText(textOverlay, 50, 100);
});

document.getElementById("downloadThumbnail").addEventListener("click", function() {
  let canvas = document.getElementById("thumbnailCanvas");
  let link = document.createElement('a');
  link.download = 'thumbnail.png';
  link.href = canvas.toDataURL();
  link.click();
});
