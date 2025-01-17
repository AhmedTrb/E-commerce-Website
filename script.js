function startCounter(targetElement, targetNumber, duration) {
    let startTime;
    const counterElement = document.getElementById(targetElement);

    function updateCounter(timestamp) {
        if (!startTime) startTime = timestamp;

        const progress = timestamp - startTime;
        const increment = (targetNumber / duration) * (progress / 1000);

        counterElement.innerText = Math.floor(increment) + '+';

        if (increment < targetNumber) {
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.innerText = targetNumber + '+';
        }
    }

    requestAnimationFrame(updateCounter);
}

// Trigger the counters when the window is loaded
window.onload = function() {
    // Set the target number and duration for each counter
    const counter1Config = { element: 'counter1', targetNumber: 200, duration: 3 };
    const counter2Config = { element: 'counter2', targetNumber: 2000, duration: 3 };
    const counter3Config = { element: 'counter3', targetNumber: 30000, duration: 3 };

    // Start the counters
    startCounter(counter1Config.element, counter1Config.targetNumber, counter1Config.duration);
    startCounter(counter2Config.element, counter2Config.targetNumber, counter2Config.duration);
    startCounter(counter3Config.element, counter3Config.targetNumber, counter3Config.duration);
};


document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.getElementsById('fade');
    contentElement.style.opacity = '1';
});