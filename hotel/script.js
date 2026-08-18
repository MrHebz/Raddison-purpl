const checkinInput = document.getElementById('checkin');
        const checkoutInput = document.getElementById('checkout');

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        checkinInput.value = today.toISOString().split('T')[0];
        checkoutInput.value = tomorrow.toISOString().split('T')[0];

        // Ensure Check-out cannot be before Check-in
        checkinInput.addEventListener('change', () => {
            if (checkinInput.value >= checkoutInput.value) {
                const nextDay = new Date(checkinInput.value);
                nextDay.setDate(nextDay.getDate() + 1);
                checkoutInput.value = nextDay.toISOString().split('T')[0];
            }
        });

        // Form Submission Logic
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const dest = document.getElementById('destination').value;
            const checkin = checkinInput.value;
            const checkout = checkoutInput.value;
            const guests = document.getElementById('guests').value;

            alert(`Searching availability at Radisson Purpl ${dest}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}`);
        });

        // Quick Book Selection
        function selectDestination(name) {
            document.getElementById('destination').value = name;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }