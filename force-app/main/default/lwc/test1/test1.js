import { LightningElement } from "lwc";
import getOrgList from "@salesforce/apex/OrgManagementCustomer.getOrgList";
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
  orgs = [];

  connectedCallback() {
    getOrgList()
      .then((res) => {
        let res1 = JSON.parse(JSON.stringify(res));
        res1.forEach((element) => {
          if (element.Org_Users__r) {
            element.firstUserName = element.Org_Users__r[0].Name;
          }
        });
        console.log(res1);

        this.orgs = res1;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
