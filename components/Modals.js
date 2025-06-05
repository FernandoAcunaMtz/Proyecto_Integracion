function Modals() {
    try {
        return `
            <!-- Modal de Catálogo de Cursos -->
            <div class="modal fade" id="courseCatalogModal" tabindex="-1" data-name="catalog-modal" data-file="components/Modals.js">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><i class="fas fa-shopping-cart me-2"></i>Catálogo de Cursos</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row g-4">
                                <div class="col-md-6 col-lg-4">
                                    <div class="card h-100">
                                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" class="card-img-top" alt="Curso">
                                        <div class="card-body">
                                            <h6 class="card-title">Inteligencia Artificial</h6>
                                            <p class="card-text small">Fundamentos de IA y Machine Learning</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="fw-bold text-success">$499</span>
                                                <button class="btn btn-primary btn-sm" onclick="purchaseCourse(4)">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card h-100">
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop" class="card-img-top" alt="Curso">
                                        <div class="card-body">
                                            <h6 class="card-title">Marketing Digital</h6>
                                            <p class="card-text small">Estrategias de marketing en línea</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="fw-bold text-success">$349</span>
                                                <button class="btn btn-primary btn-sm" onclick="purchaseCourse(5)">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <div class="card h-100">
                                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop" class="card-img-top" alt="Curso">
                                        <div class="card-body">
                                            <h6 class="card-title">Análisis de Datos</h6>
                                            <p class="card-text small">Python y análisis estadístico</p>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span class="fw-bold text-success">$399</span>
                                                <button class="btn btn-primary btn-sm" onclick="purchaseCourse(6)">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de Búsqueda -->
            <div class="modal fade" id="searchModal" tabindex="-1" data-name="search-modal" data-file="components/Modals.js">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><i class="fas fa-search me-2"></i>Buscar</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="¿Qué estás buscando?" id="searchInput">
                                <button class="btn btn-outline-primary" onclick="performSearch()">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                            <div class="search-suggestions">
                                <h6>Búsquedas frecuentes:</h6>
                                <div class="d-flex flex-wrap gap-2">
                                    <span class="badge bg-light text-dark">Calificaciones</span>
                                    <span class="badge bg-light text-dark">Horario</span>
                                    <span class="badge bg-light text-dark">Tareas</span>
                                    <span class="badge bg-light text-dark">Calendario</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de Mensajes -->
            <div class="modal fade" id="messagesModal" tabindex="-1" data-name="messages-modal" data-file="components/Modals.js">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><i class="fas fa-envelope me-2"></i>Mensajes</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="list-group">
                                <div class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">Dr. Ana García</h6>
                                        <small>Hace 3 horas</small>
                                    </div>
                                    <p class="mb-1">Recordatorio: Entrega de tarea para mañana</p>
                                    <small>Matemáticas Avanzadas</small>
                                </div>
                                <div class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">Servicios Escolares</h6>
                                        <small>Hace 1 día</small>
                                    </div>
                                    <p class="mb-1">Información sobre inscripciones</p>
                                    <small>Administración</small>
                                </div>
                                <div class="list-group-item">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h6 class="mb-1">Ing. Carlos López</h6>
                                        <small>Hace 2 días</small>
                                    </div>
                                    <p class="mb-1">Material adicional disponible</p>
                                    <small>Programación Web</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de FAQ -->
            <div class="modal fade" id="faqModal" tabindex="-1" data-name="faq-modal" data-file="components/Modals.js">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><i class="fas fa-question-circle me-2"></i>Preguntas Frecuentes</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="accordion" id="faqAccordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            ¿Cómo puedo ver mis calificaciones?
                                        </button>
                                    </h2>
                                    <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            Puedes ver tus calificaciones en la sección de "Cursos", seleccionando el curso específico.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            ¿Cómo realizo un pago?
                                        </button>
                                    </h2>
                                    <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            Ve a la sección "Administración" y selecciona el botón "Pagar" junto al período correspondiente.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                            ¿Dónde encuentro mi horario?
                                        </button>
                                    </h2>
                                    <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            Tu horario está disponible en la sección "Horario" del menú principal.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Modals component error:', error);
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar modales</div>';
    }
}

function performSearch() {
    try {
        const searchTerm = document.getElementById('searchInput').value;
        alert(`Buscando: ${searchTerm}`);
    } catch (error) {
        console.error('Search error:', error);
        reportError(error);
    }
}
