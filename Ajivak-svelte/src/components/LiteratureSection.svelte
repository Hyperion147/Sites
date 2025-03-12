<script>
    let showDetails = false;
  
    function toggleDetails() {
      showDetails = !showDetails;
    }
  </script>
  
  <section id="literature">
    <h1 class="center-text">Literature Overview</h1>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="card center-text" on:click={toggleDetails}>
      <img src="https://www.vaniprakashan.com/uploads/author_image/author_157.png" alt="">
      <h3>डॉ. धर्मवीर</h3>
      <h4>Dr. Dharamveer</h4>
    </div>
    {#if showDetails}
      <div class="details det">
        <p>जन्म : 9 दिसम्बर 1950...</p>
      </div>
    {/if}
  </section>
  
  <style>
    .center-text {
      text-align: center;
    }
  
    .card {
      background: #f4f4f4;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 1rem;
      margin: 0.5rem 0;
      cursor: pointer;
    }
  
    .details {
      background: #d3eec9;
      border-left: 3px solid #333;
      padding: 1rem;
      margin: 0.5rem 0;
    }
  </style>