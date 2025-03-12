<script>
    import { onMount } from 'svelte';
  
    let books = [
      { image: "https://www.vaniprakashan.com/uploads/product_image/dalit-chintan-ka-vikas.jpg" },
      { image: "books/book1.jpg" },
      // Add more books as needed
    ];
  
    let currentIndex = 0;
  
    function nextBook() {
      currentIndex = (currentIndex + 1) % books.length;
    }
  
    function prevBook() {
      currentIndex = (currentIndex - 1 + books.length) % books.length;
    }
  
    onMount(() => {
      // Initialize any necessary setup
    });
  </script>
  
  <div class="slider">
    <div class="books">
      <div class="slide">
        {#each books as book, index}
          <div class="item" style="background-image: url({book.image});">
            <div class="content">
              <!-- svelte-ignore a11y_invalid_attribute -->
              <a href="" target="_blank"><button>Read More</button></a>
            </div>
          </div>
        {/each}
      </div>
    </div>
    <div class="button">
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button class="prev" on:click={prevBook}><i class="fa-solid fa-arrow-left"></i></button>
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button class="next" on:click={nextBook}><i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
  
  <style>
    .slider {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  
    .books {
      display: flex;
      transition: transform 0.5s ease;
    }
  
    .slide {
      display: flex;
    }
  
    .item {
      flex: 0 0 100%;
      background-size: cover;
      background-position: center;
    }
  
    .button {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  
    .button button {
      margin: 0 10px;
    }
  </style>