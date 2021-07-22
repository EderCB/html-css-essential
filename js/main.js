const $detailsList = document.querySelectorAll('details');
$detailsList.forEach(($details) => {
    $details.querySelector('summary').addEventListener('click', expand);
});

function expand() {
    $detailsList.forEach(($details) => {
        $details.removeAttribute('open');
    });
}

// Selector de tema
let theme = document.getElementById('theme');
let $nemium_a = document.getElementById('nemium-a');
let $nemium_b = document.getElementById('nemium-b');
let $nemium_c = document.getElementById('nemium-c');
let $nemium_d = document.getElementById('nemium-d');
let $nemium_e = document.getElementById('nemium-e');

let nemium_a ="./css/nemium-a.css"; 
let nemium_b ="./css/nemium-b.css";
let nemium_c ="./css/nemium-c.css";
let nemium_d ="./css/nemium-d.css";
let nemium_e ="./css/nemium-e.css";


$nemium_a.addEventListener('click', () => {
    theme.href = nemium_a;
    $nemium_a.setAttribute('class', 'nav-secondary__link--active');
    $nemium_b.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_c.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_d.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_e.removeAttribute('class', 'nav-secondary__link--active');

    console.log('Se cambio al tema A');
});

$nemium_b.addEventListener('click', () => {
    theme.href = nemium_b;

    $nemium_b.setAttribute('class', 'nav-secondary__link--active');
    $nemium_a.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_c.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_d.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_e.removeAttribute('class', 'nav-secondary__link--active');

    console.log('Se cambio al tema B');
});

$nemium_c.addEventListener('click', () => {
    theme.href = nemium_c;

    $nemium_c.setAttribute('class', 'nav-secondary__link--active');
    $nemium_a.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_b.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_d.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_e.removeAttribute('class', 'nav-secondary__link--active');

    console.log('Se cambio al tema C');
});

$nemium_d.addEventListener('click', () => {
    theme.href = nemium_d;

    $nemium_d.setAttribute('class', 'nav-secondary__link--active');
    $nemium_a.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_b.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_c.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_e.removeAttribute('class', 'nav-secondary__link--active');

    console.log('Se cambio al tema D');
});

$nemium_e.addEventListener('click', () => {
    theme.href = nemium_e;

    $nemium_e.setAttribute('class', 'nav-secondary__link--active');
    $nemium_a.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_b.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_c.removeAttribute('class', 'nav-secondary__link--active');
    $nemium_d.removeAttribute('class', 'nav-secondary__link--active');

    console.log('Se cambio al tema E');
});