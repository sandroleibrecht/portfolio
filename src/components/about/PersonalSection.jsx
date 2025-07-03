import styled from 'styled-components';
import Button from '../Button';
import Pill from '../Pill';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function PersonalSection({ textContent }) {

  const history = useHistory();

  return (
    <AboutDescription id="aboutDescription"> 

      <h1>{textContent.mainHeading}</h1>

      <Container>

        <Divider />

        <Section>
          <Heading>{textContent.experienceHeading}</Heading>
          <ExperienceList>
            <Role>
              <Title>{textContent.experience1.title} <Meta>· {textContent.experience1.timespan}</Meta></Title>
              <Meta>{textContent.experience1.description}</Meta>
            </Role>
            <Role>
              <Title>{textContent.experience2.title} <Meta>· {textContent.experience2.timespan}</Meta></Title>
              <Meta>{textContent.experience2.description}</Meta>
            </Role>
          </ExperienceList>
        </Section>

        <Divider />

        <Section>
          <Heading>{textContent.studiesHeading}</Heading>
          <ExperienceList>
            <Role>
              <Title>{textContent.study1.title} <Meta>· {textContent.study1.timespan}</Meta></Title>
              <Meta>{textContent.study1.description}</Meta>
            </Role>
          </ExperienceList>
        </Section>

        <Divider />

        <Section>
          <Heading>{textContent.mainSkills}</Heading>
          <PillContainer>
            <Pill image="/img/techs/csharp.png" text="C#" color="#8540A1" key="1" />
            <Pill image="/img/techs/aspnet-webapi.png" text="ASP.NET Web API" color="#318DCE" key="2" />
            <Pill image="/img/techs/entity-framework.png" text="Entity Framework" color="#2db6b6" key="3" />
            <Pill image="/img/techs/mssql.png" text="MSSQL" color="#D65A58" key="4" />
            <Pill image="/img/techs/blazor.png" text="Blazor" color="#6C49DC" key="5" />
            <Pill image="/img/techs/visual-studio.png" text="Visual Studio" color="#7b63c7" key="6" />
            <Pill image="/img/techs/git.png" text="Git" color="#EF7E5B" key="7" />
            <Pill image="/img/techs/xunit.png" text="xUnit" color="#6C49DC" key="8" />
          </PillContainer>
        </Section>

        <Divider />

        <Section>
          <Heading>{textContent.additionalSkills}</Heading>
          <PillContainer>
            <Pill text={"Design Patterns"} color="var(--blue)" key="1" />
            <Pill text={"Clean Code"} color="var(--blue)" key="2" />
            <Pill text={"Clean Architecture"} color="var(--blue)" key="3" />
            <Pill text={"Domain Driven Design"} color="var(--blue)" key="4" />
            <Pill text={"Swagger"} color="var(--blue)" key="5" />
            <Pill text={"Serilog"} color="var(--blue)" key="6" />
            <Pill text={"Hangfire"} color="var(--blue)" key="7" />
            <Pill text={"Azure DevOps"} color="var(--blue)" key="8" />
            <Pill text={"Frontend"} color="var(--blue)" key="9" />
            <Pill text={"WPF"} color="var(--blue)" key="10" />
            <Pill text={"PLC & HMI"} color="var(--blue)" key="11" />
          </PillContainer>
        </Section>

        <Divider />

      </Container>
      
      <div className="buttonContainer" onClick={() => history.push('/projects')}>
        <Button text={textContent.button} icon={faChevronCircleRight} />
      </div>
    </AboutDescription>
  );
};

// Styled Components
const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  margin: 0rem 0;
`;

const AboutDescription = styled.section`
  width: 100%;
  padding: 8rem 2vw;

  h1{
    text-align: center;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #4e4e5a;
  }

  .pillSection{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .buttonContainer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    button{
      width: 6rem;
      height: 2rem;
    }
  }
`;

const Container = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937; /* dark gray */
`;


const ExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Role = styled.li`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #1f2937;
`;

const Meta = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: .3rem;
`;

export default PersonalSection;
