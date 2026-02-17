import lionsport from '../assets/lionsport.png';
import globe from '../assets/globe.png';
import eshop from '../assets/eshop.png';
import lionmockup from "../assets/lionsport-mockup.jpg";
import lionuserpersona from "../assets/lionsport-userpersona.jpg";
import lionwireframe from "../assets/lionsport-wireframe.png";
import globemockup from "../assets/globe-mockup.png";
import globeuserpersona from "../assets/globe-userpersona.jpg";
import globewireframe from "../assets/globe-wireframe.png"

const Projects = () => {
    return (
        <>
            <h2 className="section-title">Projects</h2>
            <div className="projects">
                <div>
                    <a href="https://ramed33.github.io/tarea-proyecto-2/" target="_blank">
                        <h3 className='project-title'>
                            Lion Sport website
                        </h3>
                        <h4>JavaScript, CSS, SASS, Responsive design, HTML5, UX/UI Design, Figma</h4>
                        <img src={lionsport} alt="lionsport" />
                    </a>
                    <a href={lionmockup} target="_blank">
                        <h4>
                            Lion Sport mockup
                        </h4>
                    </a>
                    <a href={lionuserpersona} target="_blank">
                        <h4>
                            Lion Sport User Persona
                        </h4>
                    </a>
                    <a href={lionwireframe} target="_blank">
                        <h4>
                            Lion Sport wireframe
                        </h4>
                    </a>
                    <a href="https://github.com/Ramed33/tarea-proyecto-2" target="_blank">
                        <h4>
                            Lion Sport Frontend repository
                        </h4>
                    </a>
                </div>
                <div>
                    <a href="https://ramed33.github.io/globe/" target="_blank">
                        <h3 className='project-title'>
                            Globe website
                        </h3>
                        <h4>Styled components, Jest, React, Redux Toolkit, Responsive design, UX/UI Design, HTML5, Figma</h4>
                        <img src={globe} alt="globe" />
                    </a>
                    <a href={globemockup} target="_blank">
                        <h4>
                            Globe mockup
                        </h4>
                    </a>
                    <a href={globeuserpersona} target="_blank">
                        <h4>
                            Globe User Persona
                        </h4>
                    </a>
                    <a href={globewireframe} target="_blank">
                        <h4>
                            Globe wireframe
                        </h4>
                    </a>
                    <a href="https://github.com/Ramed33/globe" target="_blank">
                        <h4>
                            Globe Frontend repository
                        </h4>
                    </a>
                </div>
                <div>
                    <a href="https://eshopapp.dsc-ideas.cloud" target="_blank">
                        <h3 className='project-title'>
                            E-shop website
                        </h3>
                        <h4>Virtual Private Server (VPS), Django, React.js, Tailwind CSS, MySQL</h4>
                        <img src={eshop} alt="eshop" />
                    </a>
                    <a href="https://github.com/Ramed33/eshop-api" target="_blank">
                        <h4>
                            E-shop Backend repository
                        </h4>
                    </a>
                    <a href="https://github.com/Ramed33/eshop-app" target="_blank">
                        <h4>
                            E-shop Frontend repository
                        </h4>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects