const employeeRepo = require("../repo/employeeRepo");
var common_handle_response = require("../services/response_handle_service");
var comman_response = require("../entity/common_response");
const config = require("../config/appConfig.json");

function employeeDetails(req, res) {
  var errorCode;
  var result;

  return common_handle_response.handleCommonResponse(async (resCb) => {
    result = await employeeRepo.gettingEmployeeDetails();
    errorCode = config.response_code.success;
    return resCb({
      data: comman_response.responseCb(
        comman_response.headerCb({ code: errorCode }),
        comman_response.bodyCb({ val: result })
      ),
    });
  }, res);
}

async function addingEmployee(req, res) {
  var errorCode;
  var result;

  return common_handle_response.handleCommonResponse(async (resCb) => {
    result = await employeeRepo.insertEmployee(req.body);
    errorCode = config.response_code.success;
    return resCb({
      data: comman_response.responseCb(
        comman_response.headerCb({ code: errorCode }),
        comman_response.bodyCb({ val: result })
      ),
    });
  }, res);
}

async function updatingEmployee(req, res) {
  var errorcode;
  var result;

  return common_handle_response.handleCommonResponse(async (resCb) => {
    result = await employeeRepo.updateEmployee(req.body);
    errorcode = config.response_code.success;
    return resCb({
      data: comman_response.responseCb(
        comman_response.headerCb({ code: errorcode }),
        comman_response.bodyCb({ val: result })
      ),
    });
  }, res);
}
async function deleteEmployee(req, res) {
  var errorCode;
  var result;
  return common_handle_response.handleCommonResponse(async (rescb) => {
    result = await employeeRepo.deleteTheEmployee(req.params.id);
    errorCode = config.response_code.success;
    return rescb({
      data: comman_response.responseCb(
        comman_response.headerCb({ code: errorCode }),
        comman_response.bodyCb({ val: "deleted" })
      ),
    });
  }, res);
}

async function totalEmployees(req, res) {
  var errorCode;
  var result;
  return common_handle_response.handleCommonResponse(async (rescb) => {
    result = await employeeRepo.countEmployees();
    errorCode = config.response_code.success;
    return rescb({
      data: comman_response.responseCb(
        comman_response.headerCb({
          code:
            result.length < 1
              ? config.response_code.empty_results
              : config.response_code.success,
        }),
        comman_response.bodyCb({ val: {employee : result[0]} })
      ),
    });
  }, res);
}
module.exports = {
  employeeDetails,
  addingEmployee,
  updatingEmployee,
  deleteEmployee,
  totalEmployees,
};
