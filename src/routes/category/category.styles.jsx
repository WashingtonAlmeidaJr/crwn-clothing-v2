import styled from 'styled-components';
export const CategoryContainer = styled.div`
.category-container{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 20px;
    row-gap:50px;

    .title{
        font-size: 8px;
        margin-top:25px;    
    }
}
`;