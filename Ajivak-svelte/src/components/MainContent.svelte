<script>
    import BookSlider from './BookSlider.svelte';
    import HistorySection from './HistorySection.svelte';
    import LiteratureSection from './LiteratureSection.svelte';
    import AboutSection from './AboutSection.svelte';
  </script>
  
  <main>
    <BookSlider />
    <HistorySection />
    <LiteratureSection />
    <AboutSection />
  </main>
  
  <style>
    main {
      padding: 1rem;
    }
  </style>