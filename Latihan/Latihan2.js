var gajik = 4500000;
var transport = 10000;
var infak =  50000;
var bpjs = 250000;
var jumlahharikerja = 24
var potonganpajak = gajik * 2.5 / 100

console.log("gaji kotor Rp. " + gajik);
console.log("===================");
console.log("Potongan Pajak 2,5%: Rp." + potonganpajak);
console.log("Potongan BPJS Rp. " + bpjs);
console.log("Potongan Infak Rp. " + infak);
console.log("===================");
console.log("Total Potongan Rp. " + (potonganpajak+infak+bpjs));
console.log("===================");
console.log("Tunjangan Transport Rp. " + transport);
console.log("Total Hari Kerja = " + jumlahharikerja);
console.log("===================");
console.log("Total Tunjangan : " + transport * jumlahharikerja)
console.log("===================");
console.log("Perhitungan Gaji: " );
console.log("(Gaji kotor - Potongan) + Tunjangan")
console.log("(" + gajik + "-" +  potonganpajak+infak+bpjs +")" + transport*jumlahharikerja);
console.log("===================");
console.log("Gaji Bersih : " + (gajik - potonganpajak - infak - bpjs + transport * jumlahharikerja));

