/**
 * Created by Dragos on 01/26/21.
 */

import { LightningElement, track,api,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountLDSController.getAccountsType';
import {publish, MessageContext} from 'lightning/messageService';
import filterAccountMC from '@salesforce/messageChannel/FilterAccountMessageChannel__c';
export default class SelectObjTypeLds extends LightningElement {
@track selectedAccount;
get searchOption() {
                      return [
                          {label: 'Customer - Channel', value : 'CustomerChannel'},
                          {label: 'Customer - Direct', value:'CustomerDirect'},
                      ];
                  }
error;
@wire(MessageContext)
messageContext;

@wire(getAccounts)
searchOptionAccount({data,error}){
    if(data){
        console.log('DAta' + data[0].Type);
       /* this.searchOption = data.map(accType =>{
          return{
            label: accType.Type,
            value:accType.Id
            };
        });
        this.error=undefined;*/
    }else if(error){
    this.searchOption = undefined;
    this.error=error;
    }
}


handleSearchAccount(event){
this.selectedAccount = event.target.options.find(opt=>opt.value === event.detail.value).label;
console.log('Account' + this.selectedAccount);
const selectedEvent = new CustomEvent('accountselected',{detail:this.selectedAccount});
this.dispatchEvent(selectedEvent);
}

handleFilter(){
console.log('FilterBoxValue = ' + this.selectedAccount);
const payLoad = {filterKey : this.selectedAccount};
publish(this.messageContext, filterAccountMC, payLoad);

}

}