import { LightningElement } from 'lwc';
import getOrgList from '@salesforce/apex/OrgManagementCustomer.getOrgList';
export default class Test1 extends LightningElement {
   /* contacts = [
        {
            Id: 'user1',
            Name: 'jkl',
            ip: 'asdfg@123.com',
        },
        {
            Id: 'user2',
            Name: '1111',
            ip: '123456@123.com',
        },
        {
            Id: 'user3',
            Name: 'chengbo',
            ip: 'homeworkds@123.com',
        },
    ];*/
    orgs=[];
    connectedCallback(){
        console.log('sfsag');
        getOrgList().then((res)=>{
            console.log(res);
           this.orgs=res;
        }).catch(err=>{
            console.log(err);
        })
    }
}