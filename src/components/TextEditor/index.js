import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'
import {
  Cont,
  EditorCont,
  Show,
  Heading,
  Image,
  TextCont,
  IconCont,
  Item,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {words: '', Bold: false, italic: false, underline: false}

  enterInput = event => {
    this.setState({words: event.target.value})
  }

  BoldText = () => {
    this.setState(prevState => ({Bold: !prevState.Bold}))
  }

  italicText = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  UnderlineText = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {words, Bold, italic, underline} = this.state
    return (
      <Cont>
        <EditorCont>
          <Show>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
              alt="text editor"
            />
          </Show>
          <TextCont>
            <IconCont>
              <Item>
                <Button
                  changeBold={Bold}
                  data-testid="bold"
                  onClick={this.BoldText}
                >
                  <VscBold size={20} />
                </Button>
              </Item>
              <Item>
                <Button
                  data-testid="italic"
                  changeBold={italic}
                  onClick={this.italicText}
                >
                  <GoItalic size={20} />
                </Button>
              </Item>
              <Item>
                <Button
                  data-testid="underline"
                  changeBold={underline}
                  onClick={this.UnderlineText}
                >
                  <AiOutlineUnderline size={20} />
                </Button>
              </Item>
            </IconCont>
            <TextArea
              rows="30"
              cols="55"
              onChange={this.enterInput}
              value={words}
              changeFamily={Bold}
              changeStyle={italic}
              changeTextDecoration={underline}
            />
          </TextCont>
        </EditorCont>
      </Cont>
    )
  }
}
export default TextEditor
