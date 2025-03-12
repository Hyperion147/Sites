<script>
    let showDetails = false;
  
    function toggleDetails() {
      showDetails = !showDetails;
    }
  </script>
  
  <section id="history">
    <h1 class="center-text">Historic Figures</h1>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="card center-text" on:click={toggleDetails}>
      <h3>महान आजीवक मक्खलि गोसाल</h3>
      <h4>Mahan Ajivak Makkhali Gosal</h4>
    </div>
    {#if showDetails}
      <div class="details det">
        <p>महान आजीवक मक्खलि गोसाल, महावीर और बुद्ध से बड़ी उम्र के थे।...</p>
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