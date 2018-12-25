var domain = 'https://result.eolinker.com/nTM5JuQ93d00dbc391f65c7781e9eb6ba6d189e73f73b18?uri=';

/**
 * 网络请求封装
 * @param url
 * @param data
 * @param success
 * @param fail
 * @param method
 * @param msg 定义loading框里的文本信息，空则不显示加载框
 */
function fetch(url, data, _success2, _fail2, method, msg) {
  wx.showNavigationBarLoading();

  // if (msg) wx.showLoading({title: msg});

  wx.request({
    url: domain + url,
    data: data || {},
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: method || 'GET',
    success: function success(res) {
      if (res.statusCode === 200) _success2 && _success2(res.data); else _fail2 && _fail2();
    },
    fail: function fail(res) {
      _fail2 && _fail2();
    },
    complete: function complete(res) {
      wx.hideNavigationBarLoading();
      // if (msg) wx.hideLoading();
    }
  });
}

var getInfo = function getInfo(success, fail) {
  return fetch('/update-info/info', {}, success, fail);
};

module.exports = {
  getInfo: getInfo
}