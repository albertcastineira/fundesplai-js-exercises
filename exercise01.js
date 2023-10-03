var championName,moveSpeed,hasMana,baseMana,resource,champion,abilites;

championName = "Katarina";
moveSpeed = 335;
hasMana = false;
baseMana = null;
resource = undefined;
champion = Symbol("Katarina");
abilities = ["innate","bouncing_blade","preparation","shunpo","death_lotus"];


console.log(`Type: ${typeof(championName)}, Value: ${championName}`);
console.log(`Type: ${typeof(moveSpeed)}, Value: ${moveSpeed}`);
console.log(`Type: ${typeof(hasMana)}, Value: ${hasMana}`);
console.log(`Type: ${typeof(baseMana)}, Value: ${baseMana}`);
console.log(`Type: ${typeof(resource)}, Value: ${resource}`);
console.log(`Type: ${typeof(champion)}, Value: ${champion.description}`);
console.log(`Type: ${typeof(abilities)}, Value: ${abilities}`);

// Local scope
var gameName = "League Of Legends";

// Global scope
const companyName = "Riot Games";



