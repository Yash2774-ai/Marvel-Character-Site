function showDetails(id) {
  const allDetails = document.querySelectorAll('.details');
  allDetails.forEach(detail => {
    if (detail.id === id) {
      detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
    } else {
      detail.style.display = 'none';
    }
  });
}
