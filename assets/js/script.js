const checkbox = document.querySelector('.checkbox');

// Plans
const plan = {
    annual : {
        basic : 199.99,
        pro : 249.99,
        master : 399.99
    },
    monthly : {
        basic : 19.99,
        pro : 24.99,
        master : 39.99
    }
};

const setPlan = planType => {
    const basicPrice = document.querySelector('.basic span');
    const proPrice = document.querySelector('.pro span');
    const masterPrice = document.querySelector('.master span');

    basicPrice.innerText = planType.basic;
    proPrice.innerText = planType.pro;
    masterPrice.innerText = planType.master;
}

checkbox.addEventListener('change', () => {
    checkbox.checked ? setPlan(plan.monthly) : setPlan(plan.annual);
});
