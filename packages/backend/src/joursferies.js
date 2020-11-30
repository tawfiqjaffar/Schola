function JoursFeries (an){
	var JourAn = new Date(an, "00", "01")
	var FeteTravail = new Date(an, "04", "01")
	var Victoire1945 = new Date(an, "04", "08")
	var FeteNationale = new Date(an,"06", "14")
	var Assomption = new Date(an, "07", "15")
	var Toussaint = new Date(an, "10", "01")
	var Armistice = new Date(an, "10", "11")
	var Noel = new Date(an, "11", "25")
	var SaintEtienne = new Date(an, "11", "26")
	var G = an%19
	var C = Math.floor(an/100)
	var H = (C - Math.floor(C/4) - Math.floor((8*C+13)/25) + 19*G + 15)%30
	var I = H - Math.floor(H/28)*(1 - Math.floor(H/28)*Math.floor(29/(H + 1))*Math.floor((21 - G)/11))
	var J = (an*1 + Math.floor(an/4) + I + 2 - C + Math.floor(C/4))%7
	var L = I - J
	var MoisPaques = 3 + Math.floor((L + 40)/44)
	
	var JourPaques = L + 28 - 31*Math.floor(MoisPaques/4)
	var Paques = new Date(an, MoisPaques-1, JourPaques)
	var VendrediSaint = new Date(an, MoisPaques-1, JourPaques-2)
	var LundiPaques = new Date(an, MoisPaques-1, JourPaques+1)
	var Ascension = new Date(an, MoisPaques-1, JourPaques+39)
	var Pentecote = new Date(an, MoisPaques-1, JourPaques+49)
	var LundiPentecote = new Date(an, MoisPaques-1, JourPaques+50)

	var viewData = {
		date : []
	};
	var jsonData = {};
	jsonData["Event"] = "JourAn";
	jsonData["Date"] = JourAn;
	viewData.date.push(jsonData);
	var jsonData = {};

	jsonData["Event"] = "VendrediSaint";
	jsonData["Date"] = VendrediSaint;
	viewData.date.push(jsonData);
	var jsonData = {};

	jsonData["Event"] = "Paques";
	jsonData["Date"] = Paques;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "LundiPaques";
	jsonData["Date"] = LundiPaques;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "FeteTravail";
	jsonData["Date"] = FeteTravail;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "Victoire1945";
	jsonData["Date"] = Victoire1945;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "Ascension";
	jsonData["Date"] = Ascension;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "Pentecote";
	jsonData["Date"] = Pentecote;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "LundiPentecote";
	jsonData["Date"] = LundiPentecote;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "FeteNationale";
	jsonData["Date"] = FeteNationale;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "Assomption";
	jsonData["Date"] = Assomption;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "Toussaint";
	jsonData["Date"] = Toussaint;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "Armistice";
	jsonData["Date"] = Armistice;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "Noel";
	jsonData["Date"] = Noel;
	viewData.date.push(jsonData);
	var jsonData = {};
	jsonData["Event"] = "SaintEtienne";
	jsonData["Date"] = SaintEtienne;
	viewData.date.push(jsonData);
	return viewData
}


module.exports = {JoursFeries};