import '../styles/home.css'
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Photo from '../components/Photo';
import Courses from '../components/CoursesCertifications';
import Software from '../components/Software';
import Name from '../components/Name';

const Home = () => {
    return (
        <>
            <div className='desktop'>
                <Name />
            </div>
            <div className='top'>
                <div className='tablet-mobile'>
                    <Name />
                </div>
                <div>
                    <Photo />
                </div>
                <Profile />
                <div>
                </div>
            </div>
            <div className='sections'>
                <div>
                    <Contact />
                </div>
                <div>
                    <Projects />
                </div>
                <div>
                    <Skills />
                </div>
                <div>
                    <Software />
                </div>
                <div>
                    <Experience />
                </div>
                <div>
                    <Education />
                </div>
                <div>
                    <Courses />
                </div>
            </div>
        </>
    )
}

export default Home