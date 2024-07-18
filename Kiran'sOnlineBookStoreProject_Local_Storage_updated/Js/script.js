searchForm = document.querySelector('.searchForm');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

loginForm  = document.querySelector('.login-container');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#closeLogin-btn').onclick = () => {
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector(`.header .container-header2`).classList.add(`active`);
    } 
    else {
        document.querySelector(`.header .container-header2`).classList.remove(`active`);
    }
}
window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector(`.header .container-header2`).classList.add(`active`);
    } 
    else {
        document.querySelector(`.header .container-header2`).classList.remove(`active`);
    }
}


var swiper = new Swiper(".booksSlider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featureSlider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivalSlider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviewSlider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".blogSlider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  window.addEventListener('DOMContentLoaded', () => {
    const rememberMe = localStorage.getItem('rememberMe');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const rememberCheckbox = document.getElementById('remember');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const closeLoginBtn = document.getElementById('closeLogin-btn');

    if (rememberMe === 'true') {
        rememberCheckbox.checked = true;
        usernameInput.value = username;
        emailInput.value = email;
        passwordInput.value = password;
    }

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('username', usernameInput.value);
            localStorage.setItem('email', emailInput.value);
            localStorage.setItem('password', passwordInput.value);
        } else {
            localStorage.setItem('rememberMe', 'false');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
        // Handle form submission logic here
        event.preventDefault(); // Prevent the form from submitting for this example
    });

    closeLoginBtn.addEventListener('click', () => {
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    });
});



// document.addEventListener('DOMContentLoaded', () => {
//   const cartItemsElement = document.getElementById('cart-items');
//   const totalPriceElement = document.getElementById('total-price');

//   // Function to calculate the total price
//   function updateTotalPrice() {
//       let totalPrice = 0;
//       cartItems.forEach(item => {
//           totalPrice += item.price * item.quantity;
//       });
//       totalPriceElement.textContent = `Total Price: Rs ${(totalPrice).toFixed(2)}`;
//   }

//   // Function to add item to cart
//   function addItemToCart(title, imageSrc, price) {
//       const existingItem = cartItems.find(item => item.title === title);
//       if (existingItem) {
//           existingItem.quantity++;
//       } else {
//           cartItems.push({ title, imageSrc, price, quantity: 1 });
//       }
//       updateCartUI();
//   }

//   // Function to remove item from cart
//   function removeItemFromCart(title) {
//       const index = cartItems.findIndex(item => item.title === title);
//       if (index !== -1) {
//           const item = cartItems[index];
//           item.quantity--;
//           if (item.quantity === 0) {
//               cartItems.splice(index, 1);
//           }
//       }
//       updateCartUI();
//   }

//   // Function to update cart UI
//   function updateCartUI() {
//       cartItemsElement.innerHTML = '';
//       cartItems.forEach(item => {
//           const li = document.createElement('li');
//           li.innerHTML = `
//               <img src="${item.imageSrc}" alt="${item.title}">
//               <div>
//                   <span>${item.title}</span>
//                   <span>Rs ${item.price.toFixed(2)}</span>
//                   <button class="quantity-btn" data-title="${item.title}" data-operation="decrease">-</button>
//                   <span>Quantity: ${item.quantity}</span>
//                   <button class="quantity-btn" data-title="${item.title}" data-operation="increase">+</button>
//                   <button class="remove-item-btn" data-title="${item.title}">Remove</button>
//               </div>
//           `;
//           cartItemsElement.appendChild(li);
//       });
//       updateTotalPrice();
//   }

//   // Sample cart items data
//   const cartItems = [];

//   // Event delegation for "add to cart" buttons
//   document.addEventListener('click', event => {
//       if (event.target.classList.contains('btn')) {
//           const bookElement = event.target.closest('.box');
//           const title = bookElement.querySelector('h3').textContent;
//           const imageSrc = bookElement.querySelector('.image img').src;
//           const price = parseFloat(bookElement.querySelector('.price').textContent.replace('Rs ', ''));
//           addItemToCart(title, imageSrc, price);
//       }
//   });

