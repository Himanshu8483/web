
// async function Fees() {
//   let rollNo = document.getElementById("rollNo").value;
//   studentClass = document.getElementById("class").value;
//   let section = document.getElementById("section").value;

//   if (!rollNo || !studentClass || !section) {
//     alert("Please fill all fields!");
//     return false;
//   }

//   try {
//     // Fetch JSON data
//     const response = await fetch("fees.json");
//     const data = await response.json();
//     fees = data[studentClass];

//     // Check if fees exist for the selected class
//     if (fees) {
//       const resultDiv = document.getElementById("result");
//       resultDiv.innerHTML = `
//         <h3>Fee Details for Roll No: ${rollNo}</h3>
//         <p>Tuition Fee: ₹${fees["Tuition Fee"]}</p>
//         <p>Miscellaneous Fee: ₹${fees["Miscellaneous Fee"]}</p>
//         <p>Exam Fee: ₹${fees["Exam Fee"]}</p>
//         <h4>Total Fee: ₹${fees["Tuition Fee"] + fees["Miscellaneous Fee"] + fees["Exam Fee"]}</h4>
//       `;

//       // Show the "Pay Now" button
//       document.getElementById("payButton").style.display = "block";
//     } else {
//       alert("Fees not found for the selected class.");
//     }
//   } catch (error) {
//     console.error("Error fetching fees:", error);
//     alert("Unable to fetch fees. Please try again later.");
//   }
// }

// function payFees() {
//   // Prevent duplicate payments
//   if (!fees || isPaid) {
//     alert("Fees already paid or no fees to pay.");
//     return;
//   }

//   // Simulate payment success
//   isPaid = true;

// //   // Display payment confirmation
// //   const paymentStatus = document.getElementById("paymentStatus");
// //   paymentStatus.innerHTML = `
// //     <h3>Payment Successful!</h3>
// //     <p>Total Fee Paid: ₹${fees["Tuition Fee"] + fees["Miscellaneous Fee"] + fees["Exam Fee"]}</p>
// //     <p>Status: Paid</p>
// //   `;

// //   // Hide "Pay Now" button after payment
// //   document.getElementById("payButton").style.display = "none";
// // }
        
// const data = {
//   Fees: {
//     "9th": { Tuition: 5000, Library: 1500, Exam: 800 },
//     "10th": { Tuition: 6000, Library: 2000, Exam: 1000 },
//     "11th": { Tuition: 7000, Library: 2500, Exam: 1200 },
//     "12th": { Tuition: 8000, Library: 3000, Exam: 1500 }
//   },
//   Students: [
//     { Name: "Himanshu", Roll: "1234", Class: "12th" },
//     { Name: "Jatin", Roll: "4321", Class: "10th" },
//     { Name: "Yash", Roll: "1243", Class: "9th" },
//     { Name: "Vijay", Roll: "3412", Class: "11th" }
//   ]
// };
// // Get fee details of a class
// function getFee(className) {
//   return data.Fees[className] || "Class not found";
// }

// // Get student details by name
// function getStudent(name) {
//   return data.Students.find(s => s.Name === name) || "Student not found";
// }

// // Example Usage
// console.log(getFee("12th"));      // Fees for class 12th
// console.log(getStudent("Himanshu")); // Details of Himanshu


fetch("db.json")
  .then(response => response.json())  // Convert to JavaScript object
  .then(db => {
    console.log(db);  // Print full JSON data
    console.log(db.Fees["12th"]);  // Print fee details of class 12th
    console.log(db.Fees["11th"]);  // Print fee details of class 12th
    console.log(db.Students["Name"]);  // Print fee details of class 12th
    console.log(db.Students["Name"]);  // Print fee details of class 12th
  })
  .catch(error => console.error("Error loading JSON:", error));
  // const jsonData = `{
  //   "Fees": {
  //     "9th": { "Tuition": 5000, "Library": 1500, "Exam": 800 },
  //     "10th": { "Tuition": 6000, "Library": 2000, "Exam": 1000 },
  //     "11th": { "Tuition": 7000, "Library": 2500, "Exam": 1200 },
  //     "12th": { "Tuition": 8000, "Library": 3000, "Exam": 1500 }
  //   },
  //   "Students": [
  //     { "Name": "Himanshu", "Roll": "1234", "Class": "12th" }
  //   ]
  // }`;
  
  // const data = JSON.parse(jsonData);  // Convert to JavaScript object
  // console.log(data.Fees["12th"]); // ✅ Working!
  