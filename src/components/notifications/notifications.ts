import {Component} from '@angular/core';

@Component({
    selector: 'jb-notifications',
    templateUrl: 'notifications.html'
})
export class NotificationsComponent {

    public objectKeys = Object.keys;
    public table: object = {
        password: {
            title: 'Password Change',
            sections: {
                push: {
                    isActive: false,
                    isDisabled: false
                },
                email: {
                    isActive: false,
                    isDisabled: false
                },
                sms: {
                    isActive: false,
                    isDisabled: false
                }
            }
        },
        pin: {
            title: 'PIN Code Change',
            sections: {
                push: {
                    isActive: true,
                    isDisabled: true
                },
                email: {
                    isActive: false,
                    isDisabled: false
                },
                sms: {
                    isActive: false,
                    isDisabled: true
                }
            }
        },
        recieved: {
            title: 'Coins Received',
            sections: {
                push: {
                    isActive: false,
                    isDisabled: false
                },
                email: {
                    isActive: true,
                    isDisabled: false
                },
                sms: {
                    isActive: false,
                    isDisabled: false
                }
            }
        },
        send: {
            title: 'Send Coins',
            sections: {
                push: {
                    isActive: true,
                    isDisabled: false
                },
                email: {
                    isActive: false,
                    isDisabled: false
                },
                sms: {
                    isActive: true,
                    isDisabled: false
                }
            }
        },
        exchange: {
            title: 'Exchange Coins',
            sections: {
                push: {
                    isActive: false,
                    isDisabled: false
                },
                email: {
                    isActive: true,
                    isDisabled: false
                },
                sms: {
                    isActive: true,
                    isDisabled: false
                }
            }
        },
        purchase: {
            title: 'Coin Purchase',
            sections: {
                push: {
                    isActive: true,
                    isDisabled: false
                },
                email: {
                    isActive: false,
                    isDisabled: false
                },
                sms: {
                    isActive: false,
                    isDisabled: false
                }
            }
        }
    };

    public changeModel() {
        console.log('changeModel');
    }
}
