import './Contact.css'

const SocialLink = ({children, link}) => {
  return (
    <a className='social--link' target='_blank' rel='noreferrer' href={link}>
      {children}
    </a>
  )
}

const Contact = () => {
    return (
        <div id='contact' className='pb-12 mt-12 mb-16'>
           <h2 className='font-semibold text-4xl tracking-wider text-center py-12'><span className='text-primary'>C</span>ontact</h2>
           <div className='socials flex justify-around w-full lg:w-1/2 lg:mx-auto'>
              <SocialLink link='http://instagram.com/poupipiou'>
                <div className="social">
                    <img src="/images/Insta.svg" alt="" />
                </div> 
              </SocialLink>  
              <SocialLink link='https://www.linkedin.com/in/anthony-espirat/'>
                <div className="social">
                    <img src="/images/Linkedin.svg" alt="" />  
                </div> 
              </SocialLink>
              <SocialLink link='mailto:anthony.espirat63@gmail.com'>
                <div className="social">
                    <img src="/images/Mail.svg" alt="" />  
                </div> 
              </SocialLink>
           </div>
        </div>
    );
};

export default Contact;