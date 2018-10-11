
  var config = {
    apiKey: "AIzaSyB6SVpfhD5L5elmCdH_5bSauaxEIRTttKU",
    authDomain: "jahanlaundry-6c4c0.firebaseapp.com",
    databaseURL: "https://jahanlaundry-6c4c0.firebaseio.com",
    projectId: "jahanlaundry-6c4c0",
    storageBucket: "",
    messagingSenderId: "222307436962"
  };
  firebase.initializeApp(config);


var OrdersRef = firebase.database().ref('Orders');




document.getElementById('orderForm').addEventListener('submit', submitForm);


function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var number = getInputVal('number');
  var product = getInputVal('product');


  // Save message
  saveMessage(name, number, product);



  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },7000);

  // Clear form
  document.getElementById('orderForm').reset();




  }
  function getInputVal(id) {
    // body...
    return document.getElementById(id).value;
  }

  function saveMessage(name, number, product){
  var newMessageRef = OrdersRef.push();
  newMessageRef.set({
    name: name,
   number: number,
   product: product
  });
}
function myfunc(){

var a = document.getElementById("number").value;
    
     if(a.length()!=11){
          alert(" not valid ");
    }
  

}