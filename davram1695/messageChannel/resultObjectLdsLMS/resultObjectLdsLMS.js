/**
 * Created by Dragos on 01/26/21.
 */

import { LightningElement,api,wire,track } from 'lwc';
import getAccountsType from '@salesforce/apex/AccountLDSController.getAccountsByType';
import updateAccounts from '@salesforce/apex/AccountLDSController.updateAccounts'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import ID_FIELD from '@salesforce/schema/Account.Id';
import updateRecord from 'lightning/uiRecordApi';
import {showToastEvent} from 'lightning/platformShowToastEvent';
import { getRecordNotifyChange } from 'lightning/uiRecordApi';
import {subscribe, unsubscribe, MessageContext} from 'lightning/messageService';
import filterAccountMC from '@salesforce/messageChannel/FilterAccountMessageChannel__c';

const COLUMNS =[{label: 'Name' ,fieldName: 'Name', editable: true},
                           {label: 'Type', fieldName: 'Type', editable: false}
               ];

export default class ResultObjectLds extends LightningElement {
columns = COLUMNS;
data=[];
subscription = null;
draftValues=[];
error;
@api selectedTypeAccount='';
@track selectTypeForAccount;
@wire(MessageContext)
messageContext;

connectedCallback(){
 /*setInterval(()=>{
      console.log('this selectedTypeAccount ' + this.selectedTypeAccount);

    },1000);
*/
if(!this.subscription){
    this.subscription = subscribe(
        this.messageContext,
        filterAccountMC,
        message=>this.applyFilter(message)
    );
}
}

disconnectedCallBack(){
    unsubscribe(this.subscription);
    this.subscription =null;
}
 applyFilter(message){
     this.selectedAccount = message.filterKey;
     console.log('Filter apply selected Accout ' + this.selectedAccount);
     console.log('Filter apply selected message ' + message.filterKey);
       getAccountsType({type: this.selectedAccount}).then(result => {
           this.data = result;
           console.log('Result ' + result[0].Type + result[0].Name);
       }).catch(error => {
           this.error = error;
       });
       //eval("$A.get('e.force:refreshView').fire();");
       }

    handleSave(event) {
       const updatedFields = event.detail.draftValues;

       // Prepare the record IDs for getRecordNotifyChange()
       const notifyChangeIds = updatedFields.map(row => { return { "recordId": row.Id } });

      // Pass edited fields to the updateContacts Apex controller
        updateAccounts({data: updatedFields})
       .then(result => {
           console.log(JSON.stringify("Apex update result: "+ result));
           this.showToastMessage('Test','account inserted');


       // Refresh LDS cache and wires
       console.log('getRecordNotifyChange ' + notifyChangeIds);
       getRecordNotifyChange(notifyChangeIds);

       // Display fresh data in the datatable
      this.draftValues = [];


      }).catch(error => {
          this.dispatchEvent(
               new ShowToastEvent({
                   title: 'Error updating or refreshing records',
                   message: error.message,
                   variant: 'error'
               })
           );
       });
   }

   showToastMessage(title, message, variant)
   {
       this.dispatchEvent(new ShowToastEvent({
           title : title,
           message : message,
           variant : variant||'success'
       }))
   }
   getSelectedName(event){
       const selectedRows = event.detail.selectedRows;
       //display that fieldName for selected Rows

       for(let i = 0; i < selectedRows.length; i++){
           alert('You selected: ' + selectedRows[i].Name);
           console.log('You selected: ' + selectedRows[i].Name);
       }
   }

}