// scroll to top 
window.addEventListener('scroll',()=>{
    let scroll_icon = document.querySelector('#scroll_up');
    
    if( window.scrollY > 400){
        scroll_icon.classList.remove('d-none')
    }else if( window.scrollY < 400){
        scroll_icon.classList.add('d-none')
    }
    console.log(window.scrollY)
})

const x = (a)=>{
    a.classList.remove('d-none')
    a.classList.add('fadeInDown')
};
const y = (a)=>{
    a.classList.add('d-none')
    a.classList.remove('fadeInDown')
};
const z = (a)=>{
    a.classList.remove('d-none')
    a.classList.add('fadeIn')
};
const xyz = (a)=>{
    a.classList.add('d-none')
    a.classList.remove('fadeIn')
};

let canc_btn_1 = document.querySelector('#cancel_btn_1'),
    box_1 = document.querySelector('#japan_job'),
    j_description = document.querySelector('#j_description');
   
    j_description.addEventListener('click',()=>{
        x(box_1);
        if(!box_2.classList.contains('d-none')){
            box_2.classList.add('d-none')
        }
    })
    canc_btn_1.addEventListener('click',()=>{
        y(box_1);
    })

let canc_btn_2 = document.querySelector('#cancel_btn_2'),
    j_job_1 = document.querySelector('#j_job_1'),
    j_requirement_one = document.querySelector('#j_requirement_one');

    j_job_1.addEventListener('click',()=>{
        z(j_requirement_one)
    })
    canc_btn_2.addEventListener('click',()=>{
        xyz(j_requirement_one)
    })

let canc_btn_3 = document.querySelector('#cancel_btn_3'),
    j_job_2 = document.querySelector('#j_job_2'),
    j_requirement_two = document.querySelector('#j_requirement_two');

    j_job_2.addEventListener('click',()=>{
        z(j_requirement_two)
    })
    canc_btn_3.addEventListener('click',()=>{
        xyz(j_requirement_two)
    })

let canc_btn_4 = document.querySelector('#cancel_btn_4'),
    j_job_3 = document.querySelector('#j_job_3'),
    j_requirement_three = document.querySelector('#j_requirement_three');

    j_job_3.addEventListener('click',()=>{
        z(j_requirement_three)
    })
    canc_btn_4.addEventListener('click',()=>{
        xyz(j_requirement_three)
    })

let canc_btn_5 = document.querySelector('#cancel_btn_5'),
    j_job_4 = document.querySelector('#j_job_4'),
    j_requirement_four = document.querySelector('#j_requirement_four');

    j_job_4.addEventListener('click',()=>{
        z(j_requirement_four)
    })
    canc_btn_5.addEventListener('click',()=>{
        xyz(j_requirement_four)
    })


let canc_btn_6 = document.querySelector('#cancel_btn_6'),
    box_2 = document.querySelector('#myanmar_job'),
    m_description = document.querySelector('#m_description');

    m_description.addEventListener('click',()=>{
        x(box_2)
        if(!box_1.classList.contains('d-none')){
            box_1.classList.add('d-none')
        }
    })
    canc_btn_6.addEventListener('click',()=>{
        y(box_2);
    })

let canc_btn_7 = document.querySelector('#cancel_btn_7'),
    m_job_1 = document.querySelector('#m_job_1'),
    m_requirement_one = document.querySelector('#m_requirement_one');

    m_job_1.addEventListener('click',()=>{
        z(m_requirement_one)
    })
    canc_btn_7.addEventListener('click',()=>{
        xyz(m_requirement_one)
    })

let canc_btn_8 = document.querySelector('#cancel_btn_8'),
    m_job_2 = document.querySelector('#m_job_2'),
    m_requirement_two = document.querySelector('#m_requirement_two');

    m_job_2.addEventListener('click',()=>{
        z(m_requirement_two)
    })
    canc_btn_8.addEventListener('click',()=>{
        xyz(m_requirement_two)
    })    