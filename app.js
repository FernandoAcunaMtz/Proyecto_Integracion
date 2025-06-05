document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeApp();
        loadModals();
        setupEventListeners();
        displayWelcomeMessage();
    } catch (error) {
        console.error('App initialization error:', error);
        reportError(error);
    }
});

function initializeApp() {
    try {
        console.log('Inicializando Campus Virtual LMS...');
        
        const dashboardContent = Dashboard();
        const dashboardSection = document.getElementById('dashboard');
        
        if (dashboardSection && !dashboardSection.querySelector('.notices-section')) {
            dashboardSection.innerHTML += dashboardContent;
        }
        
        updateUserInfo();
        checkNotifications();
        
    } catch (error) {
        console.error('Initialize app error:', error);
        reportError(error);
    }
}

function loadModals() {
    try {
        const modalsContainer = document.getElementById('modals-container');
        if (modalsContainer) {
            modalsContainer.innerHTML = Modals();
        }
    } catch (error) {
        console.error('Load modals error:', error);
        reportError(error);
    }
}

function setupEventListeners() {
    try {
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', function() {
                addPulseAnimation(this);
            });
        });
        
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }
    } catch (error) {
        console.error('Setup event listeners error:', error);
        reportError(error);
    }
}

function updateUserInfo() {
    try {
        const userInfo = {
            name: 'Juan Pérez',
            role: 'Estudiante',
            avatar: 'https://via.placeholder.com/32x32/28a745/ffffff?text=JD'
        };
        
        console.log(`Usuario activo: ${userInfo.name} - ${userInfo.role}`);
    } catch (error) {
        console.error('Update user info error:', error);
        reportError(error);
    }
}

function checkNotifications() {
    try {
        const notificationCount = 3;
        const badge = document.querySelector('.badge.bg-danger');
        
        if (badge) {
            badge.textContent = notificationCount;
            if (notificationCount > 0) {
                addPulseAnimation(badge);
            }
        }
    } catch (error) {
        console.error('Check notifications error:', error);
        reportError(error);
    }
}

function displayWelcomeMessage() {
    try {
        setTimeout(() => {
            console.log('¡Bienvenido al Campus Virtual! Plataforma LMS cargada exitosamente.');
        }, 1000);
    } catch (error) {
        console.error('Display welcome message error:', error);
        reportError(error);
    }
}
