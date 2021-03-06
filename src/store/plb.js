import router from "@/router/";
import countriesMock from "@/_mocks_/countries";
import currencyMock from "@/_mocks_/currency";
import axios from "axios";
import { AESDecrypt, AESEncrypt} from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;


const plb = {
  state: {
    reportId: "",
    stepper: 1,
    loading: {
      loadingReports: false,
    },
    report: {
      jenisPemberitahuan: "",
      diAjukanDiKantor: "Tanjungpinang",
      jenisDokumenBC: "",
    },
    reports: {
      data: [
        {
          id: "1",
          exportir: "Bernhard Inc",
          nomor: "1",
          tanggal: "20-02-2020",
          jenisPemberitahuan: "pemasukan",
          jenisDokumen: "BC",
          nomorDokumen: "17783",
          voyageKapal: "17783",
          namaKapal: "Ziemann - Grant",
          bendera: "INA",
        },
      ],
    },
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    constant: {
      pemasukan: "Pemasukan",
      pengeluaran: "Pengeluaran",
    },
    itemJenisPemberitahuan: ["Pemasukan", "Pengeluaran"],
    itemJenisDokumenBCPemasukan: [
      "BC 1.6 (LDP)",
      "BC 4.0 (TLDPP)",
      "BC 2.7 (PLB, KB, TBB, TLB, TPPB, KDUB)",
      "PPB PLB Lokasi Lain (Satu Izin)",
      "PP-FTZ 02 (FTZ)",
    ],
    itemJenisDokumenBCPengeluaran: [
      "BC 2.8 TLDDP (Ex. Impor)",
      "BC 3.3+P3BET (LDP)",
      "BC 4.1 TLDDP (Ex. Lokal)",
      "BC 2.7 (PLB, KB, TBB, TLB, TPPB, KDUB)",
      "PPB PLB Lokasi Lain (Satu Izin)",
      "BC 2.8 & PP-FTZ 02 (FTZ)",
    ],
    itemCaraPembayaran: [
      "EXW",
      "FCA",
      "CPT",
      "CIP",
      "DAP",
      "DPU",
      "DDP",
      "CFR",
      "FOB",
      "FAS",
      "CIF",
    ],
    itemDokumenPO: [
      { name: "PO-0001" },
      { name: "PO-0002" },
      { name: "PO-0003" },
    ],
    itemJenisIdentitasPenjual: ["NPWP", "KTP"],
    itemJenisIdentitasPengirim: ["NPWP", "KTP"],
    itemJenisIdentitasPengusahaPLB: ["NPWP", "KTP"],
    itemJenisIdentitasPembeli: ["NPWP", "KTP"],
    itemJenisIdentitasPpjk: ["NPWP", "KTP"],
    itemValuta: currencyMock.codes,
    itemCaraAngkut: ["Laut", "Udara", "Darat"],
    itemBendera: countriesMock,
    itemTempatPenimbunan: [],
    selectedDokumenPO: [],
    // payload save
    dokumenPemasukan: {
      nomorDokumenPemasukan: "",
      tanggalDokumenPemasukan: "",
    },
    dokumenTambahan: {
      nomorBC10: "",
      nomorBC11: "",
      nomorBL: "",
      tanggalBC10: "",
      tanggalBC11: "",
      tanggalBL: "",
    },
    dataPelabuhan: {
      pelabuhan: "",
      status: "",
    },
    dataKapal: {
      voyageKapal: "",
      benderaKapal: "",
      namaKapal: "",
      tanggalKedatangan: "",
      tanggalKeberangkatan: "",
    },
    identitasBarang: {
      negaraAsal: "",
      jenisBarang: 0,
      nilaiBarang: 0,
      caraPembayaran: "",
      asalBarang: "",
      jumlahBarang: 0,
      jumlahKemasan: 0,
      nomorPO: "",
    },
    penjualBarang: {
      jenisIdentitasPenjual: "",
      namaPenjual: "",
      nomorIdentitasPenjual: "",
      alamatPenjual: "",
    },
    pengirimBarang: {
      jenisIdentitasPengirim: "",
      namaPengirim: "",
      nomorIdentitasPengirim: "",
      alamatPengirim: "",
    },
    pengusahaPLB: {
      jenisIdentitasPengusahaPLB: "",
      namaPengusahaPLB: "",
      nomorIdentitasPengusahaPLB: "",
      alamatPengusahaPLB: "",
    },
    pembeliBarang: {
      jenisIdentitasPembeli: "",
      namaPembeli: "",
      nomorIdentitasPembeli: "",
      alamatPembeli: "",
    },
    ppjk: {
      jenisIdentitasPpjk: "",
      namaPpjk: "",
      nomorIdentitasPpjk: "",
      alamatPpjk: "",
    },
    mataUang: {
      valuta: "",
      freight: 0,
      NDPBMKurs: 0,
      cif: 0,
      transaksiLainnya: "",
      hargaPenyerahan: "",
    },
    dataPengangkutan: {
      caraAngkut: "",
      bendera: "",
      namaPengangkut: "",
      nomorVoyFlightPol: "",
    },
    beratDanVolume: {
      beratMuatan: 0,
      beratKapalDanMuatan: 0,
      volume: 0,
    },
    tempatPenimbunan: {
      tempatPenimbunan: "",
      perkiraanTanggalPengeluaran: "",
      isTempatPenimbunan: false,
    },
    // end payload
    dataBarang: {
      kodeBarang: "",
      namaBarang: "",
      uraian: "",
      nettoBruttoVolume: "",
      satuanKemasan: "",
      stock: "",
      posTarif: "",
      nilaiPabeanHargaPenyerahan: "",
      bm: "",
      ppn: "",
      ppnbm: "",
      cukai: "",
    },
    listBarang: [],
  },
  mutations: {
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    SET_LOADING_PLB(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_REPORT_PLB(state, payload) {
      state.report[payload.key] = payload.value;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
    SET_STEPPER(state, payload) {
      state.stepper = payload;
      localStorage.setItem("stepper", payload);
    },
    SET_SELECTED_DOKUMEN_PO(state, payload) {
      state.selectedDokumenPO = payload;
    },
    DELETE_SELECTED_DOKUMEN_PO(state, payload) {
      const index = state.selectedDokumenPO.indexOf(payload);
      if (index != -1) {
        state.selectedDokumenPO.splice(index, 1);
      }
    },
    SET_DOKUMEN_PEMASUKAN(state, payload) {
      state.dokumenPemasukan[payload.key] = payload.value;
    },
    SET_DOKUMEN_TAMBAHAN(state, payload) {
      state.dokumenTambahan[payload.key] = payload.value;
    },
    SET_DATA_PELABUHAN(state, payload) {
      state.dataPelabuhan[payload.key] = payload.value;
    },
    SET_DATA_KAPAL(state, payload) {
      state.dataKapal[payload.key] = payload.value;
    },
    SET_IDENTITAS_BARANG(state, payload) {
      state.identitasBarang[payload.key] = payload.value;
    },
    SET_PENJUAL_BARANG(state, payload) {
      state.penjualBarang[payload.key] = payload.value;
    },
    SET_PENGIRIM_BARANG(state, payload) {
      state.pengirimBarang[payload.key] = payload.value;
    },
    SET_PENGUSAHA_PLB(state, payload) {
      state.pengusahaPLB[payload.key] = payload.value;
    },
    SET_PEMBELI_BARANG(state, payload) {
      state.pembeliBarang[payload.key] = payload.value;
    },
    SET_PPJK(state, payload) {
      state.ppjk[payload.key] = payload.value;
    },
    SET_MATA_UANG(state, payload) {
      state.mataUang[payload.key] = payload.value;
    },
    SET_DATA_PENGANGKUTAN(state, payload) {
      state.dataPengangkutan[payload.key] = payload.value;
    },
    SET_BERAT_DAN_VOLUME(state, payload) {
      state.beratDanVolume[payload.key] = payload.value;
    },
    SET_ITEM_TEMPAT_PENIMBUNAN(state, payload) {
      state.itemTempatPenimbunan = [...state.itemTempatPenimbunan, payload];
    },
    SET_TEMPAT_PENIMBUNAN(state, payload) {
      state.tempatPenimbunan[payload.key] = payload.value;
    },
    SET_LIST_BARANG(state, payload) {
      state.listBarang = [...state.listBarang, payload];
    },
    DELETE_LIST_BARANG(state, payload) {
      const index = state.listBarang.indexOf(payload);
      if (index != -1) {
        state.listBarang.splice(index, 1);
      }
    },
    UPDATE_LIST_BARANG(state, payload) {
      console.log(payload);
      const temp = [...state.listBarang];
      state.listBarang = [];
      state.listBarang = temp.map((ele, ind) => {
        if (ind === payload.index) {
          ele = Object.assign({}, payload.data);
        }
        return ele;
      });
    },
    SET_DATA_BARANG(state, payload) {
      state.dataBarang[payload.key] = payload.value;
    },
  },
  actions: {
   async DokumenpayloadFormatter(payload){
      let formatted_payload = {};
      let payload_requeired = new Set([
        "dokumenPemasukan",
        "dokumenTambahan",
        "dataPelabuhan",
        "dataKapal",
        "identitasBarang",
        "penjualBarang",
        "pengirimBarang",
        "pengusahaPLB",
        "pembeliBarang",
        "ppjk",
        "mataUang",
        "dataPengangkutan",
        "beratDanVolume",
        "tempatPenimbunan",
      ])
      Object.keys(payload).forEach(function(key) {
        if(payload_requeired.has(key)){
          Object.assign(formatted_payload, {key:payload[key],reportId:localStorage.getItem("reportId")})
        }
        // console.log(formatted_payload);
      // formatted_payload.reportId=localStorage.getItem("reportId");
    });
      
    },
    handleSubmitReport(context) {
      localStorage.setItem(
        "NotificationType",
        context.state.report.jenisPemberitahuan
      );
      localStorage.setItem("reportId", 2);

      router.push("/plb/add");
    },
    async saveDocument(context,payload) {
      let formatted_payload = {};
      let payload_requeired = new Set([
        "dokumenPemasukan",
        "dokumenTambahan",
        "dataPelabuhan",
        "dataKapal",
        "identitasBarang",
        "penjualBarang",
        "pengirimBarang",
        "pengusahaPLB",
        "pembeliBarang",
        "ppjk",
        "mataUang",
        "dataPengangkutan",
        "beratDanVolume",
        "tempatPenimbunan",
      ])
      Object.keys(payload).forEach(function(key) {
        if(payload_requeired.has(key)){
          formatted_payload[key] = payload[key];
          // formatted_payload[key].reportId=localStorage.getItem("reportId");
        }
      });
      formatted_payload.reportId=localStorage.getItem("reportId");


      console.log(formatted_payload);
      
      try{
        context.commit("SET_LOADING_PLB", {key: "loadingReports", value: true});

        const result = await axios({
          url: baseUrl + "/report/dokumen/save/pemasukan",
          method: "POST",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },data: {dataDokumen:AESEncrypt(formatted_payload)}
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_PO_BARU", data);
        }
      }
     catch (error) {
      console.log(error.response.data);
    } finally {
      context.commit("SET_LOADING_PLB", {key: "loadingReports", value: false});
    }
    }
  },
};

export default plb;
