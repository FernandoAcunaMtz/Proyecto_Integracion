function Cultural() {
    try {
        const events = [
            {
                id: 1,
                title: "Festival de Arte Universitario",
                date: "2024-02-15",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
                description: "Exposición de obras de arte creadas por estudiantes de todas las carreras."
            },
            {
                id: 2,
                title: "Concierto de Música Clásica",
                date: "2024-02-20",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
                description: "Presentación de la orquesta sinfónica universitaria."
            },
            {
                id: 3,
                title: "Obra de Teatro: Hamlet",
                date: "2024-03-05",
                image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=250&fit=crop",
                description: "Adaptación moderna del clásico de Shakespeare por el grupo de teatro."
            }
        ];

        return `
            <div class="row" data-name="cultural-events" data-file="components/Cultural.js">
                ${events.map(event => `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100">
                            <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${event.title}</h5>
                                <p class="card-text flex-grow-1">${event.description}</p>
                                <div class="mt-auto">
                                    <small class="text-muted"><i class="fas fa-calendar me-1"></i>${event.date}</small>
                                    <div class="mt-2">
                                        <button class="btn btn-primary btn-sm me-2" onclick="registerEvent(${event.id})">
                                            <i class="fas fa-user-plus me-1"></i>Inscribirse
                                        </button>
                                        <button class="btn btn-outline-info btn-sm" onclick="viewEventDetails(${event.id})">
                                            <i class="fas fa-info-circle me-1"></i>Detalles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="row mt-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="fas fa-star me-2"></i>Actividades Destacadas</h5>
                        </div>
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-4 text-center">
                                    <div class="bg-info text-white rounded p-3">
                                        <i class="fas fa-paint-brush fa-2x mb-2"></i>
                                        <h6>Club de Arte</h6>
                                        <small>Todos los miércoles 16:00</small>
                                    </div>
                                </div>
                                <div class="col-md-4 text-center">
                                    <div class="bg-success text-white rounded p-3">
                                        <i class="fas fa-music fa-2x mb-2"></i>
                                        <h6>Coro Universitario</h6>
                                        <small>Lunes y viernes 17:00</small>
                                    </div>
                                </div>
                                <div class="col-md-4 text-center">
                                    <div class="bg-warning text-dark rounded p-3">
                                        <i class="fas fa-theater-masks fa-2x mb-2"></i>
                                        <h6>Grupo de Teatro</h6>
                                        <small>Martes y jueves 18:00</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Cultural component error:', error);
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar actividades culturales</div>';
    }
}

function registerEvent(eventId) {
    try {
        alert(`Inscripción al evento ${eventId} realizada exitosamente`);
    } catch (error) {
        console.error('Register event error:', error);
        reportError(error);
    }
}

function viewEventDetails(eventId) {
    try {
        alert(`Mostrando detalles del evento ${eventId}`);
    } catch (error) {
        console.error('View event details error:', error);
        reportError(error);
    }
}
