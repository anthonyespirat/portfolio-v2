import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className='pb-12 mt-12 mb-16'>
           <h2 className='font-semibold text-4xl tracking-wider text-center py-12'><span className='text-primary'>C</span>ontact</h2>
           <div className='socials flex justify-around w-full lg:w-1/2 lg:mx-auto'>
                <div className="social">
                  <img src="/images/Insta.svg" alt="" />  
                </div> 
                <div className="social">
                  <img src="/images/Linkedin.svg" alt="" />  
                </div> 
                <div className="social">
                  <img src="/images/Mail.svg" alt="" />  
                </div> 
           </div>
        </div>
    );
};

export default Contact;