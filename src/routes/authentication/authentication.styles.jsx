import styled from "styled-components";
export const AuthenticationContainer = styled.div`

.forms-container {
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
  @media (max-width: 700px){
    flex-direction: column;
    margin:0;
    padding:0;
  }
}

`;
