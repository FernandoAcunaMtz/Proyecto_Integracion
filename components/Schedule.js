function Schedule() {
    try {
        const schedule = [
            { time: '08:00-09:30', monday: 'Matemáticas', tuesday: '', wednesday: 'Matemáticas', thursday: '', friday: 'Lab Math' },
            { time: '09:30-11:00', monday: '', tuesday: 'Programación', wednesday: '', thursday: 'Programación', friday: 'Programación' },
            { time: '11:00-12:30', monday: 'Base de Datos', tuesday: 'Base de Datos', wednesday: 'Base de Datos', thursday: '', friday: '' },
            { time: '14:00-15:30', monday: '', tuesday: '', wednesday: 'Tutoría', thursday: 'Proyecto', friday: '' },
            { time: '15:30-17:00', monday: 'Seminario', tuesday: '', wednesday: '', thursday: 'Seminario', friday: '' }
        ];

        return `
            <div class="row" data-name="schedule-main" data-file="components/Schedule.js">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="fas fa-clock me-2"></i>Horario de Clases - Semestre Enero-Junio 2024</h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped mb-0">
                                    <thead class="bg-dark text-white">
                                        <tr>
                                            <th>Hora</th>
                                            <th>Lunes</th>
                                            <th>Martes</th>
                                            <th>Miércoles</th>
                                            <th>Jueves</th>
                                            <th>Viernes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${schedule.map(slot => `
                                            <tr>
                                                <td class="fw-bold text-primary">${slot.time}</td>
                                                <td class="${slot.monday ? 'bg-light' : ''}">${slot.monday || '-'}</td>
                                                <td class="${slot.tuesday ? 'bg-light' : ''}">${slot.tuesday || '-'}</td>
                                                <td class="${slot.wednesday ? 'bg-light' : ''}">${slot.wednesday || '-'}</td>
                                                <td class="${slot.thursday ? 'bg-light' : ''}">${slot.thursday || '-'}</td>
                                                <td class="${slot.friday ? 'bg-light' : ''}">${slot.friday || '-'}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0"><i class="fas fa-info-circle me-2"></i>Información Adicional</h6>
                        </div>
                        <div class="card-body">
                            <p><strong>Aulas:</strong></p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-map-marker-alt text-primary me-2"></i>Matemáticas: Aula virtual 101</li>
                                <li><i class="fas fa-map-marker-alt text-primary me-2"></i>Programación: Lab virtual 201</li>
                                <li><i class="fas fa-map-marker-alt text-primary me-2"></i>Base de Datos: Aula virtual 302</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-success text-white">
                            <h6 class="mb-0"><i class="fas fa-user-tie me-2"></i>Profesores</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-2">
                                <strong>Dr. Ana García</strong><br>
                                <small class="text-muted">Matemáticas Avanzadas</small>
                            </div>
                            <div class="mb-2">
                                <strong>Ing. Carlos López</strong><br>
                                <small class="text-muted">Programación Web</small>
                            </div>
                            <div class="mb-2">
                                <strong>Mtra. Laura Martínez</strong><br>
                                <small class="text-muted">Base de Datos</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Schedule component error:', error);
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar el horario</div>';
    }
}
