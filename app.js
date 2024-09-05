document.getElementById('calculate-button').addEventListener('click', function() {
    
    let age = parseInt(document.getElementById('age').value, 10);
    let weightPounds = parseInt(document.getElementById('weight').value, 10);
    let heightFeet = parseInt(document.getElementById('height-feet').value, 10);
    let heightInches = parseInt(document.getElementById('height-inches').value, 10);

    if (!age || age < 2 || age > 120) {
        alert('Please enter a valid age between 2 and 120.');
        return;
    }
    if (!weightPounds || weightPounds <= 0) {
        alert('Please enter a valid weight.');
        return;
    }
    if (!heightFeet || heightFeet < 0 || !heightInches || heightInches < 0) {
        alert('Please enter valid height measurements.');
        return;
    }

    let totalInches = (heightFeet * 12) + heightInches;
    let heightMeters = totalInches * 0.0254;

    let weightKilograms = weightPounds * 0.453592;

    let bmi = weightKilograms / (heightMeters * heightMeters);
    bmi = bmi.toFixed(2); 

    document.getElementById('bmi-result').innerText = `Your BMI: ${bmi}`;

    let category = '';
    let message = '';
    if (bmi < 16) {
        category = 'Severe Thinness';
    } else if (bmi >= 16 && bmi < 17) {
        category = 'Moderate Thinness';
    } else if (bmi >= 17 && bmi < 18.5) {
        category = 'Mild Thinness';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
        message = 'Your weight is ideal.';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else if (bmi >= 30 && bmi < 35) {
        category = 'Obese Class I';
    } else if (bmi >= 35 && bmi < 40) {
        category = 'Obese Class II';
    } else {
        category = 'Obese Class III';
    }
    
    document.getElementById('bmi-category').innerText = `Category: ${category} ${message}`;
});

document.getElementById('clear-button').addEventListener('click', function() {
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('height-feet').value = '';
    document.getElementById('height-inches').value = '';
    document.getElementById('bmi-result').innerText = 'Your BMI: ';
    document.getElementById('bmi-category').innerText = 'Category: ';
});
