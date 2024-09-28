function showSectionById(id){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation').classList.add('hidden');
   
    
   
    document.getElementById(id).classList.remove('hidden');
}