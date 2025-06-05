function Calendar() {
    try {
        const events = [
            { date: '2024-01-15', title: 'Inicio de Clases', type: 'academic' },
            { date: '2024-01-20', title: 'Examen Matemáticas', type: 'exam' },
            { date: '2024-01-25', title: 'Entrega Proyecto Web', type: 'assignment' },
            { date: '2024-02-14', title: 'Día del Amor y Amistad', type: 'holiday' }
        ];

        return `
            <div class="row" data-name="calendar-main" data-file="components/Calendar.js">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="fas fa-calendar-alt me-2"></i>Enero 2024</h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-bordered mb-0">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>Dom</th><th>Lun</th><th>Mar</th><th>Mié</th><th>Jue</th><th>Vie</th><th>Sáb</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-muted">31</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
                                        </tr>
                                        <tr>
                                            <td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>
                                        </tr>
                                        <tr>
                                            <td>14</td><td class="bg-info text-white">15<br><small>Inicio</small></td><td>16</td><td>17</td><td>18</td><td>19</td><td class="bg-warning">20<br><small>Examen</small></td>
                                        </tr>
                                        <tr>
                                            <td>21</td><td>22</td><td>23</td><td>24</td><td class="bg-success text-white">25<br><small>Entrega</small></td><td>26</td><td>27</td>
                                        </tr>
                                        <tr>
                                            <td>28</td><td>29</td><td>30</td><td>31</td><td class="text-muted">1</td><td class="text-muted">2</td><td class="text-muted">3</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header bg-secondary text-white">
                            <h6 class="mb-0"><i class="fas fa-info-circle me-2"></i>Simbología</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-2"><span class="badge bg-info me-2"></span>Eventos Académicos</div>
                            <div class="mb-2"><span class="badge bg-warning me-2"></span>Exámenes</div>
                            <div class="mb-2"><span class="badge bg-success me-2"></span>Entregas</div>
                            <div class="mb-2"><span class="badge bg-danger me-2"></span>Días Festivos</div>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0"><i class="fas fa-list me-2"></i>Próximos Eventos</h6>
                        </div>
                        <div class="card-body">
                            ${events.map(event => `
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div>
                                        <strong>${event.title}</strong><br>
                                        <small class="text-muted">${event.date}</small>
                                    </div>
                                    <span class="badge bg-${event.type === 'academic' ? 'info' : event.type === 'exam' ? 'warning' : event.type === 'assignment' ? 'success' : 'danger'}">
                                        ${event.type}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Calendar component error:', error);
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar el calendario</div>';
    }
}
