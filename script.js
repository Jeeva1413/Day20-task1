
// Implementing the Fetch method to the PostalAPI

//Getting the elements by ID
const resultContainer = document.getElementById("result");
const searchBar = document.getElementById("search");
const button = document.getElementById("btn");
const result = document.getElementById("result");

//Adding Event listener to the  button
button.addEventListener("click", () => {
  //getting the value from the SearchBar
  const pincode = searchBar.value;
  //console.log(pincode);

  //Implementing the api call for the pincode
  if (pincode > 0) {
    //console.log("number");

    //API call for the Pincode if it is number
    const numberApi = fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    numberApi
      //changing the readable steam data to json
      .then((ele) => ele.json())

      //Handled the json data
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          //console.log(data[i].PostOffice[0]);

          //Appending the result div in html
          //Creating the card for the displaying the data from the Postal API
          resultContainer.innerHTML = `
            <div class="card mb-3">
            <div class="card-title "><h2>Postal Details</h2>
            </div>
            <div class="card-body">
            <div class="card-text"> 
            <P>Name : ${data[i].PostOffice[0].Name}</p>
            <p>Deliver Status : ${data[i].PostOffice[0].DeliveryStatus}</p>
            <p>Branch Type : ${data[i].PostOffice[0].BranchType}</p>
            <p>Circle : ${data[i].PostOffice[0].Circle}</p>
            <p>District : ${data[i].PostOffice[0].District}</p>
            <p>Division : ${data[i].PostOffice[0].Division}</p>
            <p>Region : ${data[i].PostOffice[0].Region}</p>
            <p>State : ${data[i].PostOffice[0].State}</p>
            <p>Country : ${data[i].PostOffice[0].Country}</p>
            </div>
            
            </div>
            </div>
            `;
        }
      })

      //Handling the error if it not valid pincode number
      .catch((err) => alert("Please enter valid pincode"));
  }

  //implementing the post office name API call
  else {
    // console.log("alphabet");

    const alphabetApi = fetch(
      `https://api.postalpincode.in/postoffice/${pincode}`
    );
    alphabetApi
      //changing the readable steam data to json
      .then((ele) => ele.json())

      //Handled the json data
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          //console.log(data[i].PostOffice.length);

          //getting all data from the post office array
          const innerLength = data[i].PostOffice.length;
          for (let j = 0; j < innerLength; j++) { 
            resultContainer.innerHTML += `
            <div class="card mb-3">
            <div class="card-title text-center"><h2>Postal Details</h2>
            </div>
            <div class="card-body">
            <div class="card-text"> 
            <P>Name : ${data[i].PostOffice[j].Name}</p>
            <P>Pincode : ${data[i].PostOffice[j].Pincode}</p>
            <p>Deliver Status : ${data[i].PostOffice[j].DeliveryStatus}</p>
            <p>Branch Type : ${data[i].PostOffice[j].BranchType}</p>
            <p>Circle : ${data[i].PostOffice[j].Circle}</p>
            <p>District : ${data[i].PostOffice[j].District}</p>
            <p>Division : ${data[i].PostOffice[j].Division}</p>
            <p>Region : ${data[i].PostOffice[j].Region}</p>
            <p>State : ${data[i].PostOffice[j].State}</p>
            <p>Country : ${data[i].PostOffice[j].Country}</p>
            </div>
            
            </div>
            </div>
            `;
          }
        }
      })

      //Handling the error if it not valid postal city name
      .catch((err) => alert("Please enter valid City Name"));
  }
});
