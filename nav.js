<script>
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  toggle.addEventListener('click', () =&gt; {
    nav.classList.toggle('active');
  });
</script>