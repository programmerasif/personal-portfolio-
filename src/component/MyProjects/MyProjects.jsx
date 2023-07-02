import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import Card from './Card';


const MyProjects = () => {
    return (
        <section className='mb-40' id='work'>
            <h5 className="text-3xl md:text-5xl text-white font-bold text-center mb-12">Some of my Project</h5>
            <div className='grid md:grid-cols-3 grid-cols-1 justify-center gap-5'>
                <Card img={project1} title='Summer-vision' subtitle={"MERN Stack"} count={1} featurOne='The system effectively integrates multiple payment methods via Stripe and also ensures database security through JWT authentication Clint' 
                featurTwo='Separate dashboards for students, instructors, and administrators, enabling streamlined management and access control.'
                
                featurThree='In dashboards, students can choose and purchase classes, instructors can add classes, and administrators can control everything including user management and class.'
                
                live='https://github.com/programmerasif/Summer-vision'
                
                git='https://summer-vision.web.app/?fbclid=IwAR10jnvnzss5K_4utBll-F9LypKqDEQKs5rmZoryrdnkvHjHZ_J7EwyruF0'
                description='Summervision is a website where students can select their favorite sports and buy their selected courses
                to get training from their favorite trainers.
                '
                />


                <Card img={project2} title='Toy Car-Hub' subtitle={"MERN Stack"} count={2} featurOne='Integrate Firebase authentication for authorized users to log in and register form into the website'
                
                featurTwo='The user can add, update and delete all the products individually if he or she wants.'
                
                featurThree='I have implemented searching and shorting options into  “ All car ” pages.'
                live='https://github.com/programmerasif/Toy-cars-Hub/tree/main/Assignment11'
                git='https://assignment-11-5a444.web.app/?fbclid=IwAR2WE7pahcLv2_s2Tu1MTW9IfcE4bx7B8hlLp6f7gmRLuJSMVthkGvXSkcA'
                description='Toy-Carhub is a Toy selling website where a customer can buy or get information about a product. Also,
                a seller can add a product with details, quantity, and description.'
                />
                <Card img={project3} title='Korean Food-hub' subtitle={"MERN Stack"} count={3} featurOne='Integrate Firebase authentication for authorized users to log in and register form into the website.'
                
                featurTwo='User-friendly and dynamic design users can access all the things very easily.'

                featurThree='Added a feature, that a user can add their favorite chef’s recipe to the bookmark section to buy.'
                live='https://github.com/programmerasif/Korian-Food-Bank/tree/main/ph-assignment10'
                git='https://assignment10-e21db.web.app/'
                description='Korean-Food-Bank is a restaurant website where customers can buy their favorite food and also get the
                recipe of the food.
                '
                />
                <Card img={project4} title='Ai Univers-Hub' subtitle={"Front-End"} count={4} />

                <Card img={project5} title='Charear Jobs' subtitle={"Front-End"} count={5} />
                <Card img={project1} count={6} />
            </div>
        </section>
    );
}

export default MyProjects;