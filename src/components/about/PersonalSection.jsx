
import styled from 'styled-components';
import Button from '../Button';
import Pill from '../Pill';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

function PersonalSection({ textContent }) {

  const history = useHistory();

  return (
    <AboutDescription> 

      <h1>About Me</h1>

      <Container>
        <Section>
          <Heading>Current Position</Heading>
          <Paragraph>
            C# Developer - ASP.NET Web APIs, MSSQL and process automation
          </Paragraph>
        </Section>

        <Section>
          <Heading>Current Studies</Heading>
          <Paragraph>
            FH Technikum Wien - BSc Business Information Systems (in progress)
          </Paragraph>
        </Section>
      </Container>

      {/* werdegang tbd here */}

      {/* <section class="hard-facts">
        <ul>
          <li>Passionate about software and clean systems</li>
          <li>Based in Vienna, Austria</li>
          <li>Fluent in German and English</li>
        </ul>
      </section> */}

      <section class="main-skills">
      <h2>Main Skills</h2>
        <div class="skills-list">
          <Pill image="/img/app/ideas.png" text={"C#"} color="#68217A" key="1" />
          <Pill image="/img/app/projects.png" text={"ASP.NET Web API"} color="	#007ACC" key="2" />
          <Pill image="/img/app/business.png" text={"Entity Framework"} color="#107C10" key="3" />
          <Pill image="/img/app/anything.png" text={"MSSQL"} color="	#CC2927" key="4" />
          <Pill image="/img/app/anything.png" text={"Blazor"} color="#512BD4" key="5" />
          <Pill image="/img/app/anything.png" text={"Visual Studio"} color="#5C2D91" key="6" />
          <Pill image="/img/app/anything.png" text={"Git"} color="#F05032" key="7" />
          <Pill image="/img/app/anything.png" text={"xUnit"} color="#5C2D91" key="8" />
        </div>
      </section>

      <section class="main-skills">
      <h2>Additional Concepts & Experience</h2>
        <div class="skills-list">
          <Pill text={"Design Patterns"} color="var(--blue)" key="1" />
          <Pill text={"Clean Code"} color="var(--blue)" key="2" />
          <Pill text={"Clean Architecture"} color="var(--blue)" key="3" />
          <Pill text={"Domain Driven Design"} color="var(--blue)" key="4" />
          <Pill text={"Swagger"} color="var(--blue)" key="5" />
          <Pill text={"Serilog"} color="var(--blue)" key="6" />
          <Pill text={"Hangfire"} color="var(--blue)" key="7" />
          <Pill text={"Azure DevOps"} color="var(--blue)" key="8" />
          <Pill text={"Frontend"} color="var(--blue)" key="9" />
          <Pill text={"WPF"} color="var(--blue)" key="9" />
          <Pill text={"PLC & HMI"} color="var(--blue)" key="10" />
        </div>
      </section>

      {/* <div className="detailed-cv">
        <section class="hard-facts">
        <ul>
          <li>🎓 Pursuing Bachelor in Business Information Systems at FH Technikum Wien</li>
          <li>💼 Years of professional experience as software developer</li>
          <li>💡 Passionate about software and clean systems</li>
          <li>📍 Based in Vienna, Austria</li>
          <li>🌐 Fluent in German and English</li>
          <li>⏰ Working full-time as software developer</li>
        </ul>
      </section>
      <section class="hard-facts">
        <ul>
          <li>🎓 Pursuing Bachelor in Business Information Systems at FH Technikum Wien</li>
          <li>💼 Years of professional experience as software developer</li>
          <li>💡 Passionate about software and clean systems</li>
          <li>📍 Based in Vienna, Austria</li>
          <li>🌐 Fluent in German and English</li>
          <li>⏰ Working full-time as software developer</li>
        </ul>
      </section>
      </div> */}

      

      <div className="buttonContainer" onClick={() => history.push('/projects')}>
        <Button text={textContent.button} icon={faChevronCircleRight} />
      </div>
    </AboutDescription>
  );
};

// Styled Components
const AboutDescription = styled.section`
  width: 100%;
  padding: 8rem 2vw;

.hard-facts {
  max-width: 650px;
  margin: 2rem auto 3rem;
  padding: 1.5rem 2rem;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
}

.hard-facts ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hard-facts li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
  color: #333;
  word-break: break-word;
}

@media (max-width: 480px) {
  .hard-facts {
    padding: 1rem 1rem;
  }
  .hard-facts li {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
}



.main-skills {
  max-width: 700px;
  margin: 0 auto 3rem;
  padding: 1.5rem 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.05);
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
}

.main-skills h2 {
  font-size: 1.6rem;
  color: #222;
  margin-bottom: 1rem;
  text-align: center;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}



@media (max-width: 480px) {
  .main-skills {
    padding: 1rem 1rem;
  }
  .main-skills h2 {
    font-size: 1.5rem;
  }
  .skill-pill {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

.detailed-cv{
  /* width: 100%; */
  max-width: 1100px;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: auto;
}


  h1{
    text-align: center;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #222;
  }

  hr{
    max-width: 400px;
    text-align: center;
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

const Paragraph = styled.p`
  font-size: 1rem;
  color: #374151; /* gray-700 */
  line-height: 1.6;
`;


export default PersonalSection;
