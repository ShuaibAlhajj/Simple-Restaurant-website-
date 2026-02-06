document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. Mobile Menu Toggle
       ========================================= */
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* =========================================
       2. Sticky Navbar on Scroll
       ========================================= */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '20px 0';
        }
    });

    /* =========================================
       3. Scroll Reveal Animations (Intersection Observer)
       ========================================= */
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* =========================================
       4. Menu Filtering
       ========================================= */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                    card.classList.add('show');
                } else {
                    card.classList.add('hide');
                    card.classList.remove('show');
                }
            });
        });
    });

    /* =========================================
       5. Menu Data (For Modal)
       ========================================= */
    const menuData = {
        1: {
            title: "Fresh Garden Salad",
            price: "$12.99",
            desc: "A refreshing mix of organic greens, cherry tomatoes, cucumbers, and red onions, tossed in our signature balsamic vinaigrette.",
            ingredients: "Mixed Greens, Cherry Tomatoes, Cucumber, Red Onion, Balsamic Vinaigrette",
            nutrition: "Calories: 150 | Protein: 2g | Carbs: 10g | Fat: 12g",
            img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        2: {
            title: "Tomato Bruschetta",
            price: "$9.50",
            desc: "Grilled artisanal bread rubbed with garlic and topped with diced vine-ripened tomatoes, fresh basil, and extra virgin olive oil.",
            ingredients: "Baguette, Tomatoes, Garlic, Basil, Olive Oil, Balsamic Glaze",
            nutrition: "Calories: 220 | Protein: 6g | Carbs: 30g | Fat: 9g",
            img: "https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        3: {
            title: "Gourmet Beef Burger",
            price: "$18.50",
            desc: "Juicy Angus beef patty grilled to perfection, topped with aged cheddar, caramelized onions, lettuce, and tomato on a brioche bun.",
            ingredients: "Angus Beef, Cheddar Cheese, Brioche Bun, Caramelized Onions, Lettuce, Tomato",
            nutrition: "Calories: 850 | Protein: 45g | Carbs: 50g | Fat: 55g",
            img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        4: {
            title: "Italian Pizza",
            price: "$22.00",
            desc: "Authentic Neapolitan-style pizza with San Marzano tomato sauce, fresh mozzarella di bufala, basil, and a drizzle of olive oil.",
            ingredients: "Pizza Dough, San Marzano Tomatoes, Mozzarella, Basil, Olive Oil",
            nutrition: "Calories: 900 | Protein: 35g | Carbs: 110g | Fat: 30g",
            img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        5: {
            title: "Grilled Ribeye Steak",
            price: "$35.00",
            desc: "Premium cut ribeye steak seasoned with herbs and grilled to your liking. Served with garlic mashed potatoes and seasonal vegetables.",
            ingredients: "Ribeye Steak, Rosemary, Thyme, Garlic, Butter, Potatoes, Seasonal Veggies",
            nutrition: "Calories: 950 | Protein: 60g | Carbs: 35g | Fat: 65g",
            img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        6: {
            title: "New York Cheesecake",
            price: "$8.99",
            desc: "Rich and creamy New York-style cheesecake on a buttery graham cracker crust, topped with fresh berry compote.",
            ingredients: "Cream Cheese, Sugar, Eggs, Graham Crackers, Butter, Mixed Berries",
            nutrition: "Calories: 450 | Protein: 8g | Carbs: 40g | Fat: 28g",
            img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        7: {
            title: "Chocolate Brownie",
            price: "$7.50",
            desc: "Warm, fudgy chocolate brownie served with a scoop of vanilla bean ice cream and drizzled with chocolate sauce.",
            ingredients: "Cocoa Powder, Flour, Sugar, Butter, Eggs, Vanilla Ice Cream",
            nutrition: "Calories: 500 | Protein: 6g | Carbs: 65g | Fat: 25g",
            img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        8: {
            title: "Signature Cocktails",
            price: "$15.00",
            desc: "Expertly crafted cocktails using premium spirits, fresh juices, and house-made syrups. Ask your server for the daily special.",
            ingredients: "Premium Spirits, Fresh Fruit Juices, House Syrups, Garnishes",
            nutrition: "Calories: 200-300 (varies) | Alcohol Content: varies",
            img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        },
        9: {
            title: "Fresh Lemonade",
            price: "$5.00",
            desc: "Refreshing homemade lemonade made with freshly squeezed lemons, a touch of cane sugar, and fresh mint leaves.",
            ingredients: "Lemons, Water, Cane Sugar, Mint, Ice",
            nutrition: "Calories: 120 | Protein: 0g | Carbs: 32g | Fat: 0g",
            img: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        }
    };

    /* =========================================
       6. Modal Functionality
       ========================================= */
    const modal = document.getElementById('itemModal');
    const closeModal = document.querySelector('.close-modal');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalIngredients = document.getElementById('modalIngredients');
    const modalNutrition = document.getElementById('modalNutrition');
    const modalAddBtn = document.getElementById('modalAddBtn');

    // Open Modal
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const data = menuData[id];
            
            if (data) {
                modalImg.src = data.img;
                modalTitle.innerText = data.title;
                modalPrice.innerText = data.price;
                modalDesc.innerText = data.desc;
                modalIngredients.innerText = data.ingredients;
                modalNutrition.innerText = data.nutrition;
                
                // Update Add Button in Modal
                modalAddBtn.setAttribute('data-id', id);
                modalAddBtn.setAttribute('data-title', data.title);
                modalAddBtn.setAttribute('data-price', data.price.replace('$', ''));

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Disable scrolling
            }
        });
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable scrolling
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    /* =========================================
       7. Cart Functionality
       ========================================= */
    let cartCount = 0;
    const cartCountEl = document.querySelector('.cart-count');
    const cartBtn = document.getElementById('cartBtn');

    function addToCart(title, price) {
        cartCount++;
        cartCountEl.innerText = cartCount;
        
        // Simple visual feedback
        cartBtn.classList.add('bump');
        setTimeout(() => {
            cartBtn.classList.remove('bump');
        }, 300);

        alert(`Added to Order: ${title} - $${price}`);
    }

    // Add to Cart Buttons (Card & Modal)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add') || e.target.id === 'modalAddBtn') {
            const title = e.target.getAttribute('data-title');
            const price = e.target.getAttribute('data-price');
            addToCart(title, price);
            
            // If added from modal, close modal
            if (e.target.id === 'modalAddBtn') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });

    /* =========================================
       8. Contact Form Validation
       ========================================= */
    const form = document.getElementById('reservationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual submission
            
            let isValid = true;

            // Validate Name
            if (nameInput.value.trim() === '') {
                setError(nameInput);
                isValid = false;
            } else {
                setSuccess(nameInput);
            }

            // Validate Email
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                setError(emailInput);
                isValid = false;
            } else {
                setSuccess(emailInput);
            }

            // Validate Message
            if (messageInput.value.trim() === '') {
                setError(messageInput);
                isValid = false;
            } else {
                setSuccess(messageInput);
            }

            if (isValid) {
                // Simulate form submission
                const btn = form.querySelector('button');
                const originalText = btn.innerText;
                btn.innerText = 'Sending...';
                
                setTimeout(() => {
                    alert('Thank you! Your message has been sent successfully.');
                    form.reset();
                    btn.innerText = originalText;
                    // Reset success styles
                    [nameInput, emailInput, messageInput].forEach(input => {
                        input.parentElement.classList.remove('success');
                    });
                }, 1500);
            }
        });
    }

    // Helper functions for validation
    function setError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        formGroup.classList.remove('success');
    }

    function setSuccess(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});