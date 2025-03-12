<script>
    import { onMount } from 'svelte';
  </script>
  
  <header>
    <h1>AJIVAK - HISTORY AND LITERATURE</h1>
    <nav>
      <ul>
        <li class="link"><a href="#history">History</a></li>
        <li class="link"><a href="#book">Books</a></li>
        <li class="link"><a href="https://hyperion147.github.io/Literature/">Literature</a></li>
        <li class="link"><a href="#about">About</a></li>
        <li class="link"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <style>
    header {
      background: #335346;
      color: #fff;
      padding: 1rem 0;
      text-align: center;
    }
  
    nav ul {
      list-style: none;
      padding: 0;
    }
  
    nav ul li {
      display: inline;
      margin: 0 1rem;
      font-size: 1.1rem;
    }
  
    .link a {
      position: relative;
      padding-bottom: 0.25rem;
      color: white;
      font-size: 1.2rem;
    }
  
    .link a::after {
      content: "";
      position: absolute;
      height: 1px;
      width: 0;
      bottom: 0;
      left: 0;
      background-color: rgb(255, 255, 255);
      transition: all 0.3s ease;
    }
  
    .link a:hover::after {
      width: 80%;
    }
  </style>