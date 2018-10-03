import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'jb-page-activity-log',
    templateUrl: 'activity.log.html',
})
export class ActivityLogPage {

    public activityLogs: any[] = [
        {
            type: 'Login',
            date: '1538475011000',
            country: 'Ukraine',
            ip: '91.227.183.54',
            source: 'Chrome 67.0.3396, Mac OS X 10.13.5, Other'
        },
        {
            type: 'Password Update',
            date: '1538388611000',
            country: 'Ukraine',
            ip: '91.227.183.54',
            source: 'Chrome 67.0.3396, Mac OS X 10.13.5, Other'
        },
        {
            type: 'Verification Level 2',
            date: '1538388311000',
            country: 'Ukraine',
            ip: '91.227.183.54',
            source: 'Chrome 67.0.3396, Mac OS X 10.13.5, Other'
        },
        {
            type: 'Login',
            date: '1533099971000',
            country: 'Ukraine',
            ip: '91.227.183.54',
            source: 'Chrome 67.0.3396, Mac OS X 10.13.5, Other'
        }
    ];

    public checkDate(index: number, message: any) {

        const time = Math.floor((message.date) / 8640000) * 8640000;
        let prevTime = null;

        if (this.activityLogs[index - 1]) {
            prevTime = Math.floor((this.activityLogs[index - 1].date) / 8640000) * 8640000;
        }

        return time !== prevTime;
    }
}
