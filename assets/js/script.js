const checkbox = document.querySelector('.checkbox');
const prices = document.querySelectorAll('.plan-price');
// const proPlan = document.querySelectorAll()

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
    // set Plan Prices
    document.querySelector('.basic span').innerText = planType.basic;
    document.querySelector('.pro span').innerText = planType.pro;
    document.querySelector('.master span').innerText = planType.master;
}

const animate = () => {
    prices.forEach(price => {
        price.classList.add('animate');
        setTimeout(function(){
            price.classList.remove('animate');
        }, 200);
    });
}

checkbox.addEventListener('change', () => {
    checkbox.checked ? setPlan(plan.monthly) : setPlan(plan.annual);
    // Animate
    animate();
});
