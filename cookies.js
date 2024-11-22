// Function to check if the user has accepted cookies
function checkCookieConsent() {
    if (!getCookie('cookieConsent')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}

// Function to accept cookies and store consent
function acceptCookies() {
    document.cookie = "cookieConsent=true; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    document.getElementById('cookie-banner').style.display = 'none';
}

// Function to get the value of a specific cookie
function getCookie(name) {
    let cookieArray = document.cookie.split(';');
    for (let cookie of cookieArray) {
        let [key, value] = cookie.trim().split('=');
        if (key === name) return value;
    }
    return null;
}

// Call checkCookieConsent function on page load
window.onload = checkCookieConsent;
