function doGet(e) {
    var userInputText = e.parameter.text;
    var callback = e.parameter.callback;
    var response = {output: []};
    var msg = response.output;

    function help() {
      msg.push({
      type: 'text',
      value: '「' + userInputText + '問目」ですね！'
      });
    }

    if(userInputText=='zyx'){
      msg.push({
        type: 'text',
        value: 'aaaa'
      });
    }else if(userInputText==61||userInputText=='６１'){
      help();
      msg.push({
        type: 'image',
        value: 'https://lh5.googleusercontent.com/mWP0TNIjkP5sJruKP2x9hMFto7sy746_5wmsOFFSpH5ZBM6BkGCycy3l2jS5f2T0zkClu7PAw4qmMwfyqgvxMHsJtIruLXZmLYtKpxgjbsBsTjWSDGw4zP2zLcyRHWqDrEZqUp-BoyzeDaNMK0nOhDQQU3pDZ1562RkjtwKGal3oAH4SeR9Jrc4V_ZjPdvrs=w1280'
      });
    }else{
      msg.push({
        type: 'text',
        value: 'その番号の問題はありません！'
      });
    }

    var responseText = '';
    if (callback) {
        //JSONP
        responseText = callback + '(' + JSON.stringify(response) + ')';
        return send(ContentService.MimeType.JAVASCRIPT, responseText);
    } else {
        //JSON
        return sendJson(response);
    }
}
function send(mimeType, responseText) {
    var textOut = ContentService.createTextOutput();
    textOut.setMimeType(mimeType);
    textOut.setContent(responseText);
    return textOut;
}
function sendJson(response) {
    var textOut = ContentService.createTextOutput();
    var responseText = JSON.stringify(response);
    textOut.setMimeType(ContentService.MimeType.JSON);
    textOut.setContent(responseText);
    return textOut;
}
