import './Skill.css'

const Skill = () => {


    return (
        <section id='skill' className='flex flex-col lg:flex-row items-center lg:text-left mb-12'>

            <div className='lg:w-6/12 skill-text mb-12 lg:mb-0'>
                <h3 className='font-bold text-4xl lg:text-3em'><span className='text-primary'>M</span>es compétences et ma passion web</h3>
                <p className='lg:w-4/5 pt-10 text-gray-400 text-xl leading-9'>Soif d’apprendre de nouvelles choses, j’adore produire et participer à divers projet.</p>
            </div>

            <div className="bg-blue grid grid-cols-2 lg:grid-cols-6 gap-5 auto-rows-min content-center lg:w-5/12 lg:ml-12">
                <div className="box lg:col-span-2">
                    <div className="icon">
                        <img src="/images/Figma.svg" alt="Vect1" />
                    </div>
                    <div className="software">Figma</div>
                </div>
                <div className="box lg:col-span-2">
                    <div className="icon">
                        <img src="/images/React.svg" alt="React" />
                    </div>
                    <div className="software">React</div>
                </div>
                <div className="box lg:col-span-2">
                    <div className="icon">
                        <img src="/images/html.svg" alt="Vect1" />
                    </div>
                    <div className="software">HTML / CSS</div>
                </div>
                <div className="box lg:col-span-3">
                    <div className="icon">
                        <img src="/images/Photoshop.svg" alt="Vect1" />
                    </div>
                    <div className="software">Photoshop</div>
                </div>
                <div className="box col-span-2 lg:col-span-3">
                    <div className="icon">
                        <img src="/images/Javascript.svg" alt="Vect1" />
                    </div>
                    <div className="software">Javascript</div>
                </div>
            </div>            
        </section>
    )
}
export default Skill;