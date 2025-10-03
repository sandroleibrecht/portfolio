import styled from 'styled-components';
import Button from '../Button';
import Pill from '../Pill';
import Chip from '@material-ui/core/Chip';
import skillList from '../../assets/data/SkillList';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function PersonalSection({ textContent }) {

  const history = useHistory();

  const skills = {};
  skillList.forEach( skill => { 
    skills[skill.id] = {...skill};
  });

  return (
    <AboutDescription id="aboutDescription"> 

      <h1>{textContent.mainHeading}</h1>

      <Container>

        <Divider />

        <Section>
          <Heading>{textContent.experienceHeading}</Heading>
          <ExperienceList>
            <Role>
              <Title>
                {textContent.experience1.title} <Timespan>· {textContent.experience1.timespan}</Timespan></Title>
              <Meta>{textContent.experience1.description}</Meta>
            </Role>
            <Role>
              <Title>{textContent.experience2.title} <Timespan>· {textContent.experience2.timespan}</Timespan></Title>
              <Meta>{textContent.experience2.description}</Meta>
            </Role>
          </ExperienceList>
        </Section>

        <Divider />

        <Section>
          <Heading>{textContent.studiesHeading}</Heading>
          <ExperienceList>
            <Role>
              <Title>{textContent.study5.title} <Timespan>· {textContent.study5.timespan}</Timespan></Title>
              <Meta>{textContent.study5.description}</Meta>
            </Role>
            {<Role>
              <Title>{textContent.study4.title} <Timespan>· {textContent.study4.timespan}</Timespan></Title>
              <Meta>{textContent.study4.description}</Meta>
            </Role>
            /*<Role>
              <Title>{textContent.study3.title} <Timespan>· {textContent.study3.timespan}</Timespan></Title>
              <Meta>{textContent.study3.description}</Meta>
            </Role>
            <Role>
              <Title>{textContent.study2.title} <Timespan>· {textContent.study2.timespan}</Timespan></Title>
              <Meta>{textContent.study2.description}</Meta>
            </Role> */}
            <Role>
              <Title>{textContent.study1.title} <Timespan>· {textContent.study1.timespan}</Timespan></Title>
              <Meta>{textContent.study1.description}</Meta>
            </Role>
          </ExperienceList>
        </Section>

        <Divider />

        <Section>
          <Heading>{textContent.mainSkills}</Heading>
          <PillContainer>
            <Pill image={skills.csharp.image} text={skills.csharp.name} color={skills.csharp.color} key={skills.csharp.id} />
            <Pill image={skills.aspNetCore.image} text={skills.aspNetCore.name} color={skills.aspNetCore.color} key={skills.aspNetCore.id} />
            <Pill image={skills.sqlServer.image} text={skills.sqlServer.name} color={skills.sqlServer.color} key={skills.sqlServer.id} />
            <Pill image={skills.visualStudio.image} text={skills.visualStudio.name} color={skills.visualStudio.color} key={skills.visualStudio.id} />
            <Pill image={skills.git.image} text={skills.git.name} color={skills.git.color} key={skills.git.id} />
            {/* <Pill image={skills.blazor.image} text={skills.blazor.name} color={skills.blazor.color} key={skills.blazor.id} /> */}
            {/* <Pill image={skills.xunit.image} text={skills.xunit.name} color={skills.xunit.color} key={skills.xunit.id} /> */}
          </PillContainer>
        </Section>

        <Divider />

        <Section>
          <Heading>{textContent.additionalSkills}</Heading>
          <PillContainer>
            <AddPill label={"Azure DevOps"} key="1" />
            <AddPill label={"Entity Framework"} key="2" />
            <AddPill label={"Frontend"} key="3" />
            <AddPill label={"Automation Engineering"} key="4" />
          </PillContainer>
        </Section>

        <Divider />

      </Container>
      
      <div className="buttonContainer">
        <span onClick={() => history.push('/projects')}><Button text={textContent.button} icon={faChevronCircleRight} /></span>
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
  color: #1f2937;
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

const Timespan = styled.span`
  font-size: 0.85rem;
  color: #6b7280;
  white-space: nowrap;
  display: inline-block;
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: .3rem;
`;

const AddPill = styled(Chip)`
  background-color: white !important;
  color: var(--blue) !important;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  margin: 0.25rem;
`;

export default PersonalSection;
