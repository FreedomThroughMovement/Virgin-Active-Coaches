// DOM Elements
const coachesGrid = document.getElementById('coachesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('coachModal');
const closeBtn = document.querySelector('.close');
const modalBody = document.getElementById('modalBody');

let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderCoaches(coaches);
    setupEventListeners();
});

// Render coaches to the grid
function renderCoaches(coachesToRender) {
    coachesGrid.innerHTML = '';

    if (coachesToRender.length === 0) {
        coachesGrid.innerHTML = `
            <div class="empty-state">
                <h3>No coaches found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    coachesToRender.forEach(coach => {
        const coachCard = createCoachCard(coach);
        coachesGrid.appendChild(coachCard);
    });
}

// Create a coach card element
function createCoachCard(coach) {
    const card = document.createElement('div');
    card.className = 'coach-card';
    
    const goalsHtml = coach.goals
        .map(goal => `<span class="goal-tag">${goalLabels[goal]}</span>`)
        .join('');

    card.innerHTML = `
        <div class="coach-image-container">
            <img src="${coach.image}" alt="${coach.name}">
        </div>
        <div class="coach-info">
            <h3 class="coach-name">${coach.name}</h3>
            <p class="coach-specialty">${coach.specialty}</p>
            <div class="coach-goals">
                ${goalsHtml}
            </div>
            <p class="coach-description">${coach.bio.substring(0, 100)}...</p>
            <p class="click-to-view">👆 Click to view full profile</p>
        </div>
    `;

    card.addEventListener('click', () => openModal(coach));
    return card;
}

// Get testimonials for a specific coach
function getCoachTestimonials(coachId) {
    return testimonials.filter(testimonial => testimonial.coachId === coachId);
}

// Create testimonials HTML
function createTestimonialsHtml(coachTestimonials) {
    if (coachTestimonials.length === 0) {
        return `<p class="modal-bio"><em>No testimonials yet. Be the first to share your experience!</em></p>`;
    }

    return coachTestimonials.map(testimonial => `
        <div class="testimonial">
            <div class="testimonial-stars">${'⭐'.repeat(testimonial.rating)}</div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-author">- ${testimonial.clientName}</p>
        </div>
    `).join('');
}

// Open modal with coach details
function openModal(coach) {
    const goalsHtml = coach.goals
        .map(goal => `<span class="goal-tag">${goalLabels[goal]}</span>`)
        .join('');

    const coachTestimonials = getCoachTestimonials(coach.id);
    const testimonialsHtml = createTestimonialsHtml(coachTestimonials);

    modalBody.innerHTML = `
        <img src="${coach.image}" alt="${coach.name}" class="modal-image">
        <h2 class="modal-name">${coach.name}</h2>
        <p class="modal-specialty">${coach.specialty}</p>
        
        <div class="modal-section-title">About</div>
        <p class="modal-bio">${coach.bio}</p>
        
        <div class="modal-section-title">Specializations</div>
        <div class="modal-goals">
            ${goalsHtml}
        </div>
        
        <div class="modal-section-title">Background</div>
        <p class="modal-bio">
            <strong>Experience:</strong> ${coach.experience}<br>
            <strong>Certifications:</strong> ${coach.certifications.join(', ')}
        </p>
        
        <div class="modal-section-title">Client Testimonials</div>
        <div class="modal-testimonials">
            ${testimonialsHtml}
        </div>
        
        <div class="modal-contact">
            <div class="modal-section-title">Get in Touch</div>
            <div class="contact-info">
                <span class="contact-label">Email:</span>
                <a href="mailto:${mainContact.email}" class="contact-value">${mainContact.email}</a>
            </div>
            <div class="contact-info">
                <span class="contact-label">Phone:</span>
                <a href="tel:${mainContact.phone}" class="contact-value">${mainContact.phone}</a>
            </div>
            <div class="contact-info">
                <span class="contact-label">Address:</span>
                <span class="contact-value">${mainContact.address}</span>
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Filter coaches by goal
function filterCoaches(filterType) {
    currentFilter = filterType;

    if (filterType === 'all') {
        renderCoaches(coaches);
    } else {
        const filtered = coaches.filter(coach => coach.goals.includes(filterType));
        renderCoaches(filtered);
    }

    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === filterType) {
            btn.classList.add('active');
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter button clicks
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterType = btn.getAttribute('data-filter');
            filterCoaches(filterType);
        });
    });

    // Modal close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation (Escape to close modal)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
