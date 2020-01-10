import styled from 'styled-components';
import { Formik } from 'formik';

export const Contained = styled.div`
  width: 350px;
  margin: auto;
  h2{
    text-align: center;
    color: #584949;
  }
`
export const Join = styled.button`
  border: 1px solid #d5d1d1;
  background-color: #0c67ae;
  width: 60%;
  margin: auto;
  color: #fff;
  display: block;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 14px;
  text-decoration: none;
  &:hover{
    background-color: #0c67aeed;
  }
`
export const SimpleForm = styled.form`
  width: 100%;
  text-align: center;
`
export const Form = styled(Formik)`
  background-color: #fff;
  padding: 40px 50px 80px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px -7px;
  margin-top: 0;
  width: 400px;
  h1{
    margin: 20px 0;
  }
`
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 4px;
  border-radius: 4px;
  margin-bottom: 8px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  ${({errBorder}) => errBorder ? 'border-color: #ec5656f2' : 'border-color: #bdbdbd'}
  &:focus{
    outline: none;
    box-shadow: none;
    ${({errBorder}) => errBorder ? 'border-color: #8f8d8d' : 'border-color: #a6a0a0'}
  }
`
export const Error = styled.div`
  font-size: 12px;
  color: #d11124;
  margin-bottom: 4px;
`
export const SignIn = styled.input`
  color: #fff;
  background-color: #0000ff;
  width: 300px;
  padding: 8px 4px;
  display: block;
  text-align: center;
  margin:0 auto 20px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  &:hover{
    background-color: #3434e8;
  }
`

export const ErrorMessage = styled.div`
  margin-top: 10px;
  text-align: center;
`