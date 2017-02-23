import React, { Component } from 'react';
import marked from 'marked';

import Pane from './sub-components/pane';
import Editor from './sub-components/editor';

import style from './index.styl';

class Workspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }


  getMockPraps() {
    return {
      worknote: {
        title: 'some note',
        content: 'some markdown *italic*',
        attachments: [],
        tags: [
          {
            name: '@work',
            color: '#f4f4f4',
            id: 10
          },
          {
            name: '@work',
            color: '#f4f4f4',
            id: 11
          }
        ],
        notebook: {
          name: 'Action pendingz'
        },
        user: null, // TODO: specify
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      notebook: {
        name: 'Action pendingz'
      },
      notes: [
        {
          id: 1,
          title: 'some note',
          content: 'some markdown *italic*',
          attachments: [],
          tags: [
            {
              name: '@work',
              color: '#f4f4f4',
              id: 10
            },
            {
              name: '@work',
              color: '#f4f4f4',
              id: 11
            }
          ],
          notebook: {
            name: 'Action pendingz'
          },
          user: null, // TODO: specify
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
        , {
          id: 2,
          title: 'some note',
          content: 'some markdown content',
          attachments: [],
          tags: [
            {
              name: '@work',
              color: '#f4f4f4',
              id: 10
            },
            {
              name: '@work',
              color: '#f4f4f4',
              id: 11
            }
          ],
          notebook: {
            name: 'Action pendingz'
          },
          user: null, // TODO: specify
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
        , {
          id: 3,
          title: 'some note',
          content: 'some markdown content',
          attachments: [],
          tags: [
            {
              name: '@work',
              color: '#f4f4f4',
              id: 10
            },
            {
              name: '@work',
              color: '#f4f4f4',
              id: 11
            }
          ],
          notebook: {
            name: 'Action pendingz'
          },
          user: null, // TODO: specify
          createdAt: Date.now(),
          updatedAt: Date.now()
        }
      ]
    }
  }

  render() {
    const praps = this.getMockPraps();
    return (
      <div className={ style.workspace }>
        <Pane
          notebook={ praps.notebook }
          notes={ praps.notes }
        />
        <Editor
          worknote={ praps.worknote }
          onChange={ () => { console.log('note was changed!') }}
        />
      </div>
    );
  }
}

export default Workspace;
