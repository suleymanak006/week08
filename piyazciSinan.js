const fishFarm = [ 
    { 
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway", 
        season: "Winter", 
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan", 
        season: "Winter", 
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    { 
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),    
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom", 
        season: "Spring", 
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    { 
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),   
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland", 
        season: "Summer", 
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    { 
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),    
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France", 
        season: "Autumn", 
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Bluefish", 
        price: 13.70,
        entryDate: new Date(2021, 10, 11),  
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy", 
        season: "Winter", 
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    { 
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),    
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE", 
        season: "Summer", 
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    { 
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),  
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt", 
        season: "Summer", 
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    { 
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),   
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam", 
        season: "Summer", 
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    { 
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),    
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain", 
        season: "Winter", 
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },  
]
//1) Stok miktari 500 kg uzerinde olan baliklar...

const pStockOver500 = fishFarm.filter(x => {
    return x.stockVolumeInKg> 500 ;}).map(x=>x.fishType);          
console.log("1. Stok miktari 500 uzerinde olan baliklar:" + "  " + pStockOver500);
            
//2. Fiyat araligi 9-12 Frank olan baliklar...
const pFiyati9_12 = fishFarm.filter(x => { 
    return x.price>9  &&  x.price<12 ;}).map(x=>x.fishType); 
console.log("2. Fiyat araligi 9-12 frank arasi olan baliklar: " + "   "+pFiyati9_12);
            
//3. Sadece Bern'de kis sezonu satilan baliklar...
const pKisSezonu = fishFarm.filter(x => {
return x.saleLocations.includes('BE')  &&  x.season==='Winter'}).map(x=>x.fishType);  
console.log("3. Bern'de Kis sezonunda satilan baliklaiklar:" + "  " +pKisSezonu);
            
//4. Son kullanma tarihlerine gore baliklarin siralamasi.
let pSonKullanmaTarihi= fishFarm.sort((a,b) =>{
    return new Date(a.entryDate) - new Date(b.entryDate); }).map(x=>x.fishType); 
console.log("4. Son kullanma tarihlerine gore baliklarin siralamasi: " + "  "  + pSonKullanmaTarihi);
            
//5. Avrupa Birligi'nden gelen ve fiyati 10 Fr'dan dusuk olan baliklarin alfabetik siralanmasi.

const pAb10dusuk =fishFarm.filter( x => (x.originCountry==="Spain"|| x.originCountry==="GREECE"||
x.originCountry==="Italy"||x.originCountry==="France"|| x.originCountry==="Poland"
|| x.originCountry==="Norway") && x.price<10 ).map(x=>x.fishType); 
console.log("5. AB'den gelen ve fiyati 10 Fr'dan dusuk olan baliklarin alfabetik siralamasi:"
+ "  " +pAb10dusuk);   
            
// 6. Toplam balik stoku...
const pToplamBalikStoku = fishFarm.map(y=>y.stockVolumeInKg).reduce((z,a)=>z+a);
console.log("6. Toplam balik stoku:" +"  " +pToplamBalikStoku);
            
//7. En pahali olan balik hangisidir? 
const pEnPahaliBalik = fishFarm.reduce((x, y) => x > y.price? x: y.price ); 
console.log("7. En pahali balik:" + "  "+pEnPahaliBalik);
            
//8. En uzun sureli durabilen baliklar hangi ulkeden geliyor?            

            
//9. Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir? 
let pSonbaharKisOrtalamaFiyat= fishFarm.filter( x=> (x.season==="Winter"||x.season==="Autumn")) ;
const pSonbaharKisSezonu =fishFarm.filter( x =>{ return (x.season==="Winter"||x.season==="Autumn")})
.map(y=>{ return y.price}).reduce((z,a)=> z+a);
console.log("9. Sonbahar- Kis sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati:"+ "  "+
pSonbaharKisSezonu.toFixed(2)/pSonbaharKisOrtalamaFiyat.length);   
            
//10. Ticino Kantonu icin stoktaki balik...              
const pTicinoBalikStok= fishFarm.filter(x => {
    return x.saleLocations.includes('TI')}).map(y=>{ return y.stockVolumeInKg}).reduce((z,a)=> z+a);
console.log("10. Ticino'da stoktaki toplam balik mevcudu:" +"  " +pTicinoBalikStok);   
            
//11. Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji...

