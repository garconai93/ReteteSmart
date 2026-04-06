/* ========================================
   RețeteSmart - App Logic
   ======================================== */

// Sample Recipes Data
const recipes = [
    {
        id: 1,
        title: "Omletă cu Legume Proaspete",
        category: "mic-dejun",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
        time: "10 min",
        servings: 2,
        difficulty: "Ușor",
        price: "15 lei",
        description: "O omletă aerată și gustoasă, încărcată cu legume colorate pentru un mic dejun sănătos și satisfăcător.",
        ingredients: [
            { name: "Ouă", amount: "4 buc" },
            { name: "Ardei gras roșu", amount: "1/2 buc" },
            { name: "Roșii cherry", amount: "6 buc" },
            { name: "Ceapă verde", amount: "3 fire" },
            { name: "Brânză feta", amount: "50g" },
            { name: "Ulei de măsline", amount: "1 lingură" },
            { name: "Sare și piper", amount: "după gust" }
        ]
    },
    {
        id: 2,
        title: "Avocado Toast cu Ou Poșat",
        category: "mic-dejun",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80",
        time: "15 min",
        servings: 2,
        difficulty: "Ușor",
        price: "25 lei",
        description: "Toast crocant cu avocado cremos și ou poșat perfect, decorat cu semințe și chili flakes.",
        ingredients: [
            { name: "Pâine integrală", amount: "2 felii" },
            { name: "Avocado copt", amount: "1 buc" },
            { name: "Ouă", amount: "2 buc" },
            { name: "Lămâie", amount: "1/2 buc" },
            { name: "Semințe de susan", amount: "1 linguriță" },
            { name: "Chili flakes", amount: "1/4 linguriță" },
            { name: "Sare de mare", amount: "după gust" }
        ]
    },
    {
        id: 3,
        title: "Salată Caesar cu Pui Grill",
        category: "pranz",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80",
        time: "25 min",
        servings: 2,
        difficulty: "Mediu",
        price: "35 lei",
        description: "Salată fresh cu piept de pui grillat, crutoane crocante, parmezan și sos Caesar autentic.",
        ingredients: [
            { name: "Piept de pui", amount: "300g" },
            { name: "Salată romană", amount: "1 head" },
            { name: "Pâine crustini", amount: "100g" },
            { name: "Parmezan", amount: "50g" },
            { name: "Sos Caesar", amount: "4 linguri" },
            { name: "Ulei de măsline", amount: "2 linguri" },
            { name: " Usturoi", amount: "2 căței" }
        ]
    },
    {
        id: 4,
        title: "Paste Carbonara Autentică",
        category: "pranz",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
        time: "30 min",
        servings: 4,
        difficulty: "Mediu",
        price: "45 lei",
        description: "Paste spaghetti cu bacon crocant, ouă, parmezan și piper negru proaspăt măcinat.",
        ingredients: [
            { name: "Spaghetti", amount: "400g" },
            { name: "Bacon", amount: "200g" },
            { name: "Ouă", amount: "4 buc" },
            { name: "Gălbenușuri", amount: "4 buc" },
            { name: "Parmezan ras", amount: "100g" },
            { name: "Piper negru", amount: "2 lingurițe" },
            { name: "Sare", amount: "după gust" }
        ]
    },
    {
        id: 5,
        title: "Salmon la Cuptor cu Legume",
        category: "cina",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
        time: "35 min",
        servings: 2,
        difficulty: "Mediu",
        price: "65 lei",
        description: "File de somon cu crustă de ierburi, copt la cuptor alături de legume saisonniere.",
        ingredients: [
            { name: "File de somon", amount: "400g" },
            { name: "Broccoli", amount: "200g" },
            { name: "Morcovi", amount: "2 buc" },
            { name: "Cartofi dulci", amount: "300g" },
            { name: "Ulei de măsline", amount: "3 linguri" },
            { name: "Ierburi Provence", amount: "1 lingură" },
            { name: "Lămâie", amount: "1 buc" }
        ]
    },
    {
        id: 6,
        title: "Curry de Pui cu Orez Basmati",
        category: "cina",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
        time: "40 min",
        servings: 4,
        difficulty: "Mediu",
        price: "50 lei",
        description: "Curry aromatic cu bucăți de pui fragede, lapte de cocos și condimente indiene, servit cu orez basmati.",
        ingredients: [
            { name: "Piept de pui", amount: "500g" },
            { name: "Orez basmati", amount: "300g" },
            { name: "Lapte de cocos", amount: "400ml" },
            { name: "Ceapă", amount: "2 buc" },
            { name: "Roșii", amount: "3 buc" },
            { name: "Pudră curry", amount: "2 linguri" },
            { name: "Usturoi", amount: "4 căței" }
        ]
    },
    {
        id: 7,
        title: "Burger Artizanal cu Brânză",
        category: "cina",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
        time: "25 min",
        servings: 2,
        difficulty: "Ușor",
        price: "40 lei",
        description: "Burger cu carne de vită 100% românească, brânză cheddar topită, legume proaspete și sos special.",
        ingredients: [
            { name: "Carne vită măcinată", amount: "300g" },
            { name: "Chifle burger", amount: "2 buc" },
            { name: "Brânză cheddar", amount: "2 felii" },
            { name: "Roșii", amount: "2 felii" },
            { name: "Salată verde", amount: "2 frunze" },
            { name: "Ceapă", amount: "1/2 buc" },
            { name: "Sos burger", amount: "2 linguri" }
        ]
    },
    {
        id: 8,
        title: "Cheesecake New York Style",
        category: "desert",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
        time: "90 min",
        servings: 8,
        difficulty: "Dificil",
        price: "55 lei",
        description: "Cheesecake cremos și intens, cu bază de biscuiti Graham și topping de fructe de pădure.",
        ingredients: [
            { name: "Cream cheese", amount: "600g" },
            { name: "Smântână pentru frișcă", amount: "200ml" },
            { name: "Zahăr", amount: "150g" },
            { name: "Ouă", amount: "4 buc" },
            { name: "Biscuiți Graham", amount: "200g" },
            { name: "Unt topit", amount: "80g" },
            { name: "Extract de vanilie", amount: "1 linguriță" }
        ]
    },
    {
        id: 9,
        title: "Tartă cu Ciocolată și Zmeură",
        category: "desert",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
        time: "60 min",
        servings: 6,
        difficulty: "Dificil",
        price: "48 lei",
        description: "Tartă cu cremă de ciocolată belgiană și zmeură proaspătă, decorată cu frunze de mentă.",
        ingredients: [
            { name: "Ciocolată neagră 70%", amount: "200g" },
            { name: "Smântână pentru frișcă", amount: "250ml" },
            { name: "Zmeură proaspătă", amount: "200g" },
            { name: "Făină", amount: "250g" },
            { name: "Unt rece", amount: "125g" },
            { name: "Zahăr pudră", amount: "50g" },
            { name: "Ou", amount: "1 buc" }
        ]
    },
    {
        id: 10,
        title: "Clătite americane pufoase",
        category: "mic-dejun",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
        time: "25 min",
        servings: 4,
        difficulty: "Ușor",
        price: "20 lei",
        description: "Clătite americane gonflate și pufoase, servite cu maple syrup și fructe proaspete.",
        ingredients: [
            { name: "Făină", amount: "200g" },
            { name: "Lapte", amount: "250ml" },
            { name: "Ouă", amount: "2 buc" },
            { name: " zahăr", amount: "30g" },
            { name: "Praf de copt", amount: "2 lingurițe" },
            { name: "Unt topit", amount: "30g" },
            { name: "Maple syrup", amount: "pentru servit" }
        ]
    },
    {
        id: 11,
        title: "Supă Thai de crevete",
        category: "pranz",
        image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
        time: "30 min",
        servings: 4,
        difficulty: "Mediu",
        price: "70 lei",
        description: "Supă Tom Yum cu crevete mari, ciuperci, lemongrass și lapte de cocos - o explozie de arome.",
        ingredients: [
            { name: "Crecvete mari", amount: "400g" },
            { name: "Lapte de cocos", amount: "400ml" },
            { name: "Lemongrass", amount: "2 tulpini" },
            { name: "Ciuperci shiitake", amount: "150g" },
            { name: "Paste Thai", amount: "3 linguri" },
            { name: "Suc de lime", amount: "3 linguri" },
            { name: "Frunze de lime", amount: "4 buc" }
        ]
    },
    {
        id: 12,
        title: "Pizza Margherita Artizanală",
        category: "cina",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80",
        time: "45 min",
        servings: 4,
        difficulty: "Mediu",
        price: "42 lei",
        description: "Pizza clasică italiană cu aluat maturat 24h, sos de roșii San Marzano, mozzarella di bufala și busuioc proaspăt.",
        ingredients: [
            { name: "Făină tip 00", amount: "500g" },
            { name: "Mozzarella di bufala", amount: "250g" },
            { name: "Sos roșii San Marzano", amount: "200g" },
            { name: "Busuioc proaspăt", amount: "1 legătură" },
            { name: "Ulei de măsline extravirgin", amount: "4 linguri" },
            { name: "Drojdie proaspătă", amount: "7g" },
            { name: "Sare", amount: "10g" }
        ]
    }
];

