document.getElementById('calculateBtn').addEventListener('click', calculateAge);

function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    if (!dob) {
        document.getElementById('result').innerHTML = 'Please enter a valid date of birth.';
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    const months = Math.abs(today.getMonth() - dob.getMonth());
    const days = Math.abs(today.getDate() - dob.getDate());
    
    // Display the result
    document.getElementById('result').innerHTML = `Age: ${age} years, ${months} months, ${days} days`;
}
