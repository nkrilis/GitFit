const updateFormHandler = async (event) => {

    event.preventDefault();
  
    const age = document.querySelector('#age').value.trim();
    const height = document.querySelector("#height").value.trim();
    const weight = document.querySelector("#weight").value.trim();
    const category_id = document.querySelector("#category").value;
  
    if (age && height && weight && category_id) {
      const response = await fetch('/api/users/update', {
        method: "PUT",
        body: JSON.stringify({
          height,
          weight,
          age,
          category_id,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } 
      else 
      {
        alert(`Failed to Update, please try again.`);
      }
    }
  };
  

  document
  .querySelector('.form')
  .addEventListener('submit', updateFormHandler);
  
  