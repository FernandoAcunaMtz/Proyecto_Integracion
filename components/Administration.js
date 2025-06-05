function Administration() {
    try {
        const payments = [
            { month: 'Enero 2024', amount: '$5,000', status: 'Pagado', date: '2024-01-05' },
            { month: 'Febrero 2024', amount: '$5,000', status: 'Pendiente', date: '2024-02-05' },
            { month: 'Marzo 2024', amount: '$5,000', status: 'Pendiente', date: '2024-03-05' }
        ];

        return `
            <div class="row" data-name="admin-main" data-file="components/Administration.js">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="fas fa-credit-card me-2"></i>Estado de Pagos</h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-striped mb-0">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>Período</th>
                                            <th>Monto</th>
                                            <th>Estado</th>
                                            <th>Fecha Límite</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${payments.map(payment => `
                                            <tr>
                                                <td>${payment.month}</td>
                                                <td class="fw-bold">${payment.amount}</td>
                                                <td>
                                                    <span class="badge bg-${payment.status === 'Pagado' ? 'success' : 'warning'}">
                                                        ${payment.status}
                                                    </span>
                                                </td>
                                                <td>${payment.date}</td>
                                                <td>
                                                    ${payment.status === 'Pendiente' ? 
                                                        '<button class="btn btn-sm btn-primary" onclick="payTuition()"><i class="fas fa-credit-card me-1"></i>Pagar</button>' : 
                                                        '<button class="btn btn-sm btn-outline-secondary" onclick="downloadReceipt()"><i class="fas fa-download me-1"></i>Recibo</button>'
                                                    }
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0"><i class="fas fa-user me-2"></i>Información del Estudiante</h6>
                        </div>
                        <div class="card-body">
                            <p><strong>Nombre:</strong> Juan Pérez</p>
                            <p><strong>Matrícula:</strong> 2024001234</p>
                            <p><strong>Carrera:</strong> Ingeniería en Sistemas</p>
                            <p><strong>Semestre:</strong> 5to</p>
                            <p><strong>Estado:</strong> <span class="badge bg-success">Activo</span></p>
                        </div>
                    </div>
                    <div class="card mt-3">
                        <div class="card-header bg-warning text-dark">
                            <h6 class="mb-0"><i class="fas fa-exclamation-triangle me-2"></i>Recordatorios</h6>
                        </div>
                        <div class="card-body">
                            <div class="alert alert-warning mb-2">
                                <small><strong>Pago Pendiente:</strong> Febrero 2024</small>
                            </div>
                            <div class="alert alert-info mb-0">
                                <small><strong>Próximo:</strong> Inscripción a materias</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header bg-success text-white">
                            <h5 class="mb-0"><i class="fas fa-file-alt me-2"></i>Documentos y Trámites</h5>
                        </div>
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-3">
                                    <button class="btn btn-outline-primary w-100" onclick="requestDocument('transcript')">
                                        <i class="fas fa-file-pdf fa-2x d-block mb-2"></i>
                                        Constancia de Estudios
                                    </button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-success w-100" onclick="requestDocument('grades')">
                                        <i class="fas fa-chart-line fa-2x d-block mb-2"></i>
                                        Historial Académico
                                    </button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-info w-100" onclick="requestDocument('enrollment')">
                                        <i class="fas fa-id-card fa-2x d-block mb-2"></i>
                                        Credencial Estudiantil
                                    </button>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-outline-warning w-100" onclick="requestDocument('certificate')">
                                        <i class="fas fa-certificate fa-2x d-block mb-2"></i>
                                        Certificado Parcial
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Administration component error:', error);
        reportError(error);
        return '<div class="alert alert-danger">Error al cargar administración</div>';
    }
}

function payTuition() {
    try {
        alert('Redirigiendo a la plataforma de pagos...');
    } catch (error) {
        console.error('Pay tuition error:', error);
        reportError(error);
    }
}

function downloadReceipt() {
    try {
        alert('Descargando recibo de pago...');
    } catch (error) {
        console.error('Download receipt error:', error);
        reportError(error);
    }
}

function requestDocument(type) {
    try {
        alert(`Solicitando documento: ${type}`);
    } catch (error) {
        console.error('Request document error:', error);
        reportError(error);
    }
}
