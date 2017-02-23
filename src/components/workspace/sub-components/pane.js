import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import PlainTextRenderer from 'marked-plaintext';
const renderer = new PlainTextRenderer();

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import NoteAddIcon from 'material-ui/svg-icons/action/note-add';
import { grey400, green400 } from 'material-ui/styles/colors';

import Pill from '../../common/pill';
import style from './pane.styl';

class Pane extends Component {
  constructor(props) {
    super(props);
  }

  getDeleteButton(cb) {
    return (
      <IconButton
        tooltip={ 'Remove note' }
        tooltipPosition={ 'bottom-left' }
        onClick={ cb }
      >
        <DeleteIcon color={ grey400 }/>
      </IconButton>
    );
  }

  onDelete(note) {
    console.log('Deleting note', note.id);
  }

  renderNoNotebookSelected() {
    return (
      <p>Select a notebook in the list to the left</p>
    );
  }

  renderNotebookList() {
    return (
      <List>
        <IconButton
          tooltip={ 'Create note' }
          tooltipPosition={ 'bottom-right' }
          onClick={ () => console.log('creating new note ') }
          className={ style['add-new-note'] }
        >
          <NoteAddIcon color={ green400 } />
        </IconButton>
        <Subheader className={ style['notebook-title'] }>
          { this.props.notebook.name }
        </Subheader>
        <Divider />
        { this.props.notes.map(note => {
          return (
            <div key={ note.id }>
              <ListItem
                rightIconButton={ this.getDeleteButton(() => this.onDelete(note)) }
              >
                <p className={ style.title }>{ note.title }</p>
                <p className={ style.notetext }>
                  { marked(note.content, { renderer: renderer }) }
                </p>
                { note.tags.map(function(tag) {
                  return (<Pill key={ tag.id } text={ tag.name } />);
                })}
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    );
  }

  render() {
    return (
      <div className={ style.pane }>
        { this.props.notebook === undefined ?
          this.renderNoNotebookSelected() : this.renderNotebookList()
        }
      </div>
    );
  }
}

Pane.propTypes = {
  notebook: PropTypes.shape(),
  notes: PropTypes.array.isRequired
};

export default Pane;
