document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const tossButton = document.getElementById('tossButton');
    const coinImage = document.getElementById('coinImage');
    const resultText = document.getElementById('resultText');

    // Set an initial placeholder text/image
    resultText.textContent = "Click 'Toss Coin' to begin!";
    coinImage.src = ""; // Clear initial image (if any)

    // Add event listener to the button
    tossButton.addEventListener('click', () => {
        
        // 1. Generate a random integer from 0 to 99 (100 total possible numbers)
        // Math.random() gives 0 (inclusive) to 1 (exclusive)
        // Math.floor(Math.random() * 100) gives 0 to 99
        const randomNumber = Math.floor(Math.random() * 100);

        let result;
        let imageSrc;
        
        // 2. Apply Even/Odd logic using the Modulus operator (%)
        if (randomNumber % 2 === 0) {
            // Even number: Display Heads
            result = "Heads!";
            imageSrc = "heads.png"; // **IMPORTANT:** Replace with your Heads image path
        } else {
            // Odd number: Display Tails
            result = "Tails!";
            imageSrc = "tails.png"; // **IMPORTANT:** Replace with your Tails image path
        }
        
        // 3. Update the HTML elements
        coinImage.src = imageSrc;
        resultText.textContent = `Result: ${result}`;

        console.log(`Random Number: ${randomNumber}. Result: ${result}`);
    });
});