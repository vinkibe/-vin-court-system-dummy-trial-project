document.addEventListener('DOMContentLoaded', function() {
    const caseIdElement = document.getElementById('case-id');
    const caseDetailsElement = document.getElementById('case-details');
  
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('case');
    const caseDetails = urlParams.get('details');
  
    if (caseId && caseDetails) {
      caseIdElement.textContent = `Case ID: ${caseId}`;
      caseDetailsElement.textContent = caseDetails;
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const addCaseBtn = document.getElementById('add-case-btn');
    const overlay = document.querySelector('.overlay');
    const caseDetailsPopup = document.querySelector('.case-details-popup');
    const closeBtn = document.querySelector('.close-btn');
    const caseContainer = document.querySelector('.case-container');
    const caseForm = document.getElementById('case-form');
  
    addCaseBtn.addEventListener('click', function() {
      overlay.style.display = 'block';
      caseDetailsPopup.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      overlay.style.display = 'none';
      caseDetailsPopup.style.display = 'none';
    });
  
    caseForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the input values from the form
      const caseName = document.getElementById('case-name').value;
      const caseDetails = document.getElementById('case-details').value;
  
      // Create a new case element
      const newCase = document.createElement('div');
      newCase.classList.add('case');
      newCase.innerHTML = `
        <input type="button" value="View Details" class="view-details-btn" onclick="openCaseDetails('${caseName}', '${caseDetails}')">
        <h2>Case ID: ${caseName}</h2>
        <p>${caseDetails}</p>
      `;
  
      // Append the new case to the case container
      caseContainer.appendChild(newCase);
  
      // Reset the form inputs
      caseForm.reset();
  
      // Close the popup
      overlay.style.display = 'none';
      caseDetailsPopup.style.display = 'none';
    });
  });
  
  function openCaseDetails(caseId, caseDetails) {
    window.location.href = `case-details.html?case=${caseId}&details=${encodeURIComponent(caseDetails)}`;
  }
  