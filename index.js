// Code your solution in this file!
function distanceFromHqInBlocks(location){
    const hq = 42;
    const blockNumber = location < 42 ? hq -location : location - hq;
    return blockNumber;
}

function distanceFromHqInFeet(blockNumber){
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination){
    const distance = start < destination ? (destination - start) * 264 : (start - destination) * 264;
    return distance;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    
    if(distance <= 400){
        return 0;
    
    } else if (distance > 400 && distance <= 2000) {
        return .02 * (distance - 400);  
    
    } else if(distance > 2000 && distance < 2500) {
        return 25;
    
    } else {
        return 'cannot travel that far';
      }
}



   
  

