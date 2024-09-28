document.getElementById('btn-donation3').addEventListener('click', function(event){
    event.preventDefault();
    const donationAid= document.getElementById('donation_aid').value;
    const donationNumber3= parseFloat(donationAid);
    const balance= document.getElementById('balance').innerText;
        const balanceNumber= parseFloat(balance);
    
    if(isNaN(donationNumber3)){
        alert('Failed to cash out.');
        return;
    }
    else if (donationNumber3 > balanceNumber) {
        alert('You do not have enough money to Donation');
             return;
    } 
    else{
        const newbalance = balanceNumber- donationNumber3  ;
     document.getElementById('balance').innerText= newbalance;
     const date = new Date();
     const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
     const p = document.createElement('p');
     p.innerText = ` ${newbalance} Taka Is Donated for famine -2024 at aid ,Bangladesh `;
     const span=document.createElement('span');
     span.innerText = ` ${formattedDate} `;
      document.getElementById('Donation-container').appendChild(p);
      document.getElementById('Donation-container').appendChild(span);
    }


    
})