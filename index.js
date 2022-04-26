// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(location1, location2) {
    const distance = Math.abs(location2 - location1);
    return distance * 264;
}

function calculatesFarePrice(location1, location2) {
    const distance = distanceTravelledInFeet(location1, location2);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}