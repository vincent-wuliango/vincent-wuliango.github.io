console.log('Happy developing ✨')

const CONFIG = {
    baseUrl: 'https://vincent-wuliango.github.io',
    username: 'Vincent Wuliango'
}

function navigateToProject(projectName) {
    window.location.href = `${CONFIG.baseUrl}/${projectName}/`;
}

// --- Page Transition Logic ---

// 1. On Page Load: Fade out the curtain
window.addEventListener('load', () => {
    const overlay = document.querySelector('.transition-overlay');
    overlay.classList.add('hidden');
});

// 2. Handle links to ensure animation plays BEFORE leaving
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetUrl = link.href;

        // Only animate if it's an internal link (not a # anchor)
        if (targetUrl && !targetUrl.includes('#')) {
            e.preventDefault(); // Stop immediate jump

            const overlay = document.querySelector('.transition-overlay');
            overlay.classList.remove('hidden'); // Fade to black

            // Wait 500ms (matching the CSS transition) then go
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        }
    });
});