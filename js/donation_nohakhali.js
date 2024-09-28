document.getElementById('btn-donation').addEventListener('click', function(event){
    event.preventDefault();
    const donationNohakhali= document.getElementById('donation_nohakhali').value;
    const donationNumber= parseFloat(donationNohakhali);
    const balance= document.getElementById('balance').innerText;
        const balanceNumber= parseFloat(balance);
    
    if(isNaN(donationNumber)){
        alert('Failed to cash out.');
        return;
    }
    else if (donationNumber > balanceNumber) {
        alert('You do not have enough money to Donation');
             return;
    } 
    else{
        const newbalance = balanceNumber- donationNumber  ;
     document.getElementById('balance').innerText= newbalance;

     const date = new Date();
    const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });

     const p = document.createElement('p');
     p.innerText = ` ${newbalance} Taka Is Donated for famine -2024 at Nohakhali ,Bangladesh `;
     const span=document.createElement('span');
     span.innerText = ` ${formattedDate} `;

      document.getElementById('Donation-container').appendChild(p);
      document.getElementById('Donation-container').appendChild(span);
    }

})