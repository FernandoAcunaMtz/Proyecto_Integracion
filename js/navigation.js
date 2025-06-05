document.addEventListener('DOMContentLoaded', function() {
    try {
        const navLinks = document.querySelectorAll('.nav-link');
        const contentSections = document.querySelectorAll('.content-section');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                
                navLinks.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                contentSections.forEach(section => section.classList.remove('active'));
                
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                    loadSectionContent(targetId);
                }
                
                const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('sidebarMenu'));
                if (offcanvas) {
                    offcanvas.hide();
                }
            });
        });

        loadSectionContent('dashboard');
        
    } catch (error) {
        console.error('Navigation error:', error);
        reportError(error);
    }
});

function loadSectionContent(sectionId) {
    try {
        const container = document.getElementById(`${sectionId}-container`) || 
                         document.getElementById(sectionId).querySelector('.container');
        
        if (!container) return;

        let content = '';
        switch(sectionId) {
            case 'dashboard':
                content = Dashboard();
                break;
            case 'courses':
                content = Courses();
                break;
            case 'calendar':
                content = Calendar();
                break;
            case 'schedule':
                content = Schedule();
                break;
            case 'cultural':
                content = Cultural();
                break;
            case 'administration':
                content = Administration();
                break;
            case 'contact':
                content = Contact();
                break;
        }

        if (sectionId === 'dashboard') {
            const dashboardSection = document.getElementById('dashboard');
            const existingContent = dashboardSection.querySelector('.notices-section');
            if (!existingContent) {
                dashboardSection.innerHTML += content;
            }
        } else if (container && content) {
            container.innerHTML = content;
        }
    } catch (error) {
        console.error('Load section content error:', error);
        reportError(error);
    }
}