// State
let currentFilter = 'all';
let shoppingList = JSON.parse(localStorage.getItem('reteteSmartShoppingList')) || [];
let currentRecipe = null;

// DOM Elements
const recipesGrid = document.getElementById('recipesGrid');
const shoppingListEl = document.getElementById('shoppingList');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const themeToggle = document.getElementById('themeToggle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes();
    renderShoppingList();
    initTheme();
    initEventListeners();
});

// Theme
function initTheme() {
    const saved = localStorage.getItem('reteteSmartTheme');
    if (saved === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('.theme-icon').textContent = '☀️';
    }
}

function toggleTheme() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('reteteSmartTheme', 'dark');
        document.querySelector('.theme-icon').textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('reteteSmartTheme', 'light');
        document.querySelector('.theme-icon').textContent = '☀️';
    }
}

themeToggle?.addEventListener('click', toggleTheme);

// Render Recipes
function renderRecipes() {
    const filtered = currentFilter === 'all' 
        ? recipes 
        : recipes.filter(r => r.category === currentFilter);
    
    recipesGrid.innerHTML = filtered.map((recipe, index) => `
        <div class="recipe-card" data-id="${recipe.id}" style="animation-delay: ${index * 0.1}s">
            <div class="recipe-card-img">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <span class="recipe-badge">${getCategoryLabel(recipe.category)}</span>
            </div>
            <div class="recipe-card-body">
                <h3 class="recipe-card-title">${recipe.title}</h3>
                <div class="recipe-card-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>👥 ${recipe.servings}</span>
                    <span>📊 ${recipe.difficulty}</span>
                </div>
                <div class="recipe-card-footer">
                    <span class="recipe-card-price">${recipe.price}</span>
                    <button class="recipe-add-btn" data-id="${recipe.id}" title="Adaugă la listă">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        'mic-dejun': 'Mic Dejun',
        'pranz': 'Prânz',
        'cina': 'Cină',
        'desert': 'Desert'
    };
    return labels[category] || category;
}

// Filter Recipes
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        renderRecipes();
    });
});

// Recipe Card Click
recipesGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.recipe-card');
    const addBtn = e.target.closest('.recipe-add-btn');
    
    if (addBtn) {
        e.stopPropagation();
        const id = parseInt(addBtn.dataset.id);
        const recipe = recipes.find(r => r.id === id);
        if (recipe) {
            addAllIngredients(recipe);
        }
        return;
    }
    
    if (card) {
        const id = parseInt(card.dataset.id);
        const recipe = recipes.find(r => r.id === id);
        if (recipe) {
            openRecipeModal(recipe);
        }
    }
});

// Recipe Modal
function openRecipeModal(recipe) {
    currentRecipe = recipe;
    modalBody.innerHTML = `
        <div class="recipe-detail">
            <div class="recipe-detail-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-detail-content">
                <span class="recipe-detail-category">${getCategoryLabel(recipe.category)}</span>
                <h2 class="recipe-detail-title">${recipe.title}</h2>
                <div class="recipe-detail-meta">
                    <div class="recipe-detail-meta-item">
                        <span>⏱️</span> ${recipe.time}
                    </div>
                    <div class="recipe-detail-meta-item">
                        <span>👥</span> ${recipe.servings} porții
                    </div>
                    <div class="recipe-detail-meta-item">
                        <span>📊</span> ${recipe.difficulty}
                    </div>
                </div>
                <p class="recipe-detail-description">${recipe.description}</p>
                <h4 class="recipe-ingredients-title">Ingrediente</h4>
                <ul class="recipe-ingredients">
                    ${recipe.ingredients.map((ing, i) => `
                        <li class="recipe-ingredient" data-index="${i}">
                            <div class="recipe-ingredient-checkbox" data-idx="${i}">✓</div>
                            <span class="recipe-ingredient-name">${ing.name}</span>
                            <span class="recipe-ingredient-amount">${ing.amount}</span>
                        </li>
                    `).join('')}
                </ul>
                <div class="recipe-detail-actions">
                    <button class="btn btn-primary" id="addAllIngredients">Adaugă Toate la Listă</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add ingredient checkbox listeners
    document.querySelectorAll('.recipe-ingredient-checkbox').forEach(cb => {
        cb.addEventListener('click', () => {
            cb.classList.toggle('checked');
            cb.closest('.recipe-ingredient').classList.toggle('checked');
        });
    });
    
    // Add all ingredients button
    document.getElementById('addAllIngredients')?.addEventListener('click', () => {
        addAllIngredients(recipe);
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

modalClose?.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

modal?.querySelector('.modal-backdrop')?.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

// Add All Ingredients
function addAllIngredients(recipe) {
    recipe.ingredients.forEach(ing => {
        const exists = shoppingList.find(item => 
            item.name === ing.name && item.recipeId === recipe.id
        );
        if (!exists) {
            shoppingList.push({
                id: Date.now() + Math.random(),
                name: ing.name,
                amount: ing.amount,
                recipeId: recipe.id,
                recipeName: recipe.title,
                checked: false
            });
        }
    });
    saveShoppingList();
    renderShoppingList();
    showNotification(`Ingrediente adăugate din ${recipe.title}!`);
}

// Shopping List
function renderShoppingList() {
    if (shoppingList.length === 0) {
        shoppingListEl.innerHTML = `
            <div class="empty-state" id="emptyState">
                <span class="empty-icon">🛒</span>
                <p>Lista ta e goală</p>
                <span class="empty-hint">Adaugă ingrediente din rețete</span>
            </div>
        `;
    } else {
        shoppingListEl.innerHTML = shoppingList.map(item => `
            <div class="shopping-item ${item.checked ? 'checked' : ''}" data-id="${item.id}">
                <div class="shopping-item-checkbox ${item.checked ? 'checked' : ''}">
                    ${item.checked ? '✓' : ''}
                </div>
                <div class="shopping-item-content">
                    <span class="shopping-item-name">${item.name}</span>
                    <span class="shopping-item-meta">${item.amount} · ${item.recipeName}</span>
                </div>
                <button class="shopping-item-remove" title="Șterge">✕</button>
            </div>
        `).join('');
        
        // Add event listeners
        document.querySelectorAll('.shopping-item-checkbox').forEach(cb => {
            cb.addEventListener('click', toggleItem);
        });
        
        document.querySelectorAll('.shopping-item-remove').forEach(btn => {
            btn.addEventListener('click', removeItem);
        });
    }
    
    updateSummary();
}

function toggleItem(e) {
    const itemEl = e.target.closest('.shopping-item');
    const id = parseFloat(itemEl.dataset.id);
    const item = shoppingList.find(i => i.id === id);
    if (item) {
        item.checked = !item.checked;
        saveShoppingList();
        renderShoppingList();
    }
}

function removeItem(e) {
    const itemEl = e.target.closest('.shopping-item');
    const id = parseFloat(itemEl.dataset.id);
    shoppingList = shoppingList.filter(i => i.id !== id);
    saveShoppingList();
    renderShoppingList();
}

function updateSummary() {
    const total = shoppingList.length;
    const checked = shoppingList.filter(i => i.checked).length;
    const remaining = total - checked;
    const percent = total > 0 ? (checked / total * 100) : 0;
    
    document.getElementById('totalItems').textContent = total;
    document.getElementById('checkedItems').textContent = checked;
    document.getElementById('remainingItems').textContent = remaining;
    document.getElementById('progressFill').style.width = `${percent}%`;
}

function saveShoppingList() {
    localStorage.setItem('reteteSmartShoppingList', JSON.stringify(shoppingList));
}

// Clear buttons
document.getElementById('clearChecked')?.addEventListener('click', () => {
    shoppingList = shoppingList.filter(i => !i.checked);
    saveShoppingList();
    renderShoppingList();
});

document.getElementById('clearAll')?.addEventListener('click', () => {
    if (confirm('Ești sigur că vrei să golești toată lista?')) {
        shoppingList = [];
        saveShoppingList();
        renderShoppingList();
    }
});

// Order button
document.getElementById('orderBtn')?.addEventListener('click', () => {
    if (shoppingList.length === 0) {
        showNotification('Lista ta e goală!', 'error');
        return;
    }
    showNotification('În curând - comandă ingredientele direct! 🚀');
});

// Notification
function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${type === 'success' ? '✓' : '✕'}</span>
        <span>${message}</span>
    `;
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'success' ? 'var(--primary)' : '#ef4444'};
        color: #000;
        border-radius: var(--radius-md);
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 300;
        animation: slideIn 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Event Listeners
function initEventListeners() {
    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Add CSS animation for notification exit
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
