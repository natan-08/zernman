/*
==================================================
DADOS DA APLICAÇÃO
==================================================
*/

const app = {
    empresa: "Zernman Construções",
    ano: "2026",

    logo: "../assets/logo.png",

    linksFooter: [
        "Materiais de construção",
        "Madeiras",
        "Acabamento",
        "Ferramentas",
        "Privacidade",
        "Termos",
        "Suporte"
    ]
};

/*
==================================================
HEADER
==================================================
*/

document.getElementById("header").innerHTML = `
<div class="header">

    <div class="logo-header">
        <img src="${app.logo}" alt="Logo">
        <span>${app.empresa}</span>
    </div>

</div>
`;

/*
==================================================
MAIN
==================================================
*/

document.getElementById("main-content").innerHTML = `

<div class="login-container">

    <!-- LOGIN -->

    <section class="section-card">

        <div class="logo-side">
            <img src="${app.logo}" alt="Logo">
        </div>

        <div class="form-side">

            <h2>Acesse sua conta</h2>

            <p>
                Bem-vindo de volta. Faça login para consultar produtos,
                preços e pedidos.
            </p>

            <form>

                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email">
                </div>

                <div class="form-group">
                    <label>Senha</label>
                    <input type="password">
                </div>

                <button class="btn btn-dark">
                    Entrar
                </button>

            </form>

        </div>

    </section>

    <!-- CADASTRO -->

    <section class="section-card">

        <div class="logo-side">
            <img src="${app.logo}" alt="Logo">
        </div>

        <div class="form-side">

            <h2>Crie sua conta</h2>

            <p>
                Crie uma conta para consultar produtos,
                preços e pedidos.
            </p>

            <form>

                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email">
                </div>

                <div class="form-group">
                    <label>Senha</label>
                    <input type="password">
                </div>

                <button class="btn btn-outline">
                    Criar conta
                </button>

            </form>

        </div>

    </section>

    <!-- OPÇÕES -->

    <section class="options-section">

        <div>

            <h2>Acesso e opções</h2>

            <p>
                Recupere sua conta e altere preferências.
            </p>

        </div>

        <div class="option-card">

            <h3>Esqueci minha senha</h3>

            <p>
                Enviaremos um link de redefinição para seu e-mail.
            </p>

            <button class="btn btn-outline">
                Recuperar acesso
            </button>

        </div>

    </section>

    <!-- LOGIN SOCIAL -->

    <section class="social-section">

        <div class="social-title">
            <h2>Entrar com</h2>
            <p>
                Utilize sua conta Google ou Apple.
            </p>
        </div>

        <div class="social-grid">

            <div class="social-card">

                <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google">

                <h4>Google</h4>

            </div>

            <div class="social-card">

                <img
                src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                alt="Apple">

                <h4>Apple</h4>

            </div>

        </div>

    </section>

</div>
`;

/*
==================================================
FOOTER
==================================================
*/

document.getElementById("footer").innerHTML = `

<div class="footer">

    <div class="footer-links">

        ${app.linksFooter
            .map(link => `<a href="#">${link}</a>`)
            .join("")
        }

    </div>

    <p>
        ${app.empresa} © ${app.ano}
    </p>

    <p>
        Construindo com tecnologia e confiança.
    </p>

</div>

`;