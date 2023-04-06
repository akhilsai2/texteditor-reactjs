import styled from 'styled-components'

export const Cont = styled.div`
  background-color: #25262c;
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const EditorCont = styled.div`
  background-color: #1b1c22;
  height: 600px;
  width: 60%;
  padding: 10px;
  display: flex;
`
export const Show = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 32px;
  padding-left: 15px;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 30px;
  font-family: 'Roboto';
  margin-top: 40px;
`
export const Image = styled.img`
  width: 350px;
  margin-top: 40px;
`
export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const IconCont = styled.ul`
  background-color: #25262c;
  border: 1px solid #334155;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 0px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  width: 462px;
  height: 55px;
  list-style-type: none;
  margin: 0px;
`
export const Item = styled.li`
  margin-right: 5px;
`
export const Button = styled.button`
  background-color: transparent;
  border: 0px solid white;

  color: ${props => (props.changeBold ? '#faff00' : '#f1f5f9')};
  height: 20px;
`
export const TextArea = styled.textarea`
  background-color: #25262c;
  border: 1px solid #334155;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
  color: #cbd5e1;
  padding: 20px;
  font-weight: ${props => (props.changeFamily ? 'bold' : 'normal')};
  font-style: ${props => (props.changeStyle ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.changeTextDecoration ? 'underline' : 'normal'};
`
