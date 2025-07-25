<template>
    <div class="otp-input-container">
        <div class="otp-fields">
            <input type="text" maxlength="1" v-for="n in 4" :key="n" @input="handleInput($event, n)"
                @keydown="handleKeyDown($event, n)" :ref="el => { if (el) inputRefs.value.push(el) }"
                class="otp-field" />
        </div>
        <div class="resend-section">
            <input type="checkbox" id="remember" class="resend-checkbox" />
            <label for="remember" class="resend-label">Don't receive a code? <span @click="resendCode"
                    class="resend-link">Resend</span></label>
        </div>
        <button @click="continueVerification" class="continue-button">Continue</button>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const otpDigits = reactive(Array(4).fill(''));
const inputRefs = ref([]);

onMounted(() => {
    if (inputRefs.value.length > 0) {
        inputRefs.value.shift()?.focus(); // Focus on the first input
    }
});

const handleInput = (event, index) => {
    const value = event.target.value;
    if (value.length > 1) {
        event.target.value = value.charAt(0);
    }
    otpDigits.splice(index - 1, 1, event.target.value);

    if (event.target.value && index < 4) {
        inputRefs.value.splice(index).shift()?.focus();
    }
};

const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otpDigits.at(index - 1) && index > 1) {
        inputRefs.value.splice(index - 2).shift()?.focus();
    }
    if (!/^\d$/.test(event.key) && event.key !== 'Backspace' && !event.ctrlKey && !event.metaKey && !event.altKey && !['ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) {
        event.preventDefault();
    }
};

const continueVerification = () => {
    const fullOtp = otpDigits.join('');
    if (fullOtp.length === 4 && /^\d{4}$/.test(fullOtp)) {
        alert('OTP submitted: ' + fullOtp);
        // Verification logic here
    } else {
        alert('Please enter the 4-digit code.');
    }
};

const resendCode = () => {
    alert('Resending code...');
    // Resend code logic here
};
</script>

<style scoped>
.otp-input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px;
    background-color: white;
    /* Assuming a white background */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    max-width: 300px;
    margin: 30px auto;
    text-align: center;
}

.otp-fields {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.otp-field {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 20px;
    text-align: center;
    outline: none;
    transition: border-color 0.3s ease;
}

.otp-field:focus {
    border-color: #daa520;
    /* Goldenrod color for focus */
    box-shadow: 0 0 0 2px rgba(218, 165, 32, 0.2);
}

.resend-section {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.resend-checkbox {
    width: 18px;
    height: 18px;
}

.resend-label {
    font-size: 14px;
    color: #666;
    user-select: none;
    /* Prevent text selection on click */
}

.resend-link {
    color: #daa520;
    cursor: pointer;
    text-decoration: none;
}

.resend-link:hover {
    text-decoration: underline;
}

.continue-button {
    background-color: #daa520;
    /* Goldenrod color for button */
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 25px;
    /* Rounded button */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.continue-button:hover {
    background-color: #b8860b;
    /* Darker goldenrod on hover */
}
</style>