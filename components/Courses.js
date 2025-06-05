function Courses() {
    try {
        const coursesData = [
            {
                id: 1,
                name: "Matemáticas Avanzadas",
                professor: "Dr. Ana García",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
                description: "Curso de cálculo diferencial e integral aplicado a problemas reales.",
                pendingTasks: 3,
                announcements: 2,
                progress: 75,
                price: "$299",
                enrolled: true
            },
            {
                id: 2,
                name: "Programación Web",
                professor: "Ing. Carlos López",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
                description: "Desarrollo de aplicaciones web modernas con HTML, CSS y JavaScript.",
                pendingTasks: 1,
                announcements: 1,
                progress: 60,
                price: "$399",
                enrolled: true
            },
            {
                id: 3,
                name: "Base de Datos",
                professor: "Mtra. Laura Martínez",
                image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
                description: "Diseño y gestión de bases de datos relacionales y NoSQL.",
                pendingTasks: 2,
                announcements: 3,
                progress: 85,
                price: "$349",
                enrolled: true
            }
        ];

        const coursesHTML = coursesData.map(course => `
            <div class="col-lg-4 col-md-6 mb-4" data-name="course-card" data-file="components/Courses.js">
                <div class="card h-100">
                    <img src="${course.image}" class="card-img-top" alt="${course.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="card-title mb-0">${course.name}</h5>
                            <span class="course-price">${course.price}</span>
                        </div>
                        <p class="card-text flex-grow-1">${course.description}</p>
                        <div class="course-info mb-3">
                            <small class="text-muted d-block"><i class="fas fa-user me-1"></i>${course.professor}</small>
                            ${course.enrolled ? `
                                <div class="progress mt-2" style="height: 8px;">
                                    <div class="progress-bar bg-success" style="width: ${course.progress}%"></div>
                                </div>
                                <small class="text-muted">${course.progress}% completado</small>
                            ` : ''}
                        </div>
                        ${course.enrolled ? `
                            <div class="course-stats mb-3">
                                <div class="row text-center">
                                    <div class="col-4">
                                        <div class="badge bg-warning text-dark">${course.pendingTasks}</div>
                                        <small class="d-block">Tareas</small>
                                    </div>
                                    <div class="col-4">
                                        <div class="badge bg-info">${course.announcements}</div>
                                        <small class="d-block">Avisos</small>
                                    </div>
                                    <div class="col-4">
                                        <div class="badge bg-success">5</div>
                                        <small class="d-block">Recursos</small>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-group w-100" role="group">
                                <button class="btn btn-primary btn-sm" onclick="viewCourse(${course.id})">
                                    <i class="fas fa-eye me-1"></i>Ver Curso
                                </button>
                                <button class="btn btn-outline-primary btn-sm" onclick="viewTasks(${course.id})">
                                    <i class="fas fa-tasks me-1"></i>Tareas
                                </button>
                            </div>
                        ` : `
                            <button class="btn btn-success w-100" onclick="purchaseCourse(${course.id})">
                                <i class="fas fa-shopping-cart me-1"></i>Comprar Curso
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div class="row mb-4" data-name="course-summary" data-file="components/Courses.js">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="fas fa-clipboard-list me-2"></i>Resumen de Actividades</h5>
                        </div>
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-3 text-center">
                                    <div class="bg-warning text-dark rounded p-3">
                                        <i class="fas fa-exclamation-triangle fa-2x mb-2"></i>
                                        <h4>6</h4>
                                        <small>Tareas Pendientes</small>
                                    </div>
                                </div>
                                <div class="col-md-3 text-center">
                                    <div class="bg-info text-white rounded p-3">
                                        <i class="fas fa-bell fa-2x mb-2"></i>
                                        <h4>6</h4>
                                        <small>Nuevos Avisos</small>
                                    </div>
                                </div>
                                <div class="col-md-3 text-center">
                                    <div class="bg-success text-white rounded p-3">
                                        <i class="fas fa-calendar-check fa-2x mb-2"></i>
                                        <h4>2</h4>
                                        <small>Próximos Exámenes</small>
                                    </div>
                                </div>
                                <div class="col-md-3 text-center">
                                    <div class="bg-secondary text-white rounded p-3">
                                        <i class="fas fa-download fa-2x mb-2"></i>
                                        <h4>15</h4>
                                        <small>Recursos Disponibles</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row" data-name="courses-grid" data-file="components/Courses.js">
                ${coursesHTML}
            </div>
        `;
    } catch (error) {
        console.error('Courses component error:', error);
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar los cursos</div>';
    }
}

function viewCourse(courseId) {
    try {
        alert(`Abriendo curso con ID: ${courseId}`);
    } catch (error) {
        console.error('View course error:', error);
        reportError(error);
    }
}

function viewTasks(courseId) {
    try {
        alert(`Mostrando tareas del curso con ID: ${courseId}`);
    } catch (error) {
        console.error('View tasks error:', error);
        reportError(error);
    }
}

function purchaseCourse(courseId) {
    try {
        alert(`Redirigiendo a la compra del curso ID: ${courseId}`);
    } catch (error) {
        console.error('Purchase course error:', error);
        reportError(error);
    }
}
