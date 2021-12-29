import axios from "axios";
import Swal from "sweetalert2";
// import router from "@/router/";
import { AESDecrypt } from "@/helper/Encryption";

const baseUrl = process.env.VUE_APP_BASE_URL;

const approval = {
  state: {
    reports: {
      menunggu: [

      ],
      disetujui: [

      ],
      perbaikan: [
        {
          nomor: 1234567890,
          exportir: "Harvey and Sons",
          nomor_po: "PO-00001",
          tanggal: "01-01-2021",
        },
        {
          nomor: 1234567890,
          exportir: "Kris Group",
          nomor_po: "PO-00001",
          tanggal: "01-01-2021",
        },
        {
          nomor: 1234567890,
          exportir: "Kunde, Dickens and Harber",
          nomor_po: "PO-00001",
          tanggal: "01-01-2021",
        },
      ],
    },
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
    isLoading: false,
  },
  mutations: {
    SET_REPORTS(state, payload) {
      state.reports[payload.key] = payload.value;
    },
    SET_ISLOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async getReportsMenunggu(context) {
      try {
        context.commit("SET_ISLOADING", true);
        const result = await axios({
          url: `${baseUrl}/approval/getAllmenunggu/`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_it_inventory")}`,
          },
        });
        context.commit("SET_REPORTS", {
          key: "menunggu",
          value: AESDecrypt(result.data.data),
        });
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire("Tidak ada jaringan!", "", "error");
        }
      } finally {
        context.commit("SET_ISLOADING", false);
      }
    }, 
    async getReportsDisetujui(context) {
      try {
        context.commit("SET_ISLOADING", true);
        const result = await axios({
          url: `${baseUrl}/approval/getAlldisetujui/`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_it_inventory")}`,
          },
        });
        context.commit("SET_REPORTS", {
          key: "disetujui",
          value: AESDecrypt(result.data.data),
        });
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire("Tidak ada jaringan!", "", "error");
        }
      } finally {
        context.commit("SET_ISLOADING", false);
      }
    }, 
    async getReportsPerbaikan(context) {
      try {
        context.commit("SET_ISLOADING", true);
        const result = await axios({
          url: `${baseUrl}/approval/getAllPerbaikan/`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token_it_inventory")}`,
          },
        });
        context.commit("SET_REPORTS", {
          key: "perbaikan",
          value: AESDecrypt(result.data.data),
        });
      } catch (error) {
        if (error.message === "Network Error") {
          Swal.fire("Tidak ada jaringan!", "", "error");
        }
      } finally {
        context.commit("SET_ISLOADING", false);
      }
    }
  },
};

export default approval;
