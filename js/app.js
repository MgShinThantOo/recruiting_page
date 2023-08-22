let canc_btn_1 = document.querySelector('#cancel_btn_1'),
    box_1 = document.querySelector('#japan_job'),
    j_description = document.querySelector('#j_description');

    j_description.addEventListener('click',()=>{
        box_1.classList.remove('d-none');
        box_1.classList.add('fadeInDown')
    })
    canc_btn_1.addEventListener('click',()=>{
        box_1.classList.add('d-none');
        box_1.classList.remove('fadeInDown')
    })

let canc_btn_2 = document.querySelector('#cancel_btn_2'),
    j_job_1 = document.querySelector('#j_job_1'),
    requirement_one = document.querySelector('#requirement_one');

    j_job_1.addEventListener('click',()=>{
        requirement_one.classList.remove('d-none');
        requirement_one.classList.add('fadeIn')
    })
    canc_btn_2.addEventListener('click',()=>{
        requirement_one.classList.add('d-none');
        requirement_one.classList.remove('fadeIn')
    })

let canc_btn_3 = document.querySelector('#cancel_btn_3'),
    j_job_2 = document.querySelector('#j_job_2'),
    requirement_two = document.querySelector('#requirement_two');

    j_job_2.addEventListener('click',()=>{
        requirement_two.classList.remove('d-none');
        requirement_two.classList.add('fadeIn')
    })
    canc_btn_3.addEventListener('click',()=>{
        requirement_two.classList.add('d-none');
        requirement_two.classList.remove('fadeIn')
    })

let canc_btn_4 = document.querySelector('#cancel_btn_4'),
    j_job_3 = document.querySelector('#j_job_3'),
    requirement_three = document.querySelector('#requirement_three');

    j_job_3.addEventListener('click',()=>{
        requirement_three.classList.remove('d-none');
        requirement_three.classList.add('fadeIn')
    })
    canc_btn_4.addEventListener('click',()=>{
        requirement_three.classList.add('d-none');
        requirement_three.classList.remove('fadeIn')
    })

let canc_btn_5 = document.querySelector('#cancel_btn_5'),
    j_job_4 = document.querySelector('#j_job_4'),
    requirement_four = document.querySelector('#requirement_four');

    j_job_4.addEventListener('click',()=>{
        requirement_four.classList.remove('d-none');
        requirement_four.classList.add('fadeIn')
    })
    canc_btn_5.addEventListener('click',()=>{
        requirement_four.classList.add('d-none');
        requirement_four.classList.remove('fadeIn')
    })


    let canc_btn_6 = document.querySelector('#cancel_btn_6'),
    box_2 = document.querySelector('#myanmar_job'),
    m_description = document.querySelector('#m_description');

    m_description.addEventListener('click',()=>{
        box_2.classList.remove('d-none');
        box_2.classList.add('fadeInDown')
    })
    canc_btn_6.addEventListener('click',()=>{
        box_2.classList.add('d-none');
        box_2.classList.remove('fadeInDown')
    })