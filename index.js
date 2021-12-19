let jsonStore = {};
exports.toJson = function(array){
        if(!array)
    throw new Error("Input array toJson is empty");
    let indexTrack=0;
    array.forEach((data) => {
    jsonStore[`element${indexTrack}`] = data;
    indexTrack++;
    })  
    return jsonStore; 
}
exports.toJsonStrict = function(array,rules){
    if(!array)
    throw new Error("Input array toJsonStrict is empty");
    if(!rules)
    throw new Error("toJsonStrict requires rules");
    if(rules.length<array.length)
    throw new Error('Rules count and array bound mismatch');
    let indexTrack=0;
    array.forEach((data) => {
    jsonStore[rules[indexTrack]] = data;
    indexTrack++;
    })   
    return jsonStore;
}