//   // Event delegation for "remove" and "quantity" buttons
//   document.addEventListener('click', event => {
//       if (event.target.classList.contains('remove-item-btn')) {
//           const title = event.target.dataset.title;
//           removeItemFromCart(title);
//       } else if (event.target.classList.contains('quantity-btn')) {
//           const title = event.target.dataset.title;
//           const operation = event.target.dataset.operation;
//           const item = cartItems.find(item => item.title === title);
//           if (operation === 'increase') {
//               item.quantity++;
//           } else if (operation === 'decrease') {
//               if (item.quantity > 1) {
//                   item.quantity--;
//               }
//           }
//           updateCartUI();
//       }
//   });
// });





document.addEventListener('DOMContentLoaded', () => {
  const cartItemsElement = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutBtn = document.getElementById('checkout-btn');
  const billModal = document.getElementById('bill-modal');
  const billContent = document.getElementById('bill-content');
  const closeModal = document.getElementsByClassName('close')[0];

  // Function to calculate the total price
  function updateTotalPrice() {
      let totalPrice = 0;
      cartItems.forEach(item => {
          totalPrice += item.price * item.quantity;
      });
      totalPriceElement.textContent = `Total Price: Rs ${(totalPrice).toFixed(2)}`;
  }

  // Function to add item to cart
  function addItemToCart(title, imageSrc, price) {
      const existingItem = cartItems.find(item => item.title === title);
      if (existingItem) {
          existingItem.quantity++;
      } else {
          cartItems.push({ title, imageSrc, price, quantity: 1 });
      }
      updateCartUI();
      saveCartToLocalStorage(); // Save cart items to local storage
  }

  // Function to remove item from cart
  function removeItemFromCart(title) {
      const index = cartItems.findIndex(item => item.title === title);
      if (index !== -1) {
          cartItems.splice(index, 1); // Remove the item from the array
      }
      updateCartUI();
      saveCartToLocalStorage(); // Save cart items to local storage
  }

  // Function to update cart UI
  function updateCartUI() {
      cartItemsElement.innerHTML = '';
      cartItems.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `
              <img src="${item.imageSrc}" alt="${item.title}">
              <div>
                  <span>${item.title}</span>
                  <span>Rs ${item.price.toFixed(2)}</span>
                  <button class="quantity-btn" data-title="${item.title}" data-operation="decrease">-</button>
                  <span>Quantity: ${item.quantity}</span>
                  <button class="quantity-btn" data-title="${item.title}" data-operation="increase">+</button>
                  <button class="remove-item-btn" data-title="${item.title}">Remove</button>
              </div>
          `;
          cartItemsElement.appendChild(li);
      });
      updateTotalPrice();
  }

  // Load cart items from local storage when the page loads
  function loadCartFromLocalStorage() {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (savedCartItems) {
          cartItems.push(...savedCartItems);
          updateCartUI();
      }
  }

  // Save cart items to local storage
  function saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Function to handle checkout
  function handleCheckout() {
      if (cartItems.length === 0) {
          alert("Your cart is empty.");
          return;
      }

      let bill = `<h2>Your Bill</h2>`;
      cartItems.forEach(item => {
          bill += `
              <div class="bill-item">
                  <img src="${item.imageSrc}" alt="${item.title}">
                  <span>${item.title} - Rs ${item.price.toFixed(2)} x ${item.quantity} = Rs ${(item.price * item.quantity).toFixed(2)}</span>
              </div>
          `;
      });
      bill += `<h3>${totalPriceElement.textContent}</h3>`;
      bill += `<h2>Thank You for Shopping!</h2>`;

      billContent.innerHTML = bill;

      // Show the modal
      billModal.style.display = "flex";

      // Clear the cart
      cartItems.length = 0;
      updateCartUI();
      saveCartToLocalStorage(); // Save the empty cart to local storage
  }

  // Sample cart items data
  const cartItems = [];

  // Load cart items from local storage when the page loads
  loadCartFromLocalStorage();

  // Event delegation for "add to cart" buttons
  document.addEventListener('click', event => {
      if (event.target.classList.contains('btn')) {
          const bookElement = event.target.closest('.box');
          const title = bookElement.querySelector('h3').textContent;
          const imageSrc = bookElement.querySelector('.image img').src;
          const price = parseFloat(bookElement.querySelector('.price').textContent.replace('Rs ', ''));
          addItemToCart(title, imageSrc, price);
      }
  });

  // Event delegation for "remove" and "quantity" buttons
  document.addEventListener('click', event => {
      if (event.target.classList.contains('remove-item-btn')) {
          const title = event.target.dataset.title;
          removeItemFromCart(title);
      } else if (event.target.classList.contains('quantity-btn')) {
          const title = event.target.dataset.title;
          const operation = event.target.dataset.operation;
          const item = cartItems.find(item => item.title === title);
          if (operation === 'increase') {
              item.quantity++;
          } else if (operation === 'decrease') {
              if (item.quantity > 1) {
                  item.quantity--;
              }
          }
          updateCartUI();
          saveCartToLocalStorage(); // Save cart items to local storage
      }
  });

  // Add event listener for the checkout button
  checkoutBtn.addEventListener('click', handleCheckout);

  // When the user clicks on <span> (x), close the modal
  closeModal.onclick = function() {
      billModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == billModal) {
          billModal.style.display = "none";
      }
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');

  // Event listener for when the search input is clicked
  searchInput.addEventListener('click', () => {
      const searchTerm = prompt('Enter the title of the book:'); // Prompt the user to enter the book title

      if (searchTerm) {
          const foundBook = searchBook(searchTerm.trim());
          
          if (foundBook) {
              alert(`Book "${searchTerm}" is available!`);
          } else {
              alert(`Book "${searchTerm}" is not available.`);
          }
      } else {
          // Handle empty input or cancel
          console.log('Please enter a book title.');
      }
  });

  // Function to search for a book title
  function searchBook(title) {
      // Implement your search logic here
      const availableBooks = ['The Gecko And The Echo', '100 Food', 'The Line Inside Lion', 'The Wobblysaurus Side', 'Nursery Rhymes Inside', '100 Words 100 Words'];
      return availableBooks.includes(title);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const heartIcons = document.querySelectorAll('.fas.fa-heart');

  // Loop through each heart icon and add click event listener
  heartIcons.forEach(icon => {
      icon.addEventListener('click', () => {
          // Get the parent node of the heart icon (which is the box containing book details)
          const box = icon.closest('.box');

          // Extract book title and image source from the box
          const title = box.querySelector('h3').textContent;
          const imageSrc = box.querySelector('.image img').src;

          // Call function to add book to favorite books section and local storage
          addToFavorites(title, imageSrc);
      });
  });

  // Function to add book to favorite books section and local storage
  function addToFavorites(title, imageSrc) {
      // Create a new div element for the favorite book
      const favoriteBook = document.createElement('div');
      favoriteBook.classList.add('favorite-book');

      // Set inner HTML of the favorite book div
      favoriteBook.innerHTML = `
          <img src="${imageSrc}" alt="${title}">
          <h3>${title}</h3>
          <button class="remove-btn">Remove</button>
      `;

      // Get the favorite books section
      const favoriteBooksSection = document.getElementById('favorite-books');

      // Append the favorite book div to the favorite books section
      favoriteBooksSection.appendChild(favoriteBook);

      // Store book information in local storage
      const favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
      favoriteBooks.push({ title, imageSrc });
      localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
  }
});

// Event listener for removing favorite books
document.addEventListener('click', event => {
  if (event.target.classList.contains('remove-btn')) {
      // Get the parent node of the remove button (which is the favorite book div)
      const favoriteBook = event.target.closest('.favorite-book');

      // Remove the favorite book div from the DOM
      favoriteBook.remove();

      // Get the title of the book
      const title = favoriteBook.querySelector('h3').textContent;

      // Remove the book from local storage
      const favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
      const updatedFavorites = favoriteBooks.filter(book => book.title !== title);
      localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  // Load saved data from local storage
  const savedData = JSON.parse(localStorage.getItem('contactFormData'));
  if (savedData) {
      form.name.value = savedData.name;
      form.email.value = savedData.email;
      form.subject.value = savedData.subject;
      form.message.value = savedData.message;
  }

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = {
          name: form.name.value,
          email: form.email.value,
          subject: form.subject.value,
          message: form.message.value
      };

      // Save form data to local storage
      localStorage.setItem('contactFormData', JSON.stringify(formData));

      alert('Thank you for your message. We will get back to you shortly.');
      form.reset(); // Clear the form
  });
});