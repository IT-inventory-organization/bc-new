import axios from "axios";
import { AESDecrypt } from "@/helper/Encryption";
const baseUrl = process.env.VUE_APP_BASE_URL;

const approval = {
  state: {
    loading: {
      loadingReports: false,
    },
    reports: [],
    reportId: [],
    optionsTableReports: {
      page: 1,
      itemsPerPage: 10,
      search: "",
    },
  },
  mutations: {
    SET_LOADING_APPROVAL(state, payload) {
      state.loading[payload.key] = payload.value;
    },
    SET_REPORTS(state, payload) {
      state.reports = payload;
    },
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    SET_OPTIONS_TABLE_REPORTS(state, payload) {
      state.optionsTableReports = Object.assign({}, payload);
    },
  },
  actions: {
    async getAllApproval(context) {
      try {
        context.commit("SET_LOADING_APPROVAL", {
          key: "loadingReports",
          value: true,
        });
        const result = await axios({
          url: baseUrl + "/approval/getAllPerbaikan",
          method: "GET",
          headers: {
            authorization:
              "Bearer " + localStorage.getItem("token_it_inventory"),
          },
        });
        const data = AESDecrypt(result.data.data);
        if (result.data.success) {
          context.commit("SET_REPORTS", data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        context.commit("SET_LOADING_APPROVAL", {
          key: "loadingReports",
          value: false,
        });
      }
    },
  }, // action end
};

export default approval;
