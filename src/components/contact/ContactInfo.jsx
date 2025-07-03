import styled from 'styled-components';

function ContactInfo({ infoText }) {

  return (
    <InfoWrapper>
      <div className="textSection">
        <h1>{infoText.heading}</h1>
      </div>
    </InfoWrapper>
  );
};

// Styled Components
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 12px;
  padding: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  margin: 0 .5rem;
  margin-bottom: .5rem;
  
  .textSection{
    max-width: 350px;
    h1{
      margin-bottom: .6rem;
      padding-bottom: .6rem;
      font-weight: 600;
      color: #556;
      border-bottom: 2px solid #e4e4e4;
    }
  }
`;

export default ContactInfo;
