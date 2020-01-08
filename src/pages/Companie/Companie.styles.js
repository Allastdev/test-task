import styled from 'styled-components';


export const Container = styled.div`
    width: 600px;
    text-align: center;
    margin: 60px auto;
    background-color: #eeebe1;
    padding: 20px;
  `

  export const AddReview = styled.button`
  display: block;
  margin: auto;
  padding: 6px 8px;
  border-radius: 4px;
  border: 1px solid #fabc7a;
  background-color: #fff;
  color: #d38b3e;
  font-weight: bold;
  cursor: pointer;
` 

export const Review = styled.textarea`
    padding: 8px 4px;
    border-radius: 4px;
    display: block;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    width: 300px;
    margin: 20px auto
    resize: none;
    height: 80px;
    &:focus{
      outline: none}
`
export const Select = styled.select`
  display: block;
  width: 300px;
  padding: 8px 4px;
  border-radius: 4px;
  margin: 20px auto;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  &:focus{
    outline: none;
  }
`