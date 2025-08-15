document.getElementById("bucket").addEventListener("drop", (e) => {
  e.preventDefault();
  const appleId = e.dataTransfer.getData("text/plain");
  const apple = document.getElementById(appleId);
  apple.src = "/assets/apple.png";
  if (apple && e.target.children.length < groupSize) {
    e.target.appendChild(apple);
    if (e.target.children.length === groupSize) {
      groupCount++;
      updateCounter();
      // Optional: Create a new bucket for the next group
      const newBucket = document.createElement("div");
      newBucket.className = "bucket";
      newBucket.style.border = "2px dashed black";
      newBucket.style.margin = "20px";
      document.body.appendChild(newBucket);
      setupBucketEvents(newBucket);
    }
  } else {
    alert(`Groups of ${groupSize} only!`);
  }
});
