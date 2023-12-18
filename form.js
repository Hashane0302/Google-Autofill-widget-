function copyShippingAddress() {
  // Get the values from billing address fields
  var billingStreet = document.getElementById('billing-street').value;
  var billingCity = document.getElementById('billing-city').value;
  var billingState = document.getElementById('billing-state').value;
  var billingZip = document.getElementById('billing-zip').value;
  var billingCountry = document.getElementById('billing-country').value;

  // Set the values to shipping address fields if checkbox is checked
  if (document.getElementById('myCheckbox').checked) {
      document.getElementById('shipping-street').value = billingStreet;
      document.getElementById('shipping-city').value = billingCity;
      document.getElementById('shipping-state').value = billingState;
      document.getElementById('shipping-zip').value = billingZip;
      document.getElementById('shipping-country').value = billingCountry;
  } else {
      // Clear shipping address fields if checkbox is unchecked
      document.getElementById('shipping-street').value = '';
      document.getElementById('shipping-city').value = '';
      document.getElementById('shipping-state').value = '';
      document.getElementById('shipping-zip').value = '';
      document.getElementById('shipping-country').value = '';
  }
}