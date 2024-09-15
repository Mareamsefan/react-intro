import React from 'react';

type HeaderProps = {
  student: string;
  degree: string;
  points: number;
};

const Header = ({ student, degree, points }: HeaderProps) => {
  return (
    <header>
      <h1>{student}</h1>
      <p>{degree}, {points} studiepoeng</p>
    </header>
  );
};

type ExperienceProps = {
  description: string;
};


const Experience = ({ description }: ExperienceProps) => {
  return <p>{description}</p>;
};


type ExperiencesProps = {
  experienceOne: string;
  experienceTwo: string;
};

const Experiences = ({ experienceOne, experienceTwo }: ExperiencesProps) => {
  return (
    <div>
      <Experience description={experienceOne} />
      <Experience description={experienceTwo} />
    </div>
  );
};


type ContactProps = {
  email: string;
};


const Contact = ({ email }: ContactProps) => {
  return <p>Kontakt: {email}</p>;
};

type ProjectProps = {
  title: string, 
  description: string, 
  startDate: Date, 
  endDate: Date
}

const Project= (project: ProjectProps) => {
  const {title, description, startDate, endDate} = project; 
    return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{startDate.toDateString()}</p>
      <p>{endDate.toDateString()}</p>
    </>

    );
}

const Projects = () => {
  
  const projectList: ProjectProps[] = [
    {
      title: 'Project Alpha',
      description: 'This is the description for Project Alpha.',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-06-30'),
    },
    {
      title: 'Project Beta',
      description: 'This is the description for Project Beta.',
      startDate: new Date('2024-07-01'),
      endDate: new Date('2024-12-31'),
    },
  ];

  return (
    <>
      {projectList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          startDate={project.startDate}
          endDate={project.endDate}
        />
      ))}
    </>
  );
};


function App() {
  const student = 'Maream Sefan';
  const degree = 'Bachelor Informatikk';
  const points = 170;
  const experienceOne = 'Studentassistent i intro i datasikkerhet';
  const experienceTwo = 'Spesialkonsulent i Borg VGS';
  const email = 'mareamns@hiof.no';

  return (
    <div>
  
      <Header student={student} degree={degree} points={points} />
      
      <Experiences experienceOne={experienceOne} experienceTwo={experienceTwo} />
      
      <Contact email={email} />

      <Projects />
    </div>
  );
}

export default App;
