function Contact() {
    try {
        const departments = [
            { name: 'Rectoría', phone: '+52 (55) 1234-5678', email: 'rectoria@universidad.edu' },
            { name: 'Servicios Escolares', phone: '+52 (55) 1234-5679', email: 'escolares@universidad.edu' },
            { name: 'Biblioteca', phone: '+52 (55) 1234-5680', email: 'biblioteca@universidad.edu' },
            { name: 'Soporte Técnico', phone: '+52 (55) 1234-5681', email: 'soporte@universidad.edu' }
        ];

        return `
            <div class="row" data-name="contact-main" data-file="components/Contact.js">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="fas fa-address-book me-2"></i>Directorio de Contactos</h5>
                        </div>
                        <div class="card-body">
                            <div class="row g-4">
                                ${departments.map(dept => `
                                    <div class="col-md-6">
                                        <div class="border rounded p-3">
                                            <h6 class="text-primary">${dept.name}</h6>
                                            <p class="mb-1">
                                                <i class="fas fa-phone text-success me-2"></i>
                                                <a href="tel:${dept.phone}" class="text-decoration-none">${dept.phone}</a>
                                            </p>
                                            <p class="mb-0">
                                                <i class="fas fa-envelope text-info me-2"></i>
                                                <a href="mailto:${dept.email}" class="text-decoration-none">${dept.email}</a>
                                            </p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>Ubicación</h6>
                        </div>
                        <div class="card-body">
                            <address>
                                <strong>Universidad Ejemplo</strong><br>
                                Av. Universidad 123<br>
                                Colonia Educativa<br>
                                Ciudad Universitaria, CP 12345<br>
                                México
                            </address>
                            <div class="bg-light p-3 rounded text-center">
                                <i class="fas fa-map fa-3x text-muted mb-2"></i>
                                <p class="mb-0 small">Mapa del Campus</p>
                                <button class="btn btn-sm btn-outline-primary mt-2" onclick="viewMap()">
                                    <i class="fas fa-external-link-alt me-1"></i>Ver Mapa
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-clock me-2"></i>Horarios de Atención</h6>
                        </div>
                        <div class="card-body">
                            <p><strong>Lunes a Viernes:</strong><br>8:00 AM - 6:00 PM</p>
                            <p><strong>Sábados:</strong><br>9:00 AM - 2:00 PM</p>
                            <p class="mb-0"><strong>Domingos:</strong><br>Cerrado</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-warning text-dark">
                            <h5 class="mb-0"><i class="fas fa-question-circle me-2"></i>Formulario de Contacto</h5>
                        </div>
                        <div class="card-body">
                            <form onsubmit="submitContactForm(event)">
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label class="form-label">Nombre Completo</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Correo Electrónico</label>
                                        <input type="email" class="form-control" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Departamento</label>
                                        <select class="form-select" required>
                                            <option value="">Seleccionar...</option>
                                            <option value="rectoria">Rectoría</option>
                                            <option value="escolares">Servicios Escolares</option>
                                            <option value="biblioteca">Biblioteca</option>
                                            <option value="soporte">Soporte Técnico</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">Asunto</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-12">
                                        <label class="form-label">Mensaje</label>
                                        <textarea class="form-control" rows="4" required></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">
                                            <i class="fas fa-paper-plane me-2"></i>Enviar Mensaje
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar información de contacto</div>';
    }
}

function viewMap() {
    try {
        alert('Abriendo mapa del campus...');
    } catch (error) {
        console.error('View map error:', error);
        reportError(error);
    }
}

function submitContactForm(event) {
    try {
        event.preventDefault();
        alert('Mensaje enviado correctamente. Te contactaremos pronto.');
    } catch (error) {
        console.error('Submit form error:', error);
        reportError(error);
    }
}
