import React, { Component } from 'react';
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { Button } from 'reactstrap';



class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
             groups: [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }],
             items: [
                {
                  id: 1,
                  group: 1,
                  title: 'item 1',
                  start_time: moment(),
                  end_time: moment().add(1, 'hour')
                },
                {
                  id: 2,
                  group: 2,
                  title: 'item 2',
                  start_time: moment().add(-0.5, 'hour'),
                  end_time: moment().add(0.5, 'hour')
                },
                {
                  id: 3,
                  group: 1,
                  title: 'item 3',
                  start_time: moment().add(2, 'hour'),
                  end_time: moment().add(3, 'hour')
                }
              ]
          
        }
      }

    render() {
        return (
            <div>
            <Button color="danger" href="/">Home</Button>
    <Timeline
      groups={this.state.groups}
      items={this.state.items}
      defaultTimeStart={moment().add(-12, 'hour')}
      defaultTimeEnd={moment().add(12, 'hour')}
    />
            </div>
        );
    }
}

export default index;