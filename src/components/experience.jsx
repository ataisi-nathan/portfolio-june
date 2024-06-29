

const ExperienceData = [
    {id: 1, title: "Machine Learning", location: "Stanford Online - Coursera", year: "2021", description: "I completed a comprehensive Machine Learning course on Coursera, which provided me with a solid foundation in the principles and practices of machine learning. The course, taught by industry experts, covered a wide range of topics and hands-on exercises that deepened my understanding of the field."},
    {id: 2, title: "JavaScript Developer", location: "SkillAhead", year: "2022-2023", description: "At SkillAhead, I served as both a JavaScript developer and an instructor, combining my technical expertise with a passion for teaching. This dual role allowed me to develop cutting-edge web applications while also mentoring aspiring developers."},
    {id: 3, title: "Web Development Instructor", location: "Our Light Digital Academy", year: "2023", description: "At Our Light Digital Academy, I served as a web development instructor and developer, with additional experience in data analytics. This role allowed me to blend my technical skills with a passion for teaching, helping students build strong foundations in web development while leveraging data analytics to enhance their learning experience."},
    {id: 4, title: "Computer Science", location: "Rivers State University", year: "2023", description: "I am currently pursuing a degree in Computer Science at Rivers State University, an experience that fills me with excitement and motivation. This academic journey is significantly advancing my goal of becoming a professional developer while providing me with a comprehensive understanding of the field."},
]

function Experience() {
    return(
        <div className="experience">
            <h2>EXPERIENCE</h2>
            <div className="container">
                {ExperienceData.map((exp) => (
                    <div className="item">
                        <div className="top">
                            <h3>{exp.title} <span>[{exp.location}]</span></h3>
                            <h4>{exp.year}</h4>
                        </div>
                        <p>{exp.description}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}
export default Experience;