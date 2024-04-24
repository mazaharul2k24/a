const HeaderSection={
    site_logo : "/Dev-maza.png",
    site_menu:['Home','About','Contact','Get'],
    header_btn_name:"Get Started",
    header_right_icon:"/3541871.png"
}
const HeroSection={
    sm_title:"Hi, There",
    md_title:" Programmer, Trainer & Student",
    xl_tittle:"I'm  Mazaharul",
    desc:"Over the last 5 years, I have been developing web and Digital marketer  for my clients world wide.",
    action_btn:{
        btn1:"signup",
        btn2:"See more"
    },
    right_image:"/pexels-photo-4709289.webp"
}

const introSection={
    intro_title:"Who Mazaharul Islam?",
    intro_desc:"My name is Mazaharul Islam. I am an experienced web developer. I have been involved in this web development world for 3+ years. Web development is not related to the design of a website.Rather it is about the coding and programming that powers the functionality of the website.",
    intro_cv_dwn_btn:"Download Curriculum Vitae",
    intro_image:"/mazaharul-islam.png"
}

const servicesSection={
    service_title:"What kind of services do I provide?",
    servicesBox:[
        {
            service_name:"Web design",
            service_desc:"I am skilled web designer I design with HTML5,tailwind css, And JavaScript . I Have More Than 3+ years experiences In this Field.",
            service_image:"/web_design.png"
        },
        {
            service_name:"Web development",
            service_desc:"I am skilled web Developer I Develop with Express Js ,next Js And MongoDb. I Have More Than 3+ years experiences In this World.",
            service_image:"/web_development.png"
        },
        {
            service_name:"Email Marketing",
            service_desc:"I can create HTML email template, news letter, business card, email campaign very easily and attractively there all your information like phone number, website logo, email address, Name, Title, Image  etc. ",
            service_image:"/email_marketing.png"
        },
        {
            service_name:"Facebook Marketing",
            service_desc:"Marketing is very popular way to grow your business which can be done through facebook marketing I can do facebook marketing for you if you want.",
            service_image:"/facebook.png"
        },
        {
            service_name:"Google Marketing",
            service_desc:"I am skilled web designer I design with HTML5,tailwind css, And JavaScript . I Have More Than 3+ years experiences In this Field.",
            service_image:"/google_marketing.png"
        },
        {
            service_name:"SEO",
            service_desc:"I am skilled web designer I design with HTML5,tailwind css, And JavaScript . I Have More Than 3+ years experiences In this Field.",
            service_image:"/seo.png"
        }
    ]
}



const workingPlaceSection={
    work_place_title:"Working Places",
    work_place_desc:"I have been working online for more than three years on various platforms including some of the most used platforms.",
    work_placs:[
        {
            name:"Facebook",
            sm_desc:"Message Anytime",
            icon:"/facebook.png",
            sociallink:"https://www.facebook.com/mazaharul2k24"
        },
        {
            name:"Upwork",
            sm_desc:"Message Anytime",
            icon:"/upwork_icon.png",
            sociallink:"https://www.upwork.com/freelancers/~0177cc37e364cff977"
        },
        {
            name:"Fiverr",
            sm_desc:"Message Anytime",
            icon:"/fiverr_icon.jpg",
            sociallink:"https://www.fiverr.com/mazaharul2k23?up_rollout=true"
        },
        {
            name:"Linkdin",
            sm_desc:"Message Anytime",
            icon:"/LinkedIn_icon.png",
            sociallink:"#"
        },
        

    ]
}


const contactSection={
    
    section_name:"How do  contact me?",
    contact_photo:"/virtual-assistant.svg",
    contact_email:"expertmazaharul@gmail.com",
    contact_phone:"01797575932",
    contacter_name:"Mazaharul islam",
    contact_addr:"Balarampur, Rupdia, Jashore",
    contact_box:[
                {
                    type:"text",
                    placeholder:"Enter Your Full Name",
                    name:"fullName",

                },
                {
                    type:"email",
                    placeholder:"Enter Your Email",
                    name:"email",

                },
                {
                    type:"text",
                    placeholder:"Write Your issue...",
                    name:"msgBox",

                }
    ],
    submitBtn:{
        type:"submit",
        value:"Submit",
        name:"submit"
    }
    
}


const footerSection={
    f_logo:"/Dev-maza.png",
    footer_pages:[
        {
            page_name:"Privacy",
            page_link:"/privacy"
        },
        {
            page_name:"Terms and conditon",
            page_link:"/Terms"
        }
      
    ],

    footer_social_icons:[
        {
            name:"Facebook",
            icon_url:"https://www.facebook.com/devmazaharul",
            icon_img:"/facebook.png"
        },
        {
            name:"Linkdin",
            icon_url:"#",
            icon_img:"/linkdin-ico.png"
        },
        
        {
            name:"Insagram",
            icon_url:"#",
            icon_img:"/insta.png"
        },
        

    ],

    web_maker_info:"Created By Mazaharul Islam |  2024 All rights reserved. "
}


module.exports={
    HeaderSection,
    HeroSection,
    introSection,
    workingPlaceSection,
    servicesSection,
    contactSection,
    footerSection
}
