document.getElementById('btn-donation2').addEventListener('click', function(event){
    event.preventDefault();
    const donationfeni= document.getElementById('donation_feni').value;
    const donationNumber2= parseFloat(donationfeni);
    const balance= document.getElementById('balance').innerText;
        const balanceNumber= parseFloat(balance);
    
    if(isNaN(donationNumber2)){
        alert('Failed to cash out.');
        return;
    }
    else if (donationNumber2 > balanceNumber) {
        alert('You do not have enough money to Donation');
             return;
    } 
    else{
        const newbalance = balanceNumber- donationNumber2  ;
     document.getElementById('balance').innerText= newbalance;

     const date = new Date();
     const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
     const p = document.createElement('p');
     p.innerText = ` ${newbalance} Taka Is Donated for famine -2024 at Feni ,Bangladesh `;
     const span=document.createElement('span');
     span.innerText = ` ${formattedDate} `;
      document.getElementById('Donation-container').appendChild(p);
      document.getElementById('Donation-container').appendChild(span);
    }


    
})