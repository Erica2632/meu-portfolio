// 1 - Validação do formulário (apenas se existir o form na página)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!nome || !email || !mensagem) {
      formMessage.style.color = "red";
      formMessage.textContent = "Por favor, preencha todos os campos.";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.style.color = "red";
      formMessage.textContent = "Por favor, insira um email válido.";
      return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Mensagem enviada com sucesso!";
    form.reset();
  });
}

// 2 - Menu: realce ao passar o mouse (efeito simples e agradável)
document.querySelectorAll('.menu li a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#3d5c74';
    link.style.color = '#fff';
  });
  link.addEventListener('mouseleave', () => {
    if (!link.classList.contains('active')) {
      link.style.backgroundColor = '';
      link.style.color = '';
    }
  });
});

// 3 - Scroll suave para links internos (útil se você usar âncoras internas)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});
