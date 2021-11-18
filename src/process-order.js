


function processOrder(organName, cash, price, bonus_ratio) {
    let organNameToCountDict = {};
    let organCount = Math.floor(cash/price);
    organNameToCountDict[organName] = organCount;

    let bonusCount = Math.floor(organCount / bonus_ratio);
    let freeOrgans = getFreeOrgans(organName);
    for (const freeOrgan of freeOrgans){
        bonusOrganCount = freeOrgan["count"] * bonusCount
        bonusOrganName = freeOrgan['organ']
        if (bonusOrganName in organNameToCountDict){
            organNameToCountDict[bonusOrganName] += bonusOrganCount
        }
        else{
            organNameToCountDict[bonusOrganName] = bonusOrganCount
        }
    }
  return organNameToCountDict;
}

function orderSummary(organToCountDict){
    const allOrganNames = ['heart', 'liver', 'lung']
    let orderSummary = "";
    for (const organName of allOrganNames){
        if (organName in organToCountDict)
        {
            orderSummary += organName + " " + organToCountDict[organName] + " "
        }
        else
        {
            orderSummary += organName + " 0 " 
        }
    }
    return orderSummary.trim();
}

function getFreeOrgans(organ)
{
    if(organ == "heart"){
        return [{'organ': 'heart', 'count': 1}]
    }
    if(organ == "liver"){
        return [{'organ': 'lung', 'count': 1}]
    }
    if(organ == "lung"){
        return [{'organ': 'liver', 'count': 1}, {'organ': 'heart', 'count': 1}]
    }

}


module.exports = { processOrder, orderSummary, getFreeOrgans };