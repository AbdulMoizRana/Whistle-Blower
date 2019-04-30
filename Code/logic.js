/**
 * Adding Case after logging in.
 * @param {org.whistle.blower.statusPending} pending 
 * @transaction
 */

async function changeToPending(pending) {

    let case1 = pending.cases

    if (case1.status == 'PENDING'){
        throw new Error('Already Changed The Status')
    }
    else{
        case1.status = "PENDING"
    }

    const case1Reg = await getAssetRegistry('org.whistle.blower.Case')
    await case1Reg.update(case1)
}

/**
* Adding Case after logging in.
* @param {org.whistle.blower.statusInProgress} in_progress 
* @transaction
*/

async function changeToInProgress(in_progress) {

   let case1 = in_progress.cases

   if (case1.status == 'IN_PROGRESS'){
       throw new Error('Already Changed The Status')
   }
   else{
       case1.status = "IN_PROGRESS"
   }

   const case1Reg = await getAssetRegistry('org.whistle.blower.Case')
   await case1Reg.update(case1)
}

/**
* Adding Case after logging in.
* @param {org.whistle.blower.statusRejected} rejected 
* @transaction
*/

async function changeToRejected(rejected) {

   let case1 = rejected.cases

   if (case1.status == 'REJECTED'){
       throw new Error('Already Changed The Status')
   }
   else{
       case1.status = "REJECTED"
   }

   const case1Reg = await getAssetRegistry('org.whistle.blower.Case')
   await case1Reg.update(case1)
}

/**
* Adding Case after logging in.
* @param {org.whistle.blower.statusCompleted} completed 
* @transaction
*/

async function changeToCompleted(completed) {

   let case1 = completed.cases

   if (case1.status == 'COMPLETED'){
       throw new Error('Already Changed The Status')
   }
   else{
       case1.status = "COMPLETED"
   }

   const case1Reg = await getAssetRegistry('org.whistle.blower.Case')
   await case1Reg.update(case1)
}

/**
* Adding Case after logging in.
* @param {org.whistle.blower.statusRewarded} rewarded - Case
* @transaction
*/

async function changeToRewarded(rewarded) {

   let case1 = rewarded.cases

   if (case1.status == 'REWARDED'){
       throw new Error('Already Changed The Status')
   }
   else{
       case1.status = "REWARDED"
   }

   const case1Reg = await getAssetRegistry('org.whistle.blower.Case')
   await case1Reg.update(case1)
}



/**
 * Assigning Case to Organization
 * @param {org.whistle.blower.assignCase} case_assign
 * @transaction
 */

async function assigningCase(case_assign) {

   let case1 = case_assign.cases;
   let org = case_assign.org;
   let adm = case_assign.admin;

   if(!org.assignedCases){
       org.assignedCases = [];
   }

   org.assignedCases.push(case_assign);

    const orgReg = await getParticipantRegistry('org.whistle.blower.Organization')
    await orgReg.update(org)

    const case1Reg = await getAssetRegistry('org.whistle.blower.Case')
    await case1Reg.update(case1)
 
}    


/**
 * Track the trade of a commodity from one trader to another
 * @param {org.whistle.blower.addEvidenceToCase} evd - the trade to be processed
 * @transaction
 */
async function addingEvidencesToCase(evd) {

    let eviden = evd.evid;
    let ca = evd.cases;

    if(!ca.all){
        ca.all = []
    }

    ca.all.push(evd);

    const case1Reg = await getAssetRegistry('org.whistle.blower.Case')
    await case1Reg.update(evd.cases);
}


