const nameform = document.getElementById('name');
const yearform = document.getElementById('year');
const colorform = document.getElementById('color');
const priseform = document.getElementById('prise');
const addbtn = document.getElementById('addbtn');
const namefilter = document.getElementById('namefilter');
const colorfilter = document.getElementById('colorfilter');
const pricefilter = document.getElementById('pricefilter');
const yearfilter = document.getElementById('yearfilter');
const statusfilter = document.getElementById('statusfilter');
const search = document.getElementById('search');
const tbody = document.getElementById('tbody');

function validate() {
    if (!nameform.value) {
        nameform.style.outlineColor = 'red';
        nameform.focus();
        return;
    }
    if (!yearform.value) {
        yearform.style.outlineColor = 'red';
        yearform.focus();
        return;
    }
    if (yearform.value < 2010 || yearform.value > new Date().getFullYear() + 1) {
        alert('2010 dan 2024 gacha bolgan yillar orasida yil kiriting');
        return;
    }
    if (!colorform.value) {
        colorform.style.outlineColor = 'red';
        colorform.focus();
        return;
    }
}

addbtn && addbtn.addEventListener('click', function () {
    validate();
    let data = JSON.parse(localStorage.getItem('cars')) || [];
    console.log(data);
});
