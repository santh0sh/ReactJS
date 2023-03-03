import React from 'react';

import { messageService } from '@/_services';
import { Demo1 } from '../App/rxjsdemos/Demo1';
import {Demo2} from '../App/rxjsdemos/Demo2'
import { Demo3 } from '../App/rxjsdemos/Demo3'
import { Demo4} from '../App/rxjsdemos/Demo4'

class HomePage extends React.Component {
    sendMessage() {
        // send message to subscribers via observable subject
        messageService.sendMessage('Message from Home Page Component to App Component!');
    }

    clearMessages() {
        // clear messages
        messageService.clearMessages();
    }

    render() {
        return (
            <div>
                <h2>React + RxJS Component Communication by DSR Murthy</h2>
                <button onClick={this.sendMessage}
                 className="btn btn-primary">Send Message</button>
                <button onClick={this.clearMessages} 
                 className="btn btn-secondary">Clear Messages</button>  

                 <Demo4/>              
            </div>
        );
    }
}

export { HomePage };